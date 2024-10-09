# TubeDashPlayer

**TubeDashPlayer** is a customizable, reusable YouTube playlist player component built with React and TypeScript. It utilizes the YouTube API to display videos, playlists, and video descriptions in a scalable way, designed to be easily integrated into other projects.

## Table of Contents

1.  [📌 Features](#-features)
2.  [🛠️ Installation](#️-installation)
3.  [💡 Usage](#-usage)
4.  [🔐 Security Note](#-security-note)
5.  [🏭 Props](#-props)
6.  [💻 Development](#-development)
7.  [🗂️ Folder Structure](#️-structure)
8.  [⛓️‍💥 License](#️-license)
9.  [📝 Changelog](CHANGELOG.md)

## 📌 Features

- Displays a video player, playlist, and video descriptions.
- Configurable YouTube API key and Playlist ID.
- Built with React and TypeScript for type safety and maintainability.
- TailwindCSS integration for customizable UI.
- Modular architecture for easy component reuse.

## 🛠️ Installation

### NPM

Install the TubeDashPlayer package via NPM:

```bash
npm install tube-dash-player
```

### Yarn

Install the TubeDashPlayer package via Yarn:

```bash
yarn add tube-dash-player
```

### CDN

You can also include the TubeDashPlayer script via CDN:

```html
<script src="https://unpkg.com/tube-dash-player/dist/tube-dash-player.umd.js"></script>
```

## 💡 Usage

After installing the package, you can import the TubeDashPlayer component and use it in your React application: Pass your YouTube API key and Playlist ID as props to configure the component.

```tsx
import React from "react";
import TubeDashPlayer from "tube-dash-player";

const App: React.FC = () => {
    return (
        <div>
            <TubeDashPlayer
                apiKey="YOUR_YOUTUBE_API_KEY"
                playlistId="YOUR_YOUTUBE_PLAYLIST_ID"
            />
        </div>
    );
};

export default App;
```

### CDN Usage

If you're using the TubeDashPlayer script via CDN, you can use the component like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/tube-dash-player/dist/tube-dash-player.umd.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const apiKey = "YOUR_YOUTUBE_API_KEY";
        const playlistId = "YOUR_YOUTUBE_PLAYLIST_ID";

        const App = () => {
          return React.createElement(TubeDashPlayer, {
            apiKey: apiKey,
            playlistId: playlistId
          });
        };

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(React.createElement(App));
      });
    </script>
  </body>
</html>
```

## 🔐 Security Note

When using the `TubeDashPlayer`, your **YouTube API key** is exposed on the client-side. This means that anyone who inspects the webpage source or uses browser developer tools can see your API key.

To mitigate this risk:

1.  **Use server-side proxying**: You can set up a backend to proxy requests to the YouTube API, keeping your API key hidden from the frontend.
2.  **Monitor usage**: Set usage limits on your API key in the Google Cloud Console to prevent abuse.
3.  **Regenerate keys**: If you notice unauthorized use, regenerate your API key to invalidate the old one.

### Using a Server Proxy (Recommended)

If you need a more secure setup, we recommend proxying requests through a backend. This ensures the API key is not exposed in the client-side code. Here’s an example of how to set up a backend proxy:

```js
// Example backend API
app.get("/youtube-playlist", (req, res) => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = req.query.playlistId;

  axios
    .get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: { part: "snippet", playlistId, key: apiKey }
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).json({ error: "Failed to fetch playlist" }));
});
```

## 🏭 Props

The `TubeDashPlayer` component accepts the following props:

### apiKey

- **Type:** `string`
- **Required:** `true`
- **Description:** Your YouTube API key. If not provided or invalid, the component will not render.
- **Usage:**

```tsx
<TubeDashPlayer apiKey="YOUR_YOUTUBE_API_KEY" />
```

### playlistId

- **Type:** `string`
- **Required:** `true`
- **Description:** Your YouTube playlist ID. If not provided or invalid, the component will not render.
- **Usage:**

```tsx
<TubeDashPlayer playlistId="YOUR_YOUTUBE_PLAYLIST_ID" />
```

### theme

- **Type:** `string`
- **Default:** `"light"`
- **Description:** The theme of the player. Options are `"light"`, `"dark"`, `"minimal"`, and `"auto"`.
- **Usage:**

```tsx
<TubeDashPlayer theme="dark" />
```

## 💻 Development

if you want to develop or contribute to TubeDashPlayer, you can clone the repository and install the dependencies:

```bash
git clone https://github.com/dylancameron/tube-dash-player.git
cd tube-dash-player
npm install
```

After installing the dependencies, you can run the development server:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

### Build for Production

To build the TubeDashPlayer package for production, you can run the following command:

```bash
npm run build
```

This will create a `dist` folder with the compiled JavaScript and CSS files.

## 🗂️ Structure

The TubeDashPlayer project follows a modular structure for easy scalability and maintainability. Below is the src/ folder layout:

```bash
📦src
 ┣ 📂assets                  # For images, fonts, etc.
 ┣ 📂components
 ┃ ┣ 📂common                # Shared components across the app
 ┃ ┃ ┣ 📜Drawers.tsx
 ┃ ┃ ┣ 📜Skeleton.tsx        # Loading skeletons
 ┃ ┃ ┗ 📜TruncateText.tsx
 ┃ ┣ 📂player                # Components related to the player
 ┃ ┃ ┣ 📜Description.tsx
 ┃ ┃ ┣ 📜YouTubePlayer.tsx
 ┃ ┃ ┗ 📜YouTubePlaylist.tsx
 ┃ ┗ 📜TubeDashPlayer.tsx    # Main component
 ┣ 📂context
 ┃ ┗ 📜TubeContext.tsx       # Context provider for state management
 ┣ 📂hooks
 ┃ ┣ 📜useYouTubePlaylist.ts # Hook for fetching YouTube playlist data
 ┃ ┗ 📜useTruncateText.ts    # Hook for truncating text
 ┣ 📂styles
 ┃ ┣ 📜global.css            # Global Styles
 ┃ ┗ 📜themes.module.css     # Theme specific css
 ┣ 📂types
 ┃ ┗ 📜index.d.ts            # TypeScript types used across the app
 ┣ 📂utils
 ┃ ┣ 📜formatting.ts         # Utility functions like formatting
 ┃ ┗ 📜theme.ts              # Theme helpers
 ┣ 📜App.tsx                 # Main entry component for dev
 ┣ 📜index.ts                # index export for npm package
 ┣ 📜main.tsx                # Main file for mounting React
 ┗ 📜vite-env.d.ts           # Vite environment types
```

## ⛓️‍💥 License

TubeDashPlayer is open source and available under the [MIT License](LICENSE.md).

## 📝 Changelog

For a detailed list of changes, see the [CHANGELOG](CHANGELOG.md).
