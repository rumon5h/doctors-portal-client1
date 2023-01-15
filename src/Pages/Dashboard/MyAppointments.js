import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appointments.map((a,index) => <tr key={a._id}>
                  <th>{index+1}</th>
                    <th>{a.patientName}</th>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                    <td>{a.treatment}</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
