import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Certification from "./Certification";
import Director from "./Director";
import Length from "./Length";
import Rating from "./Rating";
import ReleaseDate from "./ReleaseDate";
import Title from "./Title";
import "./Certification.css";

const MovieTable = ({ movieData }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [searchDirector, setSearchDirector] = useState("");
  const [searchCerti, setSearchCerti] = useState("");

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Favorite Movie List</h1>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Running time</th>
            <th>Director</th>
            <th>Certifications</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Search by title"
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="number"
                placeholder="Search by year"
                onChange={(e) => setSearchYear(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="number"
                placeholder="Search by time"
                onChange={(e) => setSearchTime(e.target.value)}
              />
            </td>

            <td>
              <Form.Control
                type="text"
                placeholder="Search by director"
                onChange={(e) => setSearchDirector(e.target.value)}
              />
            </td>

            <td>
              <FormControl>
                <Select
                  style={{ 
                    width: "180px",
                    backgroundColor: "white" ,
                    padding:'0.2em',
                   
                  }}
                  value={searchCerti}
                  onChange={(e) => setSearchCerti(e.target.value)}
                  displayEmpty
                >
                  <MenuItem
                    style={{
                      backgroundColor: "#e2e3ee",
                      color: "#256029",
                      borderRadius: "2px",
                      padding: ".25em .5rem",
                      margin: "0.5em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      fontSize: "0.8vw",
                      letterSpacing: ".3px",
                    }}
                    value={""}
                  >
                    All Certifications
                  </MenuItem>
                  <MenuItem
                    style={{
                      backgroundColor: "#c8e6c9",
                      color: "#256029",
                      borderRadius: "2px",
                      padding: ".25em .5rem",
                      margin: "0.5em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      fontSize: "0.8vw",
                      letterSpacing: ".3px",
                    }}
                    value={"General"}
                  >
                    General
                  </MenuItem>
                  <MenuItem
                    style={{
                      backgroundColor: "#feedaf",
                      color: "#8a5340",
                      borderRadius: "2px",
                      padding: ".25em .5rem",
                      margin: "0.5em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      fontSize: "0.8vw",
                      letterSpacing: ".3px",
                    }}
                    value={"CA-PG"}
                  >
                    CA-PG
                  </MenuItem>
                  <MenuItem
                    style={{
                      backgroundColor: "#ffcdd2",
                      color: "#c63737",
                      borderRadius: "2px",
                      padding: ".25em .5rem",
                      margin: "0.5em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      fontSize: "0.8vw",
                      letterSpacing: ".3px",
                    }}
                    value={"14 ACCOMPANIMENT"}
                  >
                    14 Accompainiment
                  </MenuItem>
                </Select>
              </FormControl>
            </td>
            <td>
              <Form.Control
                type="number"
                placeholder="Search by rating"
                onChange={(e) => setSearchRating(e.target.value)}
              />
            </td>
          </tr>
          {movieData
            .filter((item) => {
              if (
                searchTitle === "" &&
                searchYear === "" &&
                searchTime === "" &&
                searchRating === "" &&
                searchCerti === "" &&
                searchDirector === ""
              ) {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
                item.releaseDate
                  .toLowerCase()
                  .includes(searchYear.toLowerCase()) &&
                item.length.includes(searchTime) &&
                item.rating.includes(searchRating) &&
                item.certification
                  .toLowerCase()
                  .includes(searchCerti.toLowerCase()) &&
                item.director
                  .toLowerCase()
                  .includes(searchDirector.toLowerCase())
              ) {
                return item;
              }
              return false;
            })
            .map((item) => (
              <tr key={item._id}>
                <td>
                  <Title item={item} />
                </td>
                <td>
                  <ReleaseDate item={item} />
                </td>
                <td>
                  <Length item={item} />
                </td>
                <td>
                  <Director item={item} />
                </td>
                <td>
                  <Certification item={item} />
                </td>
                <td>
                  <Rating item={item} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MovieTable;
