# Instagram Image Gallery

Frontend-only Instagram Image Gallery for **@pavley_mousa**.

## Workflow

This is a manual gallery. There is no Instagram feed, no automatic synchronization, no backend, and no database.

Add each Instagram post individually from its post URL. The gallery saves manually added entries in the browser with localStorage.

## Demo content

The repository includes 8 locally stored SVG demo images inside the /demo folder. They are intentionally fictional test assets used to verify the grid, search, filters, lightbox, themes, responsive layout, and loading behavior.

Demo images are local files, so the gallery does not need an external image service for the demo section.

## Add posts and images

Open **Manage Gallery** and either:

- paste an individual Instagram post URL
- add an image URL
- upload an image from your device

Instagram /p/, /reel/, and /tv/ links are normalized before being saved.

## Features

- Individual Instagram post embeds
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

## Current Instagram post

https://www.instagram.com/p/DYDoOcBjP4k/

## Files

- index.html — UI
- style.css — styling
- script.js — gallery logic and local storage
- demo/ — fictional local SVG demo assets
