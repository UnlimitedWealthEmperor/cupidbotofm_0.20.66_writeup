"""
Local LLM Server - OpenAI-compatible API using Ollama
Designed for CupidBot offline mode
"""

import os
import json
import time
import uuid
import httpx
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from contextlib import asynccontextmanager

# Configuration
OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
DEFAULT_MODEL = os.getenv("DEFAULT_MODEL", "dolphin-llama3:8b")
SERVER_PORT = int(os.getenv("SERVER_PORT", "9999"))

# Ollama client
ollama_client = httpx.AsyncClient(base_url=OLLAMA_BASE_URL, timeout=120.0)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    print(f"🚀 Starting LLM Server on port {SERVER_PORT}")
    print(f"📡 Ollama backend: {OLLAMA_BASE_URL}")
    print(f"🤖 Default model: {DEFAULT_MODEL}")
    
    # Check Ollama connection
    try:
        resp = await ollama_client.get("/api/tags")
        models = resp.json().get("models", [])
        print(f"✅ Connected to Ollama - {len(models)} models available")
        for m in models[:5]:
            print(f"   • {m['name']}")
    except Exception as e:
        print(f"⚠️  Warning: Could not connect to Ollama: {e}")
        print("   Make sure Ollama is running: ollama serve")
    
    yield
    
    await ollama_client.aclose()
    print("👋 Server shutting down")


app = FastAPI(
    title="CupidBot LLM Server",
    description="OpenAI-compatible API for local LLM inference via Ollama",
    version="1.0.0",
    lifespan=lifespan
)

# CORS - allow extension to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============ Pydantic Models (OpenAI-compatible) ============

class ChatMessage(BaseModel):
    role: str = Field(..., description="Role: system, user, or assistant")
    content: str = Field(..., description="Message content")
    name: Optional[str] = None


class ChatCompletionRequest(BaseModel):
    model: str = Field(default=DEFAULT_MODEL)
    messages: List[ChatMessage]
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 500
    top_p: Optional[float] = 0.9
    stop: Optional[List[str]] = None
    stream: Optional[bool] = False


class ChatCompletionChoice(BaseModel):
    index: int
    message: ChatMessage
    finish_reason: str = "stop"


class Usage(BaseModel):
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int


class ChatCompletionResponse(BaseModel):
    id: str
    object: str = "chat.completion"
    created: int
    model: str
    choices: List[ChatCompletionChoice]
    usage: Usage


class ModelInfo(BaseModel):
    id: str
    object: str = "model"
    created: int = 0
    owned_by: str = "ollama"


class ModelListResponse(BaseModel):
    object: str = "list"
    data: List[ModelInfo]


# ============ CupidBot-specific Models ============

class GenerateReplyRequest(BaseModel):
    """Request format matching CupidBot's generateReply endpoint"""
    messages: List[Dict[str, Any]]
    chatStyle: str = "youth"  # "youth" or "mature"
    interestLevel: str = "medium"  # "high", "medium", "low"
    platform: str = "snapchat"
    persona: Optional[str] = None
    maxLength: Optional[int] = 150


class GenerateReplyResponse(BaseModel):
    reply: str
    confidence: float = 0.95
    tokens_used: int


# ============ Helper Functions ============

def build_cupid_system_prompt(chat_style: str, interest_level: str, platform: str, persona: Optional[str] = None) -> str:
    """Build system prompt based on CupidBot settings"""
    
    style_desc = {
        "youth": "casual, uses modern slang, emojis occasionally, playful and fun",
        "mature": "sophisticated, witty, confident, uses proper grammar"
    }.get(chat_style, "natural and friendly")
    
    interest_desc = {
        "high": "very interested and eager, asks questions, flirty, enthusiastic",
        "medium": "interested but not desperate, balanced, engaging",
        "low": "slightly aloof, makes them work for attention, selective with responses"
    }.get(interest_level, "naturally engaged")
    
    platform_style = {
        "snapchat": "Keep messages very short (1-2 sentences max). Casual, snappy.",
        "instagram": "Short to medium length. Can use emojis. Casual but engaging.",
        "tinder": "Flirty and direct. Medium length. Goal is to get their number or set up a date.",
        "bumble": "Friendly and interesting. Show personality. Medium length.",
        "whatsapp": "Can be slightly longer. Conversational flow.",
        "telegram": "Natural conversation length. Can be more detailed.",
        "x": "Brief, witty. Under 280 chars ideally.",
        "reddit": "Can be more detailed and substantive.",
    }.get(platform, "Adapt to natural conversation length.")
    
    persona_section = f"\n\nPersona details: {persona}" if persona else ""
    
    return f"""You are chatting on a dating/social platform. Your communication style is {style_desc}.

Your interest level: {interest_desc}

Platform ({platform}): {platform_style}

Rules:
- Never mention you're an AI or bot
- Never break character
- Match the energy of their messages
- Be natural, not robotic
- Don't be overly agreeable or desperate
- Use the conversation context to give relevant responses
- If they send media (photo/video), acknowledge it naturally
- Keep the conversation moving forward{persona_section}

Respond with ONLY your reply message, nothing else."""


async def call_ollama(
    model: str,
    messages: List[Dict[str, str]],
    temperature: float = 0.7,
    max_tokens: int = 500,
) -> Dict[str, Any]:
    """Call Ollama API"""
    
    payload = {
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {
            "temperature": temperature,
            "num_predict": max_tokens,
        }
    }
    
    response = await ollama_client.post("/api/chat", json=payload)
    
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=f"Ollama error: {response.text}")
    
    return response.json()


# ============ API Endpoints ============

@app.get("/")
async def root():
    return {
        "name": "CupidBot LLM Server",
        "status": "running",
        "ollama_url": OLLAMA_BASE_URL,
        "default_model": DEFAULT_MODEL,
    }


@app.get("/health")
async def health():
    """Health check endpoint"""
    try:
        resp = await ollama_client.get("/api/tags")
        return {"status": "healthy", "ollama": "connected"}
    except:
        return {"status": "degraded", "ollama": "disconnected"}


@app.get("/v1/models", response_model=ModelListResponse)
@app.get("/models", response_model=ModelListResponse)
async def list_models():
    """List available models (OpenAI-compatible)"""
    try:
        resp = await ollama_client.get("/api/tags")
        models = resp.json().get("models", [])
        return ModelListResponse(
            data=[ModelInfo(id=m["name"], created=0) for m in models]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to list models: {e}")


@app.post("/v1/chat/completions", response_model=ChatCompletionResponse)
@app.post("/chat/completions", response_model=ChatCompletionResponse)
async def chat_completions(request: ChatCompletionRequest):
    """OpenAI-compatible chat completions endpoint"""
    
    messages = [{"role": m.role, "content": m.content} for m in request.messages]
    
    result = await call_ollama(
        model=request.model or DEFAULT_MODEL,
        messages=messages,
        temperature=request.temperature or 0.7,
        max_tokens=request.max_tokens or 500,
    )
    
    response_content = result.get("message", {}).get("content", "")
    
    # Estimate tokens (rough)
    prompt_tokens = sum(len(m["content"].split()) * 1.3 for m in messages)
    completion_tokens = len(response_content.split()) * 1.3
    
    return ChatCompletionResponse(
        id=f"chatcmpl-{uuid.uuid4().hex[:8]}",
        created=int(time.time()),
        model=request.model or DEFAULT_MODEL,
        choices=[
            ChatCompletionChoice(
                index=0,
                message=ChatMessage(role="assistant", content=response_content),
                finish_reason="stop"
            )
        ],
        usage=Usage(
            prompt_tokens=int(prompt_tokens),
            completion_tokens=int(completion_tokens),
            total_tokens=int(prompt_tokens + completion_tokens)
        )
    )


# ============ CupidBot-specific Endpoints ============

@app.post("/api/generateReply", response_model=GenerateReplyResponse)
async def generate_reply(request: GenerateReplyRequest):
    """CupidBot's generateReply endpoint - generates contextual dating replies"""
    
    # Build system prompt based on settings
    system_prompt = build_cupid_system_prompt(
        chat_style=request.chatStyle,
        interest_level=request.interestLevel,
        platform=request.platform,
        persona=request.persona
    )
    
    # Convert conversation history to chat format
    messages = [{"role": "system", "content": system_prompt}]
    
    for msg in request.messages:
        role = "assistant" if msg.get("isOutgoing") or msg.get("fromMe") else "user"
        content = msg.get("msg") or msg.get("text") or msg.get("content", "")
        if content:
            messages.append({"role": role, "content": content})
    
    # Call Ollama
    result = await call_ollama(
        model=DEFAULT_MODEL,
        messages=messages,
        temperature=0.8,
        max_tokens=request.maxLength or 150,
    )
    
    reply = result.get("message", {}).get("content", "").strip()
    
    # Clean up response (remove quotes if present)
    if reply.startswith('"') and reply.endswith('"'):
        reply = reply[1:-1]
    
    tokens_used = int(len(reply.split()) * 1.3)
    
    return GenerateReplyResponse(
        reply=reply,
        confidence=0.95,
        tokens_used=tokens_used
    )


@app.post("/api/getMe")
@app.get("/api/getMe")
async def get_me():
    """Mock getMe endpoint for offline mode"""
    return {
        "user": {"id": "local-user", "email": "offline@localhost"},
        "subscriptionMap": {
            "ofm-da": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-snap": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-ig": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-x": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-wa": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-tg": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-reddit": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-tiktok": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
            "ofm-discord": {"isAuthorized": True, "accountLimit": 999, "status": "active"},
        },
        "accessToken": "local-offline-token"
    }


@app.post("/api/syncState")
@app.get("/api/syncState")
async def sync_state():
    """Mock syncState endpoint"""
    return {"success": True, "synced": True}


@app.post("/api/logEvent")
async def log_event(data: dict = {}):
    """Mock logging endpoint - just accept and ignore"""
    return {"success": True}


@app.post("/api/getLatestScriptVersions")
@app.get("/api/getLatestScriptVersions")
async def get_script_versions():
    """Mock script versions - return empty to use local scripts"""
    return {
        "scripts": {},
        "useLocal": True
    }


# ============ Catch-All Endpoint Handler ============

@app.api_route("/api/{endpoint:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def catch_all_api(endpoint: str, request: Request):
    """
    Catch-all handler for any API endpoint.
    Logs the request for debugging and attempts to handle it intelligently.
    """
    body = {}
    try:
        body = await request.json()
    except:
        pass
    
    print(f"\n{'='*60}")
    print(f"📡 INCOMING API REQUEST: /api/{endpoint}")
    print(f"   Method: {request.method}")
    print(f"   Body: {json.dumps(body, indent=2)[:500]}...")
    print(f"{'='*60}\n")
    
    # Handle common AI-related endpoints
    ai_endpoints = [
        'generateReply', 'getReply', 'suggestReply', 'aiReply', 
        'chatCompletion', 'autoReply', 'getMessage', 'getResponse',
        'processMessage', 'handleConversation'
    ]
    
    if any(ep.lower() in endpoint.lower() for ep in ai_endpoints):
        # Route to AI generation
        messages = body.get('messages', body.get('conversation', []))
        if not messages and 'msg' in body:
            messages = [body]
        
        return await generate_reply(GenerateReplyRequest(
            messages=messages if isinstance(messages, list) else [],
            chatStyle=body.get('chatStyle', body.get('chat_style', 'youth')),
            interestLevel=body.get('interestLevel', body.get('interest_level', 'medium')),
            platform=body.get('platform', body.get('app', 'snapchat')),
            persona=body.get('persona'),
            maxLength=body.get('maxLength', 150)
        ))
    
    # Default response for unknown endpoints
    print(f"⚠️  Unknown endpoint: {endpoint} - returning success stub")
    return {
        "success": True,
        "endpoint": endpoint,
        "message": "Endpoint received but not implemented",
        "received_body": body
    }


# ============ Run Server ============

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "server:app",
        host="0.0.0.0",
        port=SERVER_PORT,
        reload=True,
        log_level="info"
    )
