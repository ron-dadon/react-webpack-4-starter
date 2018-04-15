# react-webpack-4-starter

<img src="https://cdn-images-1.medium.com/max/1468/1*kt9otqHk14BZIMNruiG0BA.png" height="64"> <img src="https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png" height="64"> <img src="https://cdn-images-1.medium.com/max/2000/1*XmHUL5DeySv_dGmvbPqdDQ.png" height="64"> <img src="https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png" height="64"> <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" height="64">

Starter project for React application using webpack 4

## Contents

1. (Babel)[https://babeljs.io/] - ES6 to ES5 transpiling and JSX support.
2. (React)[https://reactjs.org/] & React DOM
3. (Webpack)[https://webpack.js.org/] 4 & (Webpack Dev Server)[https://github.com/webpack/webpack-dev-server] for easy development
4. (Node Sass)[https://github.com/sass/node-sass] for SCSS support with pre configured CSS modules support
5. (PropTypes)[https://github.com/facebook/prop-types] library for React components prop types validation
6. (Redux)[https://redux.js.org/] & (React Redux)[https://github.com/reactjs/react-redux] for state management
7. Redux (thunk)[https://github.com/gaearon/redux-thunk] middleware for better actions handling
8. Predefined aliases:
   There are 5 predefined aliases in `webpack.config.js` for shorter import statements:
   
   `Components` - Alias for `/src/Components`
   
   `Containers` - Alias for `/src/Containers`
   
   `Actions` - Alias for `/src/Redux/Actions`
   
   `Reducers` - Alias for `/src/Redux/Reducers`
   
   `Utilities` - Alias for `/src/Utilities`
   
9. (Url Loader)[https://github.com/webpack-contrib/url-loader] - image files (`jp(e)g, png, gif, svg`) will be Base64 encoded and inlined if their size is up to 16KB by default. You can change the limit in `webpack.config.js` or remove it.
10. Jest - includes (Jest)[https://facebook.github.io/jest/] & (Enzyme)[http://airbnb.io/enzyme/] testing environment and tools. Some basic mocks for files and style imports are already predefined, and a basic test template and example test file is provided.
   
## Usage

Clone the repository or download it as a zip.
Move to the folder and execute:

```bash
$ yarn
```

Wait for the modules installation to complete.

You have 4 predefined scripts:

1. Start - spin up the webpack dev server (default port `8080`, can be changed in `webpack.config.js` under `devServer`)
2. Build - create a production build in the `dist` folder
3. Test - execute test files in `__tests__` folder
4. Test Coverage - execute test files in `__tests__` folder and collect coverage into the `__coverage__` folder

To run the scripts use:

```bash
$ yarn start
```

Or

```bash
$ yarn build
```

Or

```bash
$ yarn test
```

Or

```bash
$ yarn test:coverage
```

## Testing

The starter project includes Jest testing library with Enzyme.
The tests are stored in the `__tests__` folder, under the same structure of the src folder.
Mock-ups are stored in the `__mock__` folder, and includes basic mock-up files for external files loaders and style loaders.

There is a basic test template that will execute the following tests on a component:
1. Check that the component is rendered
2. Check that the rendered component has the correct structure
3. Check that the component holds the right props

To use the basic test, import the `test-template` from the `__tests__` folder. It exports the following:
1. shallowBasicTest

  This function takes an object in the form of `{ Component, props }`. It will execute the basic tests and return the shallow rendered component so you may add more tests on it.
  
2. mountBasicTest

  This function takes an object in the form of `{ Component, props }`. It will execute the basic tests and return the mounted component so you may add more tests on it.
  
3. shallow

  This is the `shallow` render function from Enzyme
  
4. mount 

  This is the `mount` function from Enzyme

You may refer to the `Home.spec.js` file for an example on how to use the `test-template`.

### Test coverage

You can run the tests with coverage using the predefined script `test:coverage`.
It will execute the `jest` testing library with the `--coverage` flag. The coverage results are stored in `__coverage__` folder.
