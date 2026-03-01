#!/bin/bash

# CupidBot Local LLM Server - Startup Script

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🤖 CupidBot Local LLM Server${NC}"
echo "================================"

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo -e "${YELLOW}⚠️  Ollama not found. Installing...${NC}"
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install ollama
    else
        curl -fsSL https://ollama.com/install.sh | sh
    fi
fi

# Check if Ollama is running
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Ollama not running. Starting...${NC}"
    ollama serve &
    sleep 3
fi

# Check for model
MODEL="${DEFAULT_MODEL:-dolphin-llama3:8b}"
echo -e "${BLUE}📥 Checking for model: ${MODEL}${NC}"

if ! ollama list | grep -q "${MODEL}"; then
    echo -e "${YELLOW}📥 Pulling model ${MODEL}...${NC}"
    echo "   This may take a few minutes on first run..."
    ollama pull "${MODEL}"
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo -e "${BLUE}🐍 Creating Python virtual environment...${NC}"
    python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
pip install -q -r requirements.txt

# Start server
echo ""
echo -e "${GREEN}✅ Starting LLM Server on port 9999${NC}"
echo -e "${GREEN}   API: http://localhost:9999${NC}"
echo -e "${GREEN}   Docs: http://localhost:9999/docs${NC}"
echo ""

export DEFAULT_MODEL="${MODEL}"
export SERVER_PORT=9999

python -m uvicorn server:app --host 0.0.0.0 --port 9999 --reload
