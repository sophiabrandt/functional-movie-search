# Functional Comments App Plan / Notes

## Data Model

Example Model/Shape:

```javascript
movie = {
  title: "Batman Begins",
  year: "2005",
  imdbID: "tt0372784",
  type: "movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
};
model = {
  search: "",
  movies: []
};
```

## View Functions

view
-> searchView
-> -> fieldSet
-> moviesListView
-> -> movieCardView

## Update/Interactions

click add comment
name input
email input
body (comment) input
click save (add /update)
click cancel
click edit icon
click delete icon
