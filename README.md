# Functional Movie Search

> a frontend example app built with functional principles in mind

The **[live demo](https://sophiabrandt.github.io/functional-movie-search/)** is hosted on Github Pages. You can search for movie titles by typing into the search bar and submitting your search.  
The app will query the [Open Movie Database](https://www.omdbapi.com/).  
Click on an image to see more information (leads to the [IMDB Website](https://www.imdb.com)).  
If no image is available, you'll see a cute [kitten](https://placekitten.com).

## Motivation

This is an exercise in building a mostly functional frontend app **without** a framework like React & Redux.

Part of the code is from [Functional Programming For Beginners with JavaScript](https://courses.knowthen.com/p/functional-programming-for-beginners-with-javascript).

## Tech Stack

- ES2015+
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
- [hyperscript-helpers ](https://github.com/ohanhi/hyperscript-helpers)
- [Ramda](https://ramdajs.com)
- [minireset.css](https://github.com/jgthms/minireset.css)
- [Tachyons](https://tachyons.io/)
- [Open Movie Database](https://www.omdbapi.com/)
- [PlaceKitten](https://placekitten.com)
- [Github Corners](https://github.com/tholman/github-corners)
- Webpack & webpack-dev-server

## Installation

1. Clone the repository

```sh
git clone git@github.com:sophiabrandt/functional-movie-search.git
```

2. Get API key

Get an API key from [https://www.omdbapi.com/](https://www.omdbapi.com/).  
Create a new file called `.env` and add the following line:

```
OMDB_API_KEY=<your-key-here>
```

Replace with your API key.

3. Install dependencies

`npm install` or `yarn install`

4. Run application

`npm run dev` or `yarn run dev`

Visit `http://localhost:8000/`.

## Credits & License

Part of the code originally written by [James Moore](https://github.com/knowthen/). Adapted for learning purposes by Sophia Brandt.
