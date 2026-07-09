# VeriFox

VeriFox: AI Scam Safety Chatbot for Singapore Users.

VeriFox is an AI scam safety chatbot for Singapore users. It helps users check suspicious messages, links, and screenshots, then gives a risk score, explains the scam warning signs, and recommends safe actions. VeriFox uses Singapore scam-safety knowledge and a second AI checker to make the advice more reliable.

**Tagline:** Ask VeriFox before you trust.

This repo is the static marketing website. The actual chatbot experience is powered by a Botpress webchat bubble embedded on every page, backed by an n8n workflow, Supabase vector knowledge base, and a two-agent (analyser + verifier) AI pipeline. See `features.html` for the full feature breakdown and system flow.

## Files
- `index.html` — Hero landing page, problem statement, feature preview, how-it-works, and disclaimer.
- `features.html` — Full feature breakdown (Q&A, message/link checker, screenshot checker, risk score, two-agent verification, knowledge base, PDF report), sample result, and future implementation.
- `about.html` — Problem statement, target audience, solution, and values.
- `contact.html` — Getting started, local run, and deployment guidance.
- `styles.css` — Global styling and responsive layout.
- `script.js` — Mobile nav toggle, quick-tools popup, and smooth-scroll navigation.

## Current scope
Working: Scam Q&A chatbot, message/link checker, screenshot checker, risk score & level, warning-sign explanations, recommended safety actions, two-agent verification, Singapore scam knowledge base (RAG), PDF report generation.

Not yet implemented (planned): PDF upload checking, send-to-relative alerts (Telegram/WhatsApp/email), voice assistant.

## Run locally
1. Open any of the HTML files in your browser.
2. Or serve the folder with a simple static server.

### Using Python
```powershell
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

## GitHub Pages deployment
1. Create a GitHub repository and push this folder to the repository root.
2. In repository settings, enable GitHub Pages from the `main` branch and root.
3. Visit the published URL once the site is available.

## Notes
- The site is a static front-end; the chat bubble (Botpress) handles the live scam-check flow.
- Voice assistant, PDF upload checking, and send-to-relative are future enhancements — not part of the current build.
