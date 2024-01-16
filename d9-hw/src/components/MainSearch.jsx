// src/components/MainSearch.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorites } from "../redux/actions";
import Job from "./Job";

const MainSearch = ({ jobs, addToFavorites }) => {
  const [query, setQuery] = useState("");

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // Aggiungi i lavori al tuo store
        // Assicurati che il reducer gestisca correttamente questa azione
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavorites = (job) => {
    // Aggiungi il lavoro ai preferiti utilizzando l'azione
    addToFavorites(job);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} />
              <button onClick={() => handleAddToFavorites(jobData)}>Add to Favorites</button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { addToFavorites })(MainSearch);
