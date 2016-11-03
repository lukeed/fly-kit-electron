# fly-kit-electron

> [Electron](https://github.com/atom/electron) starter kit with Live-Reload & Dev tools.

---
<p align="center">Boilerplate & commands will evolve as my own development process of Electron applications does.</p>
---

## Install

```
git clone https://github.com/lukeed/fly-kit-electron
npm install
npm start
```

> **Pro Tip:** Use [Yarn](https://yarnpkg.com/) to install NPM dependencies 3x faster than NPM!


## Commands

#### build

```
$ npm run build
```

Compiles all files. Output is sent to the `dist` directory.

#### release

```
$ npm run release
```

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

#### start

```
$ npm start
```

Executes [`build`](#build) and runs your Electron application from the `dist` directory.

#### test

```
$ npm run test
```

Lints all JavaScript files.

#### watch

```
$ npm run watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.


## License

MIT © [Luke Edwards](http://lukeed.com)
