import React, { useState } from "react";
import Doctors from "../components/Doctors";
import DrModal from "../components/DrModal";
import AppointmentList from "../components/AppointmentList";
import { appointmentData } from "../helpers/data";
import { doctorData } from "../helpers/data";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const handleAddApp = (newAppointment) => {
    setAppointments([...appointmentData, newAppointment]);
  };
  const handleDelete = (id) => {};
  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5">CLARUS HOSPITAL</h1>
      <Doctors doctorData={doctorData} handleAddApp={handleAddApp} />
      <AppointmentList
        appointmentData={appointments}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Home;
