# VeriFox

VeriFox is a branded static website demo for an AI-powered scam safety assistant. It includes multiple linked pages, a responsive layout, and an interactive bottom AI function bar.

## Files
- `index.html` — Hero landing page and product overview.
- `features.html` — Interactive product tools and sample AI checks.
- `about.html` — Problem statement, solution, and values.
- `contact.html` — Contact and deployment guidance.
- `styles.css` — Global styling, responsive layout, and bottom function bar.
- `script.js` — Page interactions, tool simulation, voice assistant fallback, and PDF generation.

## Run locally
1. Open any of the HTML files in your browser.
2. Or serve the folder with a simple static server.

### Using Python
```powershell
cd "c:\Users\sbpma\OneDrive\Document\C240 AI Essentials and Innovations\Projects\Final Project"
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

## GitHub Pages deployment
1. Create a GitHub repository and push this folder to the repository root.
2. In repository settings, enable GitHub Pages from the `main` branch and root.
3. Visit the published URL once the site is available.

## Notes
- The site is a static demo and uses browser-side interactions only.
- Voice recognition works best in Chrome or Edge with microphone permission.
- PDF report generation uses `jspdf` for client-side export.
