import React from "react";

import Movie from "./Movie";

import { Container, Row, Col } from "react-bootstrap";

const MovieList = props => {
  return (
    <Container fluid>
      <Row
        bsPrefix
        className="d-flex justify-content-center"
        style={{ flexWrap: "wrap" }}
      >
        {props.movies.map((movie, i) => {
          return (
            <Col lg="auto" md="auto" sm="auto">
              <Movie
                key={i}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                image={movie.poster_path}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MovieList;
