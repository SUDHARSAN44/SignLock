import React from "react";
import "./TempSelect.css";
function TempSelect() {
  return (
    <>
      <div className="DocArea1">
        <div className="DocHead1">
          <h1>Select Template</h1>
        </div>
        <div className="DocPreview1">
          <div className="DocList1">
            <ul>
              <li>
                <a href="#">Marketing Department</a>
              </li>
              <li>
                <a href="#">Operational Department</a>
              </li>
              <li>
                <a href="#">Finance Department</a>
              </li>
              <li>
                <a href="#">Finance Department</a>
              </li>
              <li>
                <a href="#">Operations Department</a>
              </li>
              <li>
                <a href="#">Marketing Department</a>
              </li>
            </ul>
          </div>
          <div className="TempAdd1">
            <button>Add Template +</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TempSelect;
