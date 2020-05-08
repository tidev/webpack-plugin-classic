# @titanium-sdk/webpack-plugin-classic

> Titanium Classic plugin for Appcd Webpack

## Installation

To install this plugin in an existing project, run the following command in your project root:

```sh
npm i @titanium-sdk/webpack-plugin-classic
```

Be sure to follow the migration steps below when enabling Webpack in an existing Titanium Classic project, as well as the general [migration guideline](https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/migration.md).

## Migration

Migrating a classic project is pretty straight forward. All you need to do is move your existing files from `Resources` into a new `src` directory in your project root. After that you have to

- Rename `app.js` to `main.js`
- Move all non-js assets into `src/assets`.

Webpack will then process and bundle all your JS files and assets and put them back into `Resources`.

> 💡 **TIP:** Add the `Resources` folder to your `.gitignore` since it will be created by Webpack now and should be considered as an intermediate build folder.

## Webpack configuration

This plugin will add/modify the following Webpack options:

### Resolve

- Aliases
  - `@`: `./src`

### Plugins

- `plugin('copy-assets')` (copy files from `./src/assets` into `./Resources`)
