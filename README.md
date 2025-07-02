# Kirby Vite Basic Kit

## Features

- ⚡️ Uses [Vite](https://vitejs.dev/) with [kirby-vite](https://github.com/arnoson/kirby-vite) plugin
- 🔄 Live Reloading for Kirby templates, snippets, content, ... changes
- 📂 [Public folder structure](https://getkirby.com/docs/guide/configuration/custom-folder-setup#public-and-private-folder-setup)

## Installation

Clone this repository and run:

```
composer install
```

```
npm install
```

## Development

Start vite's dev server and a simple php dev server by running:

```
npm run dev
```

Visit `localhost:8888` in the browser. Vite's dev server (`localhost:5173`) is only used for serving js, css and assets.

## Preview

Get a local production preview by running:

```
npm run preview
```

## Production

Build your optimized frontend assets to `public/dist`:

```
npm run build
```

## Deployment

### Manually

Upload the repository to your web server and point your web server to the repository's `public` folder.

### Rsync

If you have ssh access you can use rsync to automate the upload/sync.

### Git

You can also deploy your repository with git. Then you have to run the [installation](#installation) steps again on your web server.
