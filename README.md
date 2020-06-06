# boilerplate-react-library
[![Build Status](https://travis-ci.org/joelhenrique2000/boilerplate-react-library.svg?branch=master)](https://travis-ci.org/joelhenrique2000/boilerplate-react-library)

## Intro
**Create react components quickly with the boilerplate, zero configuration..**
*Note*: Every 2 month the project is actualized for latest versions

## Features

 - [x] Transpiles all modern JS features
 - [x] [Jest](https://facebook.github.io/jest/) for testing
 - [x] [Babel](https://babeljs.io/) for transpilation
 - [x] Support SASS
 - [x] Support Travis CI
 - [x] [Rollup](https://rollupjs.org/) for build proces
 - [x] Bundles `cjs` and `es` module formats
 - [x] Support [Typescript]([https://www.typescriptlang.org/](https://www.typescriptlang.org/))
 - [x] Server local for development
 - [x] Support StoryBook

## Basic Usage

### Common Tasks

-   Developing -  **npm run dev**  - Runs the development server at  _localhost:8080_  and use Hot Module Replacement. You can override the default host and port through env (`HOST`,  `PORT`).
-   Building-  **npm run build**  - Will create the build in the dist folder
-   Creating a version -  **npm version <x.y.z>**.
-   Publishing a version -  **npm publish**  - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to  `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

-   Running tests once -  **npm test**

### StoryBook documentation

The documentation was made using Storybook, the configuration folder is `.storybook /`. Create a ***. Stories.js file inside `src /`. [More informations](https://storybook.js.org/docs/basics/introduction/)

-   Running documentation -  **npm run storybook**
## License
MIT © [Joel Henrique](https://github.com/joelhenrique2000) | [JoelHenrique.com](www.joelhenrique.com)
