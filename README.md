# TubeDashPlayer

**TubeDashPlayer** is a customizable, reusable YouTube playlist player component built with React and TypeScript. It utilizes the YouTube API to display videos, playlists, and video descriptions in a scalable way, designed to be easily integrated into other projects.

## Table of Contents

1.  [📌 Features](#-features)
2.  [🛞 Installation](#-installation)
3.  [💡 Usage](#-usage)
4.  [🏭 Props](#-props)
5.  [💻 Development](#-development)
6.  [🗂️ Folder Structure](#️-structure)
7.  [License](#license)

## 📌 Features

-   Displays a video player, playlist, and video descriptions.
-   Configurable YouTube API key and Playlist ID.
-   Built with React and TypeScript for type safety and maintainability.
-   TailwindCSS integration for customizable UI.
-   Modular architecture for easy component reuse.

## 🛞 Installation

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
<script src="https://unpkg.com/tube-dash-player/dist/index.js"></script>
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
<script src="https://unpkg.com/tube-dash-player/dist/index.js"></script>
<script>
    const root = documnet.getElementByID("player");
    ReactDOM.render(
        React.createElement(TubeDashPlayer, {
            apiKey: "YOUR_YOUTUBE_API_KEY",
            playlistId: "YOUR_YOUTUBE_PLAYLIST_ID",
        }),
        root
    );
</script>
<div id="player"></div>
```

## 🏭 Props

### apiKey

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** Your YouTube API key. If not provided or invalid, the component will not render.
-   **Usage:**

```tsx
<TubeDashPlayer apiKey="YOUR_YOUTUBE_API_KEY" />
```

### playlistId

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** Your YouTube playlist ID. If not provided or invalid, the component will not render.
-   **Usage:**

```tsx
<TubeDashPlayer playlistId="YOUR_YOUTUBE_PLAYLIST_ID" />
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

The TubeDashPlayer project follows a modular structure for easy scalability and maintainability. Below is the folder layout:

```bash
📦src
 ┣ 📂assets        # For images, fonts, etc.
 ┣ 📂components
 ┃ ┣ 📂common      # Shared components across the app
 ┃ ┃ ┣ 📜Drawers.tsx
 ┃ ┃ ┗ 📜TruncateText.tsx
 ┃ ┣ 📂player      # Components related to the player
 ┃ ┃ ┣ 📜Description.tsx
 ┃ ┃ ┣ 📜Player.tsx
 ┃ ┃ ┗ 📜Playlist.tsx
 ┃ ┗ 📜TubeDashPlayer.tsx   # Main component
 ┣ 📂hooks
 ┃ ┣ 📜usePlaylist.ts        # Hook for fetching YouTube playlist data
 ┃ ┗ 📜useTruncateText.ts    # Hook for truncating text
 ┣ 📂styles
 ┃ ┗ 📜global.css            # Global styles
 ┣ 📂types
 ┃ ┗ 📜types.ts              # TypeScript types used across the app
 ┣ 📂utils
 ┃ ┗ 📜formatting.ts         # Utility functions like formatting
 ┣ 📜App.tsx                 # Main entry component for dev
 ┣ 📜main.tsx                # Main file for mounting React
 ┗ 📜vite-env.d.ts           # Vite environment types
```

## License

TubeDashPlayer is open source and available under the [MIT License](LICENSE).
