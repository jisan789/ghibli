<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1gAbgEK55FUcwsaPNWfKNe05L8Vrme9P-

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. Push this repo to GitHub
2. Create a new Vercel project from the repo
3. Add Environment Variable: `GEMINI_API_KEY` (Project → Settings → Environment Variables)
4. Deploy. Vercel will build the Vite app and host the serverless function at `/api/generate`.
