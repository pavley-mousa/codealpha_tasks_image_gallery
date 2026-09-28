# Image Gallery

Frontend-only image gallery.

## Workflow

This is a manual image gallery with no backend or database.

Add images individually by URL or local upload. The gallery saves manually added entries in the browser with localStorage.

## Demo content

The repository includes 18 locally stored SVG demo images inside the `/demo` folder. They are fictional test assets used to verify the grid, search, filters, lightbox, themes, responsive layout, and image loading.

All demo images are local files, so the demo gallery does not depend on an external image service.

## Add images

Open **Manage Gallery** and either:

- add an image URL
- upload an image from your device
- optionally attach an external link

## Features

- 18 built-in local demo images
- Image URLs and local image uploads
- Lightbox with previous/next navigation
- Keyboard navigation
- Search and filters
- Newest/oldest sorting
- Arabic/English UI
- Dark/light/system theme
- Custom branding
- Add/edit/delete
- localStorage
- No backend or database

## Files

- `index.html` — UI
- `style.css` — styling
- `script.js` — gallery logic and local storage
- `demo/` — fictional local SVG demo images
