import * as R from "ramda";

export const MSGS = {
  SEARCH_INPUT: "SEARCH_INPUT",
  INITIATE_SEARCH: "INITIATE_SEARCH",
  HTTP_SUCCESS: "HTTP_SUCCESS",
  HTTP_ERROR: "HTTP_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR"
};

const apiKey = process.env.OMDB_API_KEY;

function movieDBUrl(search) {
  return `http://www.omdbapi.com/?s=${encodeURI(search)}&apikey=${apiKey}`;
}

const httpSuccessMsg = () => response => ({
  type: MSGS.HTTP_SUCCESS,
  response
});

function httpErrorMsg(error) {
  return {
    type: MSGS.HTTP_ERROR,
    error
  };
}

export const clearErrorMsg = {
  type: MSGS.CLEAR_ERROR
};

export function searchInputMsg(search) {
  return {
    type: MSGS.SEARCH_INPUT,
    search
  };
}

export const initiateSearchMsg = { type: MSGS.INITIATE_SEARCH };

function update(msg, model) {
  switch (msg.type) {
    case MSGS.SEARCH_INPUT: {
      const { search } = msg;
      return { ...model, search };
    }
    case MSGS.INITIATE_SEARCH: {
      const { search } = model;
      return [
        { ...model },
        {
          request: { url: movieDBUrl(search) },
          successMsg: httpSuccessMsg(),
          errorMsg: httpErrorMsg
        }
      ];
    }
    case MSGS.HTTP_SUCCESS: {
      const { response } = msg;
      const newMovies = R.pathOr([], ["data", "Search"], response);
      const updatedMovies = R.map(movie => {
        const { Title: title, Year: year, imdbID, Poster: poster } = movie;
        return { title, year, imdbID, poster };
      }, newMovies);
      return { ...model, search: "", error: null, movies: updatedMovies };
    }
    case MSGS.HTTP_ERROR: {
      const { error } = msg;
      return { ...model, error: error.message };
    }
    case MSGS.CLEAR_ERROR: {
      return { ...model, error: null };
    }
  }
  return model;
}

export default update;
