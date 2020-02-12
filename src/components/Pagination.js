import React from "react";
import { Pagination, Container } from "react-bootstrap";

const Paginationn = props => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";

    pageLinks.push(
      <Pagination.Item
        style={{ padding: "2px" }}
        key={i}
        active={active}
        onClick={() => props.nextPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <div
        style={{
          display: "flex"
        }}
      >
        <Pagination
          bsPrefix
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
          }}
        >
          {props.currentPage > 1 ? (
            <Pagination.Prev
              style={{ padding: "2px" }}
              onClick={() => props.nextPage(props.currentPage - 1)}
            />
          ) : (
            ""
          )}

          {pageLinks}

          {props.currentPage < props.pages + 1 ? (
            <Pagination.Next
              style={{ padding: "2px" }}
              onClick={() => props.nextPage(props.currentPage + 1)}
            />
          ) : (
            ""
          )}
        </Pagination>
      </div>
    </Container>
  );
};

export default Paginationn;
