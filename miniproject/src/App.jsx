import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default function App() {
  return (
    <UserContextProvider >
      <h1>React is loves</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}
