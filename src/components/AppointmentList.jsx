import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointmentData, handleDelete }) => {
  const [appointments, setAppointments] = useState(appointmentData);

  useEffect(() => {
    setAppointments(appointmentData);
  }, [appointmentData]);

  const handleRowClick = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, consulted: !appointment.consulted }
          : appointment
      )
    );
  };

  return (
    <Container>
      <h3 className="app-header">Apointment</h3>
      {appointments.map(({ id, patient, day, consulted, doctor }) => (
        <div key={id} className="card-div">
          <Row className="app-row" onClick={() => handleRowClick(id)}>
            <Col>
              <h3 className="patient-name">{patient}</h3>
              <h4>{doctor}</h4>
            </Col>
            <Col>
              <h3>Date: {new Date(day).toLocaleDateString("tr")}</h3>
              <h4>Time: {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col className="delete-btn">
              <TiDelete
                className="text-danger fs-1"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(id);
                }}
              />
            </Col>
          </Row>
          <Row className="consulted-row">
            <Col className="text-center">
              <h4>{consulted ? "Consulted" : "Not Consulted"}</h4>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};
export default AppointmentList;
