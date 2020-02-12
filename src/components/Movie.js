import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Movie = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            bg="dark"
            style={{
              minWidth: "12rem",
              maxWidth: "16rem",
              margin: "20px 0",
              border: "none",
              borderRadius: "2px"
            }}
          >
            {props.image == null ? (
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src="https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg"
              />
            ) : (
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${props.image}`}
              />
            )}

            <Card.Body>
              <Button
                style={{ borderRadius: "2px", fontSize: "1.2rem" }}
                onClick={() => props.viewMovieInfo(props.movieId)}
                variant="warning"
                block
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
