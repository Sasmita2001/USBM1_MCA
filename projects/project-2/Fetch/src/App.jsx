/* eslint-disable no-unused-vars */
import React from "react";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="text-center p-4 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">User List</h1>
      </header>
      <UserList />
    </div>
  );
};

export default App;
