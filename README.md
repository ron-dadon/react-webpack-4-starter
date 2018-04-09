# react-webpack-4-starter

Starter project for React application using webpack 4

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" width="64">

## Contents

1. Babel - ES6 to ES5 transpiling and JSX support.
2. React & React DOM
3. Webpack 4 & Webpack Dev Server for easy development
4. Node Sass for SCSS support with pre configured CSS modules support
5. PropTypes library for React components prop types validation
6. Redux & React Redux for state management
7. Redux thunk middleware for better actions handling
8. Predefined aliases:
   There are 5 predefined aliases in `webpack.config.js` for shorter import statements:
   
   `Components` - Alias for `/src/Components`
   
   `Containers` - Alias for `/src/Containers`
   
   `Actions` - Alias for `/src/Redux/Actions`
   
   `Reducers` - Alias for `/src/Redux/Reducers`
   
   `Utilities` - Alias for `/src/Utilities`
   
9. Url Loader - image files (`jp(e)g, png, gif, svg`) will be Base64 encoded and inlined if their size is up to 16KB by default. You can change the limit in `webpack.config.js` or remove it.
   
## Usage

Clone the repository or download it as a zip.
Move to the folder and execute:

```bash
$ yarn
```

Wait for the modules installation to complete.

You have 2 predefined scripts:

1. Start - spin up the webpack dev server (default port 8888, can be changed in `webpack.config.js` under `devServer`)
2. Build - create a production build in the `dist` folder

To run the scripts use:

```bash
$ yarn start
```

Or

```bash
$ yarn build
```
