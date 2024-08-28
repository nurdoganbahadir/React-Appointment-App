import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DrModal({ handleClose, show, drName, handleAddApp }) {
  const [pName, setPName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      patient: pName,
      day: date,
      consulted: false,
      doctor: drName,
    };
    handleAddApp(newAppointment);
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) => setPName(e.target.value)}
              ></Form.Control>
              <Form.Label>Date&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="date"
                required
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="text-center mt-2">
              <Button className="me-3" variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DrModal;
