# Deploying Optiva React Site to Vercel

The new React website is located in the `optiva-react/` subdirectory. To deploy it on Vercel:

## Method 1: Configure Vercel Dashboard (Recommended)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your **Optiva-Landing-Page** project
3. Go to **Settings** → **General**
4. Find **Root Directory** section
5. Click **Edit** and enter: `optiva-react`
6. Click **Save**
7. Go to **Deployments** tab
8. Click **⋯** (three dots) on the latest deployment
9. Select **Redeploy**

Your React site will now deploy correctly!

## Method 2: Automatic with vercel.json

Alternatively, push this `vercel.json` file to the root:

```json
{
  "buildCommand": "cd optiva-react && npm run build",
  "outputDirectory": "optiva-react/dist",
  "installCommand": "cd optiva-react && npm install"
}
```

Then commit and push:
```bash
git add vercel.json
git commit -m "Configure Vercel for React app"
git push origin main
```

## Verify Deployment

Once deployed, your site should be live at your Vercel URL with the new minimalist black & white design!

---

**Note**: The old `index.html` in the root is no longer used. All content is now in the React app.
