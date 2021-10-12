# Gulp Config

Personal Gulp.js configuration

## Map

- [Quick Start](#quick-start)
- [Usage](#usage)
- [Write your HTML with kits!](#write-your-html-with-kits)
- [Basic file structure](#basic-file-structure)
- [Packages](#packages)

## Quick start

1. Download and install [Node.js](https://nodejs.org/en/download/).
2. Clone the repo and install the dependencies:

```bash
$ https://github.com/Felvesthe/gulp-config.git
$ cd gulp-config
$ npm i
```

3. Then run the gulp:

```bash
$ gulp
```

4. Create a src directory with html, sass, js and img subdirectories inside like in [Basic file structure](#basic-file-structure)

5. Enjoy your automated work. 😉

## Usage

- `gulp` starts everything in background, you don't need to do anything else
- `gulp cleanDist` allows you to delete `dist` directory

## Write your HTML with kits!

Instead of putting .html files in src/html you should use .kit files. Check [this website](https://codekitapp.com/help/kit/) to get more info.

## Basic file structure

```
📦project-directory
  📦src
    ┣ 📂html
    ┣ 📂img
    ┣ 📂js
    ┗ 📂sass
  ┣ 📜gulpfile.js
  ┗ 📜package.json
```

## Packages

- @babel/core (7.15.8)
- @babel/preset-env (7.15.8)
- autoprefixer (10.3.7)
- browser-sync (2.27.5)
- cssnano (5.0.8)
- gulp (4.0.2)
- gulp-babel (8.0.0)
- gulp-clean (0.4.0)
- gulp-htmlmin (5.0.1)
- gulp-imagemin (7.1.0)
- gulp-kit (0.3.0)
- gulp-load-plugins (2.0.7)
- gulp-postcss (9.0.1)
- gulp-rename (2.0.0)
- gulp-sass (5.0.0)
- gulp-uglify (3.0.2)
- postcss (8.3.9)
- sass (1.42.1)
