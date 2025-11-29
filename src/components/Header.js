import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h2>React Context Demo</h2>
      <p>{user ? `Welcome, ${user.name}!` : "Loading user..."}</p>
    </header>
  );
}

