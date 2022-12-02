import React from "react";
import "./SideBar.css";
const SideBar = ({ children }) => {
  return (
    <>
      <div class="sidebar">
        <a href="#home">
          Received Documents{" "}
        </a>
        <a href="#">Send Documents</a>
        <a href="/createUsers">Create Users</a>
        <a href="/listOfUser">List of Users</a>
      </div>
      <div>{children}</div>
    </>
  );
};

export default SideBar;
