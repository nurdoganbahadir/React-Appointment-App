import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointmentData, handleDelete }) => {
  return (
    <Container>
      <h3>Apointment</h3>
      {appointmentData.map(({ id, patient, day, consulted, doctor }) => (
        <div key={id}>
          <Row>
            <Col xs={3} md={6} lg={3}>
              <h3>{patient}</h3>
              <h4>{doctor}</h4>
            </Col>
            <Col>
              <h3>Date: {new Date(day).toLocaleDateString("tr")}</h3>
              <h4>Time: {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col>
              <TiDelete
                className="text-danger fs-1"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};
export default AppointmentList;
