# Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Steps:

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Login with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select your repository: `sagar-my/My-Portfolio-Sagar`
   - Click "Import"

3. **Configure Build Settings**
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (or `yarn build`)
   - **Output Directory:** `build`
   - **Install Command:** `npm install` (or `yarn install`)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://your-portfolio.vercel.app`

### Automatic Deployments
- Every push to `main` branch will automatically deploy
- You'll get a unique URL for each deployment

---

## Option 2: Deploy to Netlify

### Steps:

1. **Go to [netlify.com](https://netlify.com)**
   - Sign up/Login with your GitHub account

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Select your repository: `sagar-my/My-Portfolio-Sagar`

3. **Configure Build Settings**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build` (or `yarn build`)
   - **Publish directory:** `frontend/build`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages package:**
   ```bash
   cd frontend
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://sagar-my.github.io/My-Portfolio-Sagar",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Recommended: Vercel
- ✅ Easiest setup
- ✅ Automatic deployments
- ✅ Free custom domain
- ✅ Fast CDN
- ✅ Best for React apps

