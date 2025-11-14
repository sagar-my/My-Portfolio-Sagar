# How to Run the Portfolio

## Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager

## Step-by-Step Instructions

### 1. Navigate to the frontend directory
```bash
cd frontend
```

### 2. Install Dependencies

**Option A: Using npm**
```bash
npm install
```

**Option B: Using yarn (recommended - as specified in package.json)**
```bash
yarn install
```

### 3. Start the Development Server

**Option A: Using npm**
```bash
npm start
```

**Option B: Using yarn**
```bash
yarn start
```

### 4. Open in Browser

The app will automatically open at: **http://localhost:3000**

If it doesn't open automatically, manually navigate to that URL in your browser.

## Available Commands

- `npm start` or `yarn start` - Runs the app in development mode
- `npm run build` or `yarn build` - Creates a production build
- `npm test` or `yarn test` - Runs the test suite

## Troubleshooting

### If you get dependency errors:
1. Delete `node_modules` folder and `package-lock.json` (or `yarn.lock`)
2. Run `npm install` or `yarn install` again

### If port 3000 is already in use:
The app will automatically try the next available port (3001, 3002, etc.)

### If you see build errors:
Make sure you have Node.js installed:
```bash
node --version
```

## Notes
- The app uses CRACO (Create React App Configuration Override) for custom webpack configuration
- Hot reload is enabled - changes will automatically refresh in the browser
- The custom cursor effect only works on desktop devices (not mobile)

