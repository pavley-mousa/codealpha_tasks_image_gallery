# Image Gallery

Frontend-only image gallery for **@pavley_mousa**.

## Workflow

This is a manual gallery. There is no Instagram feed, no automatic synchronization, no backend, and no database.

Add images individually by URL or local upload. The gallery saves manually added entries in the browser with localStorage.

## Demo content

The repository includes 8 locally stored SVG demo images inside the /demo folder. They are intentionally fictional test assets used to verify the grid, search, filters, lightbox, themes, responsive layout, and loading behavior.

Demo images are local files, so the gallery does not need an external image service for the demo section.

## Add images

Open **Manage Gallery** and either:

- add an image URL
- upload an image from your device
- optionally attach any external link

## Features

- Local demo SVG assets
- Image URLs and local image uploads
- Lightbox and previous/next navigation
- Keyboard navigation for gallery cards and lightbox
- Search and filters
- Newest/oldest sorting
- Arabic/English UI
- Dark/light/system theme
- Custom branding
- Add/edit/delete
- localStorage
- No automatic feed updates

## Files

- index.html — UI
- style.css — styling
- script.js — gallery logic and local storage
- demo/ — fictional local SVG demo assets
