import React from "react";
import "./SideBar.css";
const SideBar = ({ children }) => {
  return (
    <>
      <div class="sidebar">
        <a class="active" href="#home">
          Received Documents{" "}
        </a>
        <a href="#news">Send Documents</a>
        <a href="#contact">Create Users</a>
        <a href="#about">List of Users</a>
      </div>
      <div>{children}</div>
    </>
  );
};

export default SideBar;
