# Instagram Image Gallery

Frontend-only responsive image gallery with automatic Instagram feed updates.

## Instagram automatic feed

The project does not use a backend, server, or secret API key.

To display the latest Instagram posts automatically:

1. Create a free Behold account.
2. Connect your Instagram account.
3. Create a **JSON** feed for that account.
4. Copy the feed URL. It looks like:
   `https://feeds.behold.so/xxxxxxxx`
5. Open the gallery and go to **Settings**.
6. Paste the URL into **Behold JSON Feed URL** and save.

The browser fetches the JSON feed directly, renders the posts, and refreshes it on the interval selected in Settings.

Behold's JSON feed is designed for client-side use and returns the account information plus recent posts, including image URLs, captions, timestamps, permalinks, media types, and optimized image sizes.

## Features

- Automatic Instagram feed rendering
- New posts appear automatically when the connected feed refreshes
- Responsive gallery
- Search captions and hashtags
- Filter by Instagram/manual and media type
- Newest/oldest sorting
- Lightbox with previous/next navigation
- Arabic / English interface
- Dark / Light theme
- App name, subtitle, logo, accent color, hero text, footer text and refresh interval are editable
- Manual image add/edit/delete
- Browser persistence with localStorage
- No backend
- No database
- No secret API credentials in frontend code

## Important

The Instagram feed itself depends on the connected Behold service. Instagram does not provide a safe anonymous browser endpoint that can simply enumerate an account's latest media with no authentication layer. Behold handles the Instagram connection and exposes the feed for client-side consumption.

Settings and manual gallery items are stored per browser/device. They are not shared between visitors.

## Files

- `index.html` — app structure and modals
- `style.css` — responsive UI and themes
- `script.js` — state, Instagram feed loading, localStorage, filters, lightbox and settings
