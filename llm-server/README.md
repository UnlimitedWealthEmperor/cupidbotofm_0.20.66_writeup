# CupidBot Local LLM Server

A FastAPI server that provides OpenAI-compatible API endpoints using Ollama for local LLM inference.

## Features

- 🔓 **OpenAI-compatible API** - Drop-in replacement for OpenAI endpoints
- 🏠 **Fully local** - No data sent to external servers
- 🔥 **Uncensored models** - Uses Dolphin-Llama3 by default (no refusals)
- ⚡ **Fast** - Runs on your local GPU/CPU via Ollama
- 🎯 **CupidBot integration** - Custom `/api/generateReply` endpoint with dating-specific prompts

## Quick Start

### 1. Install Ollama

```bash
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh
```

### 2. Start the Server

```bash
cd llm-server
chmod +x run.sh
./run.sh
```

This will:
- Start Ollama (if not running)
- Pull the default model (dolphin-llama3:8b) if needed
- Create Python venv and install dependencies
- Start the FastAPI server on port 9999

### 3. Test the API

```bash
# Health check
curl http://localhost:9999/health

# List models
curl http://localhost:9999/v1/models

# Generate a reply (CupidBot format)
curl -X POST http://localhost:9999/api/generateReply \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"msg": "hey cutie 😊", "isOutgoing": false}
    ],
    "chatStyle": "youth",
    "interestLevel": "high",
    "platform": "snapchat"
  }'

# OpenAI-compatible chat
curl -X POST http://localhost:9999/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dolphin-llama3:8b",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

## API Endpoints

### OpenAI-Compatible

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/chat/completions` | POST | Chat completions (OpenAI format) |
| `/v1/models` | GET | List available models |

### CupidBot-Specific

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/generateReply` | POST | Generate dating reply with context |
| `/api/getMe` | GET/POST | Mock user/subscription data |
| `/api/syncState` | GET/POST | Mock sync endpoint |
| `/api/logEvent` | POST | Mock logging (ignored) |

## Configuration

Environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `OLLAMA_BASE_URL` | `http://localhost:11434` | Ollama server URL |
| `DEFAULT_MODEL` | `dolphin-llama3:8b` | Default model to use |
| `SERVER_PORT` | `9999` | Server port |

## Recommended Models

| Model | Size | Best For |
|-------|------|----------|
| `dolphin-llama3:8b` | 4.7GB | Best balance (default) |
| `dolphin-mistral` | 4.1GB | Faster, slightly lower quality |
| `dolphin-llama3:70b` | 40GB | Highest quality (needs 48GB+ RAM) |
| `nous-hermes-2` | 4.1GB | Good reasoning |
| `samantha` | 4.1GB | More emotional/caring tone |

To switch models:

```bash
# Pull a different model
ollama pull nous-hermes-2

# Set as default
export DEFAULT_MODEL=nous-hermes-2
./run.sh
```

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:9999/docs
- **ReDoc**: http://localhost:9999/redoc

## Troubleshooting

### Ollama not connecting

```bash
# Make sure Ollama is running
ollama serve

# Check if it's accessible
curl http://localhost:11434/api/tags
```

### Model not found

```bash
# Pull the model
ollama pull dolphin-llama3:8b

# List available models
ollama list
```

### Slow responses

- Ensure you're using GPU acceleration
- Try a smaller model (7B instead of 13B/70B)
- Check `ollama ps` for resource usage

## License

Part of the CupidBot offline toolkit.
