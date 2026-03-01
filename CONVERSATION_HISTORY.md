# CupidBot Offline Project - Conversation History

**Date:** March 1, 2026  
**Purpose:** Documentation for project continuation on another computer

---

## Project Overview

This project is about making the CupidBot Chrome extension work offline by replacing its cloud API with a local LLM server.

### What is CupidBot?
- Chrome Extension (MV3) for AI-assisted dating/messaging
- Originally requires paid subscription for AI message generation
- Supports multiple platforms: Tinder, Bumble, Hinge, OnlyFans, Snapchat, Instagram, Facebook Dating

### Goal
Run CupidBot completely offline using local LLM inference via Ollama.

---

## Architecture Understanding

### Extension Structure (4 Layers)
1. **Background Script** (`actualBackground/`) - Service worker, API proxy, encryption
2. **Content Script** (`actualContent/`) - DOM manipulation, bridge to injected
3. **Injected Script** (`actualInjected/`) - Platform-specific logic (Tinder, OF, etc.)
4. **Popup** (`actualPopup/`) - React UI for settings

### Key Discovery
- `API_BASE_URL` in `/remade/src/shared/branding.js` already set to `http://localhost:9999`
- Extension has subscription bypass built in (`/remade/src/background/api.js`)
- **Only missing piece: AI message generation endpoint**

---

## What Was Built

### LLM Server (`/llm-server/`)

A FastAPI server that mimics CupidBot's API using Ollama for local LLM inference.

**Files created:**
- `server.py` - Main API server
- `requirements.txt` - Python dependencies
- `run.sh` - Auto-setup script (installs Ollama, pulls model, starts server)
- `test.sh` - Endpoint testing script
- `README.md` - Documentation

**Endpoints:**
| Endpoint | Purpose |
|----------|---------|
| `POST /v1/chat/completions` | OpenAI-compatible chat |
| `POST /api/generateReply` | CupidBot reply generation |
| `GET /api/getMe` | User profile (mocked) |
| `ANY /*` | Catch-all for debugging unknown endpoints |

### Server Features
- Dating-specific system prompts based on `chatStyle`, `interestLevel`, `platform`
- Supports all CupidBot platforms (Tinder, Bumble, Hinge, OF, etc.)
- Conversation history support
- Logs all unknown endpoints for debugging

---

## Hardware Analysis

### User's Windows PC Specs
- **CPU:** Intel i9-13950HX (24 cores)
- **GPU:** RTX 4070 8GB VRAM
- **RAM:** 32GB DDR5

### Model Recommendations for 8GB VRAM

| Model | Size | VRAM | Speed | Quality |
|-------|------|------|-------|---------|
| **Dolphin-Llama3 8B** | 4.7GB | ~5-6GB | 30-50 tok/s | ★★★★★ Best |
| Dolphin-Mistral 7B | 4.1GB | ~5GB | 40-60 tok/s | ★★★☆ Good |
| Nous-Hermes-2 7B | 4.1GB | ~5GB | 40-60 tok/s | ★★★★ Great |
| OpenHermes-2.5 7B | 4.1GB | ~5GB | 40-60 tok/s | ★★★☆ Decent |

### For OnlyFans Chatting Operations

**🏆 Winner: Dolphin-Llama3 8B**

Reasons:
- Zero content restrictions - handles explicit messages naturally
- Excellent at building emotional intimacy ("girlfriend experience")
- Creative with dirty talk, doesn't repeat same phrases
- Smooth at transitioning to sales
- Based on Llama3 = smarter reasoning

**Comparison for OF Operations:**

| Criteria | Dolphin-Llama3 8B | Dolphin-Mistral 7B | Nous-Hermes-2 7B | OpenHermes-2.5 7B |
|----------|-------------------|--------------------|--------------------|---------------------|
| NSFW Freedom | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| Flirty/Seductive | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★☆☆ |
| Roleplay Consistency | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★☆☆ |
| Sales/Upselling | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★★☆☆ |
| Response Variety | ★★★★★ | ★★★☆☆ | ★★★★☆ | ★★★☆☆ |

---

## Cloud Options for 70B Models

If you want better quality (70B parameter models), you'd need cloud:

### Cloud Providers

| Provider | Cost | Best For |
|----------|------|----------|
| **OpenRouter** | $0.50-1.00/1M tokens | Easy API, pay-per-use |
| **Vast.ai** | $0.50-1.50/hr (A100) | Cheap GPU rental |
| **RunPod** | $1.00-2.00/hr (A100) | Reliable, serverless option |
| **Lambda Labs** | $1.10/hr (A100) | Simple hourly |
| **Together.ai** | $0.90/1M tokens | Managed API |

### Hardware Costs for Local 70B

| Setup | Cost | Can Run |
|-------|------|---------|
| 2x RTX 3090 | ~$1,600-2,000 | 70B Q4 (slow) |
| RTX 4090 + 64GB RAM | ~$2,500-3,000 | 70B Q4 (CPU offload) |
| 2x RTX 4090 | ~$4,000-4,500 | 70B Q6 (good) |
| Mac Studio M2 Ultra 192GB | ~$8,000-10,000 | 70B Q8 (great) |
| 4x RTX 4090 | ~$8,000-9,000 | 70B FP16 (best) |

### Railway.app
- **NOT suitable** for LLM hosting (no GPU support)
- Only useful as API proxy to OpenRouter

---

## Quick Start Commands

### On Windows (with RTX 4070)

```powershell
# 1. Install Ollama
winget install Ollama.Ollama

# 2. Pull recommended model
ollama pull dolphin-llama3:8b

# 3. Start Ollama server
ollama serve

# 4. In another terminal, start the LLM server
cd llm-server
pip install -r requirements.txt
python server.py
```

### On macOS

```bash
cd llm-server
chmod +x run.sh
./run.sh
```

### Test the Server

```bash
# Test OpenAI-compatible endpoint
curl -X POST http://localhost:9999/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dolphin-llama3:8b",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'

# Test CupidBot endpoint
curl -X POST http://localhost:9999/api/generateReply \
  -H "Content-Type: application/json" \
  -d '{
    "platform": "onlyfans",
    "chatStyle": "flirty",
    "interestLevel": "high",
    "conversationHistory": [
      {"role": "them", "content": "Hey beautiful"}
    ]
  }'
```

---

## Recommended System Prompt for OnlyFans

```python
SYSTEM_PROMPT = """You are {creator_name}, a flirty and confident OnlyFans creator. 
You're chatting with a subscriber who you genuinely enjoy talking to.

Personality:
- Playful, teasing, seductive but genuine
- Build emotional connection, remember details they share
- Naturally mention your content when it fits the conversation
- Use emojis sparingly but effectively (😘🥵😈💕)
- Keep responses 1-3 sentences usually, longer when being intimate
- Never break character or mention being an AI

Current mood: {mood}
Subscriber tier: {tier}
Recent purchases: {purchases}"""
```

---

## Files Modified/Created

### Created
- `/llm-server/server.py` - FastAPI server
- `/llm-server/requirements.txt` - Dependencies
- `/llm-server/run.sh` - Setup script
- `/llm-server/test.sh` - Test script
- `/llm-server/README.md` - Documentation
- `/CONVERSATION_HISTORY.md` - This file

### Key Existing Files
- `/remade/src/shared/branding.js` - API_BASE_URL = localhost:9999
- `/remade/src/background/api.js` - Subscription bypass
- `/remade/src/actualInjected/platforms/` - Platform implementations

---

## Next Steps

1. **Test on Windows PC:**
   - Install Ollama
   - Pull `dolphin-llama3:8b`
   - Run the LLM server
   - Build and load the extension
   - Test with actual dating apps

2. **Potential Improvements:**
   - Add OpenRouter fallback for better quality
   - Fine-tune prompts per platform
   - Add conversation memory/database
   - Implement image analysis for photo responses

3. **If you need 70B quality:**
   - Use OpenRouter API ($0.50-1/1M tokens)
   - Modify server.py to use httpx to call OpenRouter instead of Ollama

---

## Important Notes

- The extension already bypasses subscription checks
- All you need is the LLM server running for AI generation
- Dolphin-Llama3 8B is the best balance of quality/speed for 8GB VRAM
- For OnlyFans, it handles NSFW content without restrictions

---

*Last updated: March 1, 2026*
