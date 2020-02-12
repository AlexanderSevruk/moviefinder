import React from "react";

import { Container, Jumbotron, Row, Col } from "react-bootstrap";

const MovieJumbotron = () => {
  return (
    <Jumbotron
      fluid
      style={{
        backgroundColor: "#FED766",
        backgroundSize: "auto 100%",
        marginBottom: "0px"
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 style={{}}>Search for movies</h1>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              this app uses movie db api. You can enter a movie title and find
              the sequels,prequels and other related to the movie stuff. Press
              the 'details' button on the movie card to view users score of the
              movie and a short overview.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MovieJumbotron;
