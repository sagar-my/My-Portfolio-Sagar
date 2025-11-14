# Troubleshooting Guide

## Common Errors and Solutions

### 1. Module Not Found Errors

**Error:** `Cannot find module './components/ScrollProgress'` or similar

**Solution:**
```bash
# Make sure you're in the frontend directory
cd frontend

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### 2. Path Alias Errors (@/ not resolving)

**Error:** `Cannot find module '@/App'` or `Module not found: Can't resolve '@/...'`

**Solution:** The path aliases are configured in `jsconfig.json` and `craco.config.js`. If you see this error:
- Make sure `jsconfig.json` exists in the frontend folder
- Restart the development server
- Clear the cache: `npm start -- --reset-cache`

### 3. React Version Conflicts

**Error:** `Invalid hook call` or version mismatch errors

**Solution:**
```bash
npm install react@^19.0.0 react-dom@^19.0.0 --legacy-peer-deps
```

### 4. Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
- The app will automatically try port 3001, 3002, etc.
- Or kill the process: `taskkill /F /IM node.exe` (Windows)
- Or change port: Create `.env` file with `PORT=3001`

### 5. Build/Compilation Errors

**Error:** Various webpack or babel errors

**Solution:**
```bash
# Clear all caches
rm -rf node_modules .cache build
npm install --legacy-peer-deps
npm start
```

### 6. Missing Dependencies

**Error:** `Cannot find module 'xyz'`

**Solution:**
```bash
npm install --legacy-peer-deps
```

## Quick Fix Commands

```bash
# Complete reset (use if nothing else works)
cd frontend
rm -rf node_modules package-lock.json .cache build
npm install --legacy-peer-deps
npm start
```

## Check Your Error

1. **Terminal Error:** Copy the full error message
2. **Browser Console:** Press F12, check Console tab for errors
3. **Network Tab:** Check if any files failed to load

## Still Having Issues?

Share the complete error message and I'll help you fix it!

