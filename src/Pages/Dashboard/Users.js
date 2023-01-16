import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

export const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
        method: "GET", 
        headers:{
            authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                users.map(user => <UserRow key={user._id} user={user}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
