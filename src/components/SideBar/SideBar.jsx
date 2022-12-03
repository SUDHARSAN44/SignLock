import React from "react";
import "./SideBar.css";
const SideBar = ({ children }) => {
  return (
    <>
      <div class="sidebar">
        <div>
        <a href="/signList">
          Received Documents{" "}
        </a>
        <a href="/signedList">Send Documents</a>
        <a href="/prepareDocument">Prepare Document</a>
        </div>

      </div>
      <div>{children}</div>
    </>
  );
};

export default SideBar;
