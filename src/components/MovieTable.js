import { MenuItem, Select } from "@material-ui/core";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Certification from "./Certification";
import Director from "./Director";
import Length from "./Length";
import Rating from "./Rating";
import ReleaseDate from "./ReleaseDate";
import Title from "./Title";

const MovieTable = ({ movieData }) => {
  const directorData=[
    {name:'John Carney',id:1},
    {name:'Patty Jenkins',id:2},
    {name:'Amy Poehler',id:3},
    {name:'David Ayer',id:4},
    {name:'Pete Docter',id:5},
    {name:'Ryan Coogler',id:6},
    {name:'Luc Besson',id:7},
  ]

  const [options] = useState(directorData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [searchDirector, setSearchDirector] = useState();
  const [searchCerti, setSearchCerti] = useState('');

  useEffect(() => {
    console.log(searchDirector);
  },[searchCerti,searchDirector,movieData])
  
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
              <Multiselect showCheckbox options={options} displayValue="name" onSelect={(e)=>setSearchDirector(e)} onRemove={(e)=>setSearchDirector(e)} ></Multiselect>
            </td>

            <td>
                 <Select
                    
                     style={{width:'200px'}}
                     value={searchCerti}
                     onChange={(e)=> setSearchCerti(e.target.value)}
                  >
                    <MenuItem selected value={''} >All</MenuItem>
                    <MenuItem value={'General'} >General</MenuItem>
                    <MenuItem value={'CA-PG'} >CA-PG</MenuItem>
                    <MenuItem value={'14 ACCOMPANIMENT'} >14 Accompainiment</MenuItem>
                  </Select>
          </td>
            <td>
              <Form.Control
                type="number"
                placeholder="Search by rating"
                onChange={(e) => setSearchRating(e.target.value)}
              />
            </td>
          </tr>
          {movieData.filter((item) => {
              if (searchTitle === "" && searchYear === "" && searchTime === "" && searchRating === "" && searchCerti ==="") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
                item.releaseDate.toLowerCase().includes(searchYear.toLowerCase()) &&
                item.length.includes(searchTime) &&
                item.rating.includes(searchRating) &&
                item.certification.toLowerCase().includes(searchCerti.toLowerCase())   
              ) {
                return item;
              }
              return false;
            }).map((item) => ( 
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
