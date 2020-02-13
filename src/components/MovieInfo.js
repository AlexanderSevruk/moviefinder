import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const MovieInfo = props => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <Button
          variant="warning"
          onClick={props.closeMovieInfo}
          style={{
            cursor: "pointer",
            margin: "100px 0 20px 0",
            borderRadius: "2px"
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </Button>
        <Row style={{ alignItems: "center" }}>
          <Col md="auto">
            {props.currentMovie.poster_path === null ? (
              <img
                style={{ width: "300px", borderRadius: "2px" }}
                src={`https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg`}
                alt="Poster"
              />
            ) : (
              <img
                style={{ width: "300px", borderRadius: "2px" }}
                src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
                alt="Poster"
              />
            )}
          </Col>
          <Col>
            <div style={{ color: "#EFF1F3" }}>
              <h1>
                {props.currentMovie.title}{" "}
                <span style={{ fontSize: "1.8rem", color: "#a6a3a0" }}>
                  (
                  {props.currentMovie.release_date
                    .substring(5)
                    .split("-")
                    .concat(props.currentMovie.release_date.substring(0, 4))
                    .join(".")}
                  )
                </span>
              </h1>
              <p style={{ fontSize: "1.4rem" }}>
                User score: {10 * props.currentMovie.vote_average}%
              </p>
              <p style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Overview</p>
              <p style={{ fontSize: "1.2rem" }}>
                {props.currentMovie.overview}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieInfo;
