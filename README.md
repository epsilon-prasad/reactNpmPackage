<h1 align="center">
    Design System - Test front of Resusable Component
</h1>

<h4 align="center">
  make with love <3
</h4>
<p align="center">
  <img alt="GitHub top language" src="http://img.shields.io/github/languages/top/joaowillamy/react-storybook-jest-lerna.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaowillamy/react-storybook-jest-lerna.svg">
  
  <a href="https://app.codacy.com/manual/joaowillamy/react-storybook-jest-lerna?utm_source=github.com&utm_medium=referral&utm_content=joaowillamy/react-storybook-jest-lerna&utm_campaign=Badge_Grade_Dashboard">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/a2f69fbed9444b99a2c593d77d7b794c">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joaowillamy/react-storybook-jest-lerna.svg">
</p>

## See the project working

## Important!!!

this project was divided into 2 repositories, one for the design system and another for the implementation of the page with the features.

- 💄 [REPO 1] This one, Design system
  - 🔧 [[NPM] epsilon-prasad-heading](https://www.npmjs.com/package/epsilon-prasad-heading)

> A Monorepo with multiple packages and a shared build, test, and release process.

- 🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
- 📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
- 🚀 [React](https://reactjs.org/)  -  JavaScript library for user interfaces
- 💅 [styled-components](https://www.styled-components.com/)  -  CSS in JS elegance
- 🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
- 📖 [Storybook](https://storybook.js.org/) - UI Component Environment
- 🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing

## Usage

- `yarn dev` - This starts Storybook for viewing all the components locally.
- `yarn bootstrap` - This installs all of the packages and links dependent packages together.
- `yarn build` - This babelfies all of the packages and creates `/lib` folders for each one.
- `yarn test` - Run all linting and unit tests before committing.
- `yarn test -o` - Run only the tests that have changed.
- `yarn test -u` - Update all of the snapshot tests.

## Lerna

- `lerna changed` - Show which packages have changed.
- `lerna diff` - Show specifically what files have cause the packages to change.
- `lerna version` - Show specifically what package version changed.

## Linking

1. Run `yarn build`
1. Run `yarn dev`
1. Change the `package.json` of the consumer from `$YOUR_PACKAGE_NAME` (which lives inside the monorepo) to `file:./../monorepo/packages/$YOUR_PACKAGE_NAME`
1. Run `rm -rf node_modules && yarn` in the consumer
1. 🎉

## Publish

- Run `npm publish --access public` - Make project public
- Run `yarn run lerna-publish` - Send to npm
- Run `yarn deploy-storybook` - Make deploy to S3 of AWS
