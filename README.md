# Minimal Webpack Babel Setup

> a minimal boilerplate for Webpack 4 and Babel

## Features

- Webpack 4
- webpack-dev-server
- Babel 7
- HTML & CSS Loading
- production build: cleans distribution folder before generating new files & minifies Javascript, HTML and CSS

## Installation & Usage

- `git clone git@github.com:sophiabrandt/minimal-webpack-babel-setup.git`
- `cd minimal-webpack-babel-setup`
- `npm install` or `yarn install`
- `npm start` or `yarn start`
- visit `http://localhost:8080/`
- for a production build, run `npm build` or `yarn build`

### Terser Bug

At the moment (Feb 3rd, 2019) webpack crashes due to a bug in the **terser-webpack-plugin**.  
That's why I added a [fixed terser version as a workaround](https://github.com/webpack-contrib/terser-webpack-plugin/issues/66).

## Credits

- [Valentino Gagliardi: Webpack 4 Tutorial: from 0 Conf to Production Mode](https://www.valentinog.com/blog/webpack-tutorial/)
- [Robin Wieruch: React + Webpack 4 + Babel 7 Setup Tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

## License

> MIT License

> Copyright © 2019 Sophia Brandt

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
