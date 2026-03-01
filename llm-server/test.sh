#!/bin/bash

# Test the LLM Server endpoints

BASE_URL="${1:-http://localhost:9999}"

echo "Testing LLM Server at: $BASE_URL"
echo "================================"
echo ""

# Health check
echo "1. Health Check:"
curl -s "$BASE_URL/health" | jq .
echo ""

# List models
echo "2. List Models:"
curl -s "$BASE_URL/v1/models" | jq '.data[].id' 2>/dev/null || echo "No models available (Ollama may not be running)"
echo ""

# Test getMe (mock subscription)
echo "3. Test getMe (subscription mock):"
curl -s "$BASE_URL/api/getMe" | jq '{user: .user.email, has_snap: .subscriptionMap["ofm-snap"].isAuthorized}'
echo ""

# Test generateReply (CupidBot format)
echo "4. Test generateReply (CupidBot format):"
curl -s -X POST "$BASE_URL/api/generateReply" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"msg": "hey! how are you?", "isOutgoing": false},
      {"msg": "im good! just chilling. wbu?", "isOutgoing": true},
      {"msg": "same lol. what are you up to tonight?", "isOutgoing": false}
    ],
    "chatStyle": "youth",
    "interestLevel": "high",
    "platform": "snapchat"
  }' | jq .
echo ""

# Test OpenAI-compatible endpoint
echo "5. Test OpenAI-compatible chat completion:"
curl -s -X POST "$BASE_URL/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dolphin-llama3:8b",
    "messages": [
      {"role": "system", "content": "You are a flirty person chatting on a dating app. Be brief and casual."},
      {"role": "user", "content": "hey what are you doing tonight? 😏"}
    ],
    "max_tokens": 100
  }' | jq '{reply: .choices[0].message.content, tokens: .usage.total_tokens}'
echo ""

# Test unknown endpoint (catch-all)
echo "6. Test unknown endpoint (catch-all logging):"
curl -s -X POST "$BASE_URL/api/someRandomEndpoint" \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}' | jq .
echo ""

echo "================================"
echo "Tests complete!"
