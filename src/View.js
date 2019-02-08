import * as R from "ramda";
import hh from "hyperscript-helpers";
import { h } from "virtual-dom";

import { searchInputMsg, initiateSearchMsg, clearErrorMsg } from "./Update";

const {
  div,
  h1,
  pre,
  input,
  form,
  fieldset,
  legend,
  label,
  a,
  img,
  dl,
  dt,
  dd
} = hh(h);

function movieCard(title, year, imdbID, poster) {
  const noPoster = poster === "N/A";
  return a(
    {
      className: "db mh1 mw5 tc black link dim",
      title: title,
      href: `https://imdb.com/title/${imdbID}`,
      target: "_blank"
    },
    [
      img({
        className: "db ba b--black-10",
        alt: `${title} Movie Poster`,
        src: noPoster ? "https://placekitten.com/300/400" : poster
      }),
      dl({ className: "mt2 f6 lh-copy" }, [
        dt({ className: "clip" }, "Title"),
        dd({ className: "ml0" }, title),
        dt({ className: "clip" }, "Year"),
        dd({ className: "ml0 gray" }, year)
      ])
    ]
  );
}

function movieView(movie) {
  const { title, year, imdbID, poster } = movie;
  return movieCard(title, year, imdbID, poster);
}

function moviesView(model) {
  const movies = R.map(movieView, model.movies);
  return div({ className: "flex flex-wrap justify-around" }, movies);
}

function fieldSetView(inputValue, fieldSetId, inputId, labelText, oninput) {
  return div([
    fieldset({ className: "ba b--transparent ph0 mh0", id: fieldSetId }, [
      legend({ className: "ph0 mh0 fw6 clip" }, fieldSetId),
      div({ className: "mt3" }, [
        label({ className: "db fw4 lh-copy f6", htmlFor: inputId }, labelText),
        input({
          className: "pa2 input-reset ba bg-transparent w-100 measure",
          type: "text",
          id: inputId,
          value: inputValue,
          oninput
        })
      ])
    ])
  ]);
}

function searchView(dispatch, model) {
  const { search } = model;
  return form(
    {
      className: "pa4 black-80",
      onsubmit: event => {
        event.preventDefault();
        dispatch(initiateSearchMsg);
      }
    },
    [
      fieldSetView(search, "search", "search-bar", "Search Movies", event =>
        dispatch(searchInputMsg(event.target.value))
      ),
      div({ className: "mt3" }),
      input({
        className:
          "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6",
        type: "submit"
      })
    ]
  );
}

function error(dispatch, model) {
  if (!model.error) {
    return null;
  }
  return div(
    {
      className: "pa2 mv2 bg-red white relative pointer",
      onclick: () => dispatch(clearErrorMsg)
    },
    model.error
  );
}

function view(dispatch, model) {
  return div({ className: "mw8 center" }, [
    h1({ className: "f2 pv2 bb" }, "Functional Movie Search"),
    error(dispatch, model),
    searchView(dispatch, model),
    moviesView(model)
    // pre(JSON.stringify(model, null, 2))
  ]);
}

export default view;
