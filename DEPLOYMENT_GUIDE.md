# 🚀 QuakeSafe Deployment Guide

## ✅ Pre-Deployment Checklist

All critical items completed:
- ✅ PWA fully implemented and tested
- ✅ Custom app icons integrated
- ✅ Offline support working
- ✅ Multi-source earthquake data (USGS, GeoNet, BMKG)
- ✅ Emergency Finder for Philippines
- ✅ Internationalization (English/Filipino)
- ✅ Dark/light theme
- ✅ Responsive design
- ✅ Build successful (no errors)
- ✅ BMKG API error fixed
- ✅ Service worker configured
- ✅ All features tested

**Status: PRODUCTION READY! 🎉**

---

## 🎯 Recommended Deployment: Vercel

Vercel is the easiest and best option for Vite apps:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Free tier (perfect for this app)
- ✅ Automatic deployments from Git
- ✅ Perfect for PWAs

---

## 📦 Option 1: Deploy to Vercel (Recommended)

### Method A: Using Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - What's your project's name? **quakesafe** (or your choice)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

4. **Done!** You'll get a URL like: `https://quakesafe.vercel.app`

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method B: Using Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your `quakesafe` repository

3. **Configure (auto-detected):**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Click "Deploy"**

5. **Done!** Your app will be live in ~2 minutes

---

## 📦 Option 2: Deploy to Netlify

### Using Netlify CLI:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the app:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Follow prompts and authorize**

### Using Netlify Dashboard:

1. **Push to GitHub** (if not already)

2. **Go to Netlify:**
   - Visit https://netlify.com
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose your repository

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Click "Deploy site"**

---

## 📦 Option 3: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Update `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/quakesafe/', // Your repo name
     // ... rest of config
   })
   ```

3. **Add to `package.json`:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://yourusername.github.io/quakesafe`

---

## 🔧 Post-Deployment Steps

### 1. Test PWA Installation

**On Desktop (Chrome/Edge):**
- Visit your deployed URL
- Look for install icon in address bar
- Click to install
- Verify app opens in standalone window

**On Mobile (Android):**
- Visit your deployed URL in Chrome
- Tap "Install QuakeSafe" banner
- Or: Menu → "Add to Home Screen"
- Verify app appears in app drawer

**On iOS (Safari):**
- Visit your deployed URL in Safari
- Tap Share button
- Tap "Add to Home Screen"
- Verify app appears on home screen

### 2. Run Lighthouse Audit

1. Open deployed site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Progressive Web App"
5. Click "Generate report"
6. **Target: 90+ PWA score**

### 3. Test Offline Mode

1. Open deployed site
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Refresh page - should still work!
5. Navigate to /guides and /resources
6. Verify cached earthquake data displays

### 4. Test All Features

- [ ] Home page loads
- [ ] Tracker shows earthquake data
- [ ] Map displays correctly
- [ ] Guides page works offline
- [ ] Resources page works offline
- [ ] Emergency Finder (Philippines only)
- [ ] About page loads
- [ ] Dark/light theme toggle
- [ ] Language switcher (EN/TL)
- [ ] PWA install prompt appears
- [ ] Service worker registers
- [ ] Offline indicator works

### 5. Verify Service Worker

1. Open DevTools → Application tab
2. Click "Service Workers"
3. Verify status: **activated and running**
4. Check "Manifest" - verify icons load
5. Check "Cache Storage" - verify files cached

---

## 🌐 Custom Domain (Optional)

### For Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Vercel auto-provisions SSL certificate

### For Netlify:

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps
4. SSL certificate auto-provisioned

---

## 📊 Monitoring & Analytics (Optional)

### Add Google Analytics:

1. **Install:**
   ```bash
   npm install react-ga4
   ```

2. **Initialize in `src/main.tsx`:**
   ```typescript
   import ReactGA from 'react-ga4';
   
   ReactGA.initialize('G-XXXXXXXXXX'); // Your tracking ID
   ```

### Add Error Tracking (Sentry):

1. **Install:**
   ```bash
   npm install @sentry/react
   ```

2. **Initialize:**
   ```typescript
   import * as Sentry from "@sentry/react";
   
   Sentry.init({
     dsn: "your-dsn-here",
     environment: "production",
   });
   ```

---

## 🔄 Continuous Deployment

Once deployed via Vercel/Netlify dashboard:

1. **Every push to `main` branch = automatic deployment**
2. **Pull requests get preview URLs**
3. **Rollback to previous versions anytime**

---

## 📱 Share Your App

Once deployed, share:

**Direct Link:**
```
https://quakesafe.vercel.app
```

**QR Code:**
Generate at: https://www.qr-code-generator.com/

**Social Media:**
- Twitter/X: "Check out QuakeSafe - earthquake monitoring & preparedness PWA! 🌋"
- Facebook: Share with earthquake safety groups
- Reddit: r/webdev, r/reactjs, r/Philippines

---

## 🎉 You're Live!

Congratulations! QuakeSafe is now:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Installable as a PWA
- ✅ Working offline
- ✅ Helping people stay safe

---

## 🐛 Troubleshooting

### Service Worker Not Registering:
- Ensure site is on HTTPS (not HTTP)
- Clear browser cache
- Check console for errors

### Icons Not Showing:
- Verify icons exist in `/public` folder
- Check manifest.webmanifest loads
- Hard refresh (Ctrl+Shift+R)

### Offline Mode Not Working:
- Check service worker is active
- Verify cache storage in DevTools
- Test after visiting pages while online first

### Build Fails:
- Run `npm install` to ensure dependencies
- Check for TypeScript errors: `npm run build`
- Verify Node.js version (18+)

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify service worker status
3. Test in incognito mode
4. Clear cache and try again

---

**Built with ❤️ for earthquake safety and preparedness**

**Now go deploy and make a difference! 🚀**

