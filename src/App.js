import React, { Component } from "react";

//Components
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";
import Sky from "react-sky";
//Style
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchQuery: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4ff20e7eb5704c2ca993d78a309ca81c&query=${this.state.searchQuery}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  ChangePage = pageNum => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4ff20e7eb5704c2ca993d78a309ca81c&append_to_response=tv&query=${this.state.searchQuery}&page=${pageNum}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNum });
      });
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  viewMovieInfo = id => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <div>{this.state.currentMovie === null ? <Jumbotron /> : ""}</div>
        <div className="App">
          {this.state.currentMovie === null ? (
            <div className="content">
              <SearchField
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
              <MovieList
                movies={this.state.movies}
                viewMovieInfo={this.viewMovieInfo}
              />
            </div>
          ) : (
            <MovieInfo
              closeMovieInfo={this.closeMovieInfo}
              currentMovie={this.state.currentMovie}
            />
          )}

          <div>
            <Sky
              images={{
                0: "https://image.flaticon.com/icons/svg/523/523968.svg",
                1: "https://image.flaticon.com/icons/svg/2564/2564549.svg",
                2: "https://image.flaticon.com/icons/svg/412/412785.svg",
                3: "https://image.flaticon.com/icons/svg/1448/1448807.svg"
              }}
              how={80}
              time={80}
              size={"50px"}
              background={"#696773"}
            />
          </div>

          {this.state.totalResults > 20 && this.state.currentMovie === null ? (
            <Pagination
              pages={numberPages}
              nextPage={this.ChangePage}
              currentPage={this.state.currentPage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
