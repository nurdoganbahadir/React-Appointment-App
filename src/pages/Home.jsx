import React from "react";
import Doctors from "../components/Doctors";
import DrModal from "../components/DrModal";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  return (
    <>
      <Doctors />
      
      <AppointmentList />
    </>
  );
};

export default Home;
