# PWA Icons Setup

## Current Status
The app is configured to use PWA icons. You have two options:

### Option 1: Use the SVG icon (Temporary)
The `icon.svg` file will work for development. The PWA plugin will use it as a fallback.

### Option 2: Generate PNG icons (Recommended for production)
You can generate proper PNG icons using online tools or design software:

1. **Online Tools:**
   - https://realfavicongenerator.net/
   - https://www.pwabuilder.com/imageGenerator
   - Upload the `icon.svg` or create a custom 512x512 design

2. **Required Sizes:**
   - `pwa-192x192.png` - 192x192 pixels
   - `pwa-512x512.png` - 512x512 pixels
   - `apple-touch-icon.png` - 180x180 pixels (for iOS)
   - `favicon.ico` - 32x32 pixels

3. **Design Guidelines:**
   - Use the QuakeSafe brand colors (slate blue #0f172a, amber #f59e0b)
   - Include earthquake/safety symbolism
   - Ensure the icon is clear at small sizes
   - Use a simple, recognizable design

## Current Icon Design
The SVG includes:
- 🌊 Seismic waves (concentric circles)
- 🛡️ Shield (representing safety/protection)
- ⚠️ Warning triangle (alert/awareness)
- 🌋 Epicenter point (earthquake origin)

Feel free to customize this design!

