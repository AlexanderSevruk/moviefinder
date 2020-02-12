import React from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Form
} from "react-bootstrap";

const SearchField = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                className="input"
                style={{
                  borderRadius: "2px",
                  marginTop: "15px",

                  backgroundColor: "#696773",
                  color: "#EFF1F3",
                  border: "none"
                }}
                onChange={props.handleChange}
                placeholder="Movie title"
                aria-label="Movie title"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  style={{
                    borderRadius: "2px",
                    marginTop: "15px"
                  }}
                  onClick={props.handleSubmit}
                  variant="primary"
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchField;
