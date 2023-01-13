import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking`)
        .then((res) => res.json())
        .then((data) => {
            setAppointments(data);
            console.log(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2>My Appointments{appointments.length}</h2>
    </div>
  );
};

export default MyAppointments;
