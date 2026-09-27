# Instagram Image Gallery

Professional frontend-only Instagram gallery for **@pavley_mousa**.

## Architecture

This project is intentionally **frontend only**:

- HTML
- CSS
- Vanilla JavaScript
- localStorage for browser-side settings and manual gallery content
- Behold JSON Feed for Instagram synchronization
- No custom backend
- No database
- No secret API key shipped in the browser

Behold documents its JSON feeds as a client-side integration: after creating a JSON feed, the posts are available from a public feed URL such as `https://feeds.behold.so/FEED_ID`, with no server-side code required.

## Instagram account

The UI is preconfigured to display:

**@pavley_mousa**

Instagram profile:
https://www.instagram.com/pavley_mousa/

## Connect Instagram

1. Create or sign in to a Behold account.
2. Connect the Instagram account.
3. Create a **JSON** feed.
4. Copy the generated feed URL.
5. Open this gallery.
6. Open **Settings → Instagram Connection**.
7. Paste the feed URL and save.

Behold's current getting-started documentation says that connected accounts must be Business or Media Creator accounts because of an Instagram API change.

## Automatic updates

The browser fetches the JSON feed only when the user presses the Refresh button. Automatic background feed updates are disabled.

The feed response contains account metadata plus a `posts` array. Posts can include:

- Instagram permalink
- timestamp
- media type
- image/video URLs
- optimized image sizes
- caption
- hashtags and mentions
- likes/comments counts
- carousel child media
- profile information

Those fields are part of Behold's current JSON feed format.

The gallery supports images, videos, reels, and carousel posts. Carousel cards use the first optimized child image as the gallery thumbnail. Video/reel posts open with the video player when the feed provides a video source.

## What is editable from the website

### App identity
- App name
- Subtitle
- Logo URL
- Accent color

### Hero
- Hero title
- Hero description
- Footer text

### Appearance
- Dark
- Light
- System theme
- English
- Arabic

### Instagram
- Instagram username shown in the UI
- Behold JSON feed URL

### Gallery
- Search
- Source filter
- Media-type filter
- Newest/oldest sorting
- Lightbox
- Previous/next navigation
- Instagram post links
- Manual image add/edit/delete
- Manual image upload from the device

## Important frontend-only limitation

The site can automatically sync Instagram only through a feed provider or another browser-consumable Instagram API. The browser cannot safely hold a private Instagram access token or replace an authenticated server-side integration.

This project therefore uses the Behold JSON Feed as the Instagram data source while keeping the actual gallery UI and application logic in this repository. Behold also documents a drop-in widget option, but this project uses the JSON feed so the gallery remains fully customizable.

## Storage

Settings and manual gallery items are stored in the visitor's browser with localStorage.

That means:
- changes are persistent on that browser/device
- settings are not shared between visitors
- manual images are not uploaded to a server

For uploaded manual images, the app stores a browser Data URL and limits large files to help avoid localStorage limits.

## Files

- `index.html` — UI, modals, settings, lightbox
- `style.css` — responsive design, dark/light themes, components
- `script.js` — Instagram synchronization, rendering, filters, localStorage, manual gallery and lightbox

## Notes

Behold's feed post count is capped by the plan. Their current documentation says the Free plan can return up to 6 posts, while higher plans can allow more.
