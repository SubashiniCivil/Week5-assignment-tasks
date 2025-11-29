import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UpdateUser() {
  const { user, setUser } = useContext(UserContext);

  const updateName = () => {
    setUser({ ...user, name: user.name + " ⭐" });
  };

  return (
    <div className="card">
      <h3>🔄 Update User Name</h3>
      <button onClick={updateName}>Add Star to Name</button>
    </div>
  );
}

