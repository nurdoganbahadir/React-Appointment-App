import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import DrModal from "./DrModal";
import { useState } from "react";

const Doctors = ({ doctorData, handleAddApp }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };

  return (
    <Container>
      <h2>Our Doctor</h2>
      <Row>
        {doctorData.map(({ id, img, dep, name }) => (
          <Col xs={12} sm={6} md={4} lg={3} key={id}>
            <img
              onClick={() => handleShow(name)}
              className="doctor-img"
              src={img}
              alt={name}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <DrModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        drName={drName}
        handleAddApp={handleAddApp}
      />
    </Container>
  );
};

export default Doctors;
