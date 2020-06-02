# @titanium-sdk/webpack-plugin-classic

> Titanium Classic plugin for Appcd Webpack

## Installation

To install this plugin in an existing project, run the following command in your project root:

```sh
npm i @titanium-sdk/webpack-plugin-classic
```

Be sure to follow the migration steps below as well as the general [migration guide](https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/migration.md) when enabling Webpack in an existing Titanium Classic project.

## Migration

> ⚠️ **WARNING:** The base Webpack configuration uses `clean-webpack-plugin` to _delete all files_ inside `Resources`  before a new build. Make sure you follow the instructions below and move all your files out of `Resources` before you start the first build.

Migrating a classic project is pretty straight forward. All you need to do is move your existing files from `Resources` into a new `src` directory in your project root.

After moving all files into `src` there are two more things to do:

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
