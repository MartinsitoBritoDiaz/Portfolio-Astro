# Client Logo Setup Instructions

## Current Status
The client logos are currently using a placeholder (`logo.png`). To add the actual client logos, follow these steps:

## Required Logo Files

You need to add the following logo files to `/public/assets/images/`:

1. **evopoint-logo.webp** - Evopoint Solutions logo
2. **banreservas-logo.webp** - Banreservas logo  
3. **alcanza-logo.webp** - Alcanza logo

## How to Add Logos

### Option 1: Download from Official Websites
1. Visit the client websites:
   - Evopoint: https://evopoint.com
   - Banreservas: https://www.banreservas.com
   - Alcanza: https://www.alcanza.com.do

2. Download their logos (preferably in PNG or SVG format)

3. Convert to WebP format (for optimal performance):
   - Use an online converter like https://cloudconvert.com/png-to-webp
   - Or use ImageMagick: `convert logo.png logo.webp`

4. Save the files with these exact names:
   - `evopoint-logo.webp`
   - `banreservas-logo.webp`
   - `alcanza-logo.webp`

5. Place them in: `/public/assets/images/`

### Option 2: Use SVG Logos
If you have SVG logos, you can:
1. Save them as `.svg` files
2. Update the paths in `src/data/info.ts` to use `.svg` instead of `.webp`

### Option 3: Use PNG Logos
If you only have PNG files:
1. Save them as `.png` files
2. Update the paths in `src/data/info.ts` to use `.png` instead of `.webp`

## After Adding Logos

Once you've added the logo files, update `src/data/info.ts`:

```typescript
{
  id: "evopoint-solutions",
  name: "Evopoint Solutions",
  logo: "/assets/images/evopoint-logo.webp", // Change from logo.png
  // ... rest of config
},
{
  id: "banreservas",
  name: "Banreservas",
  logo: "/assets/images/banreservas-logo.webp", // Change from logo.png
  // ... rest of config
},
{
  id: "alcanza",
  name: "Alcanza",
  logo: "/assets/images/alcanza-logo.webp", // Change from logo.png
  // ... rest of config
},
```

## Image Requirements

- **Format**: WebP (preferred), PNG, or SVG
- **Size**: Recommended 200x200px to 400x400px for square logos
- **Aspect Ratio**: Maintain original aspect ratio
- **Background**: Transparent background preferred
- **File Size**: Keep under 100KB for optimal performance

## Testing

After adding logos:
1. Restart your dev server: `npm run dev`
2. Check the Clients page: `/clients`
3. Check the Home page client logo slider
4. Verify logos display correctly in both light and dark modes

