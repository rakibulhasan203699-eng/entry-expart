# Telegram Backend for Chrome Extension

## Description
This Node.js backend server receives POST requests from a Chrome Extension
and sends messages to a Telegram chat or group using a bot token.

## Usage
1. Deploy on Glitch or Render.
2. Use the public URL in your Chrome Extension.
3. Send messages using POST /send-message with:
   - text: the message
   - secretKey: your secret key
