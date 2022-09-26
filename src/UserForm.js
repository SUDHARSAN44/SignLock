import React from "react";
import "./UserForm.css";
function UserForm() {
  return (
    <>
      <div className="DocArea">
        <div className="DocHead">
          <div className="DocDP"></div>
          <div className="DocUser">
            <h5>kamal vimal</h5>
          </div>
          <div className="DocMail">
            <h5>K***********@gmail.com</h5>
          </div>
        </div>
        <div className="DocPreview">
          <div className="DocForm">
            <div className="FormHead">
              <h4>User Details</h4>
            </div>
            <div className="DocInput">
              <input className="inp" type="text" placeholder="Username"></input>
              <hr></hr>
            </div>
            <div className="DocInput">
              <input
                className="inp"
                type="text"
                placeholder="Designation"
              ></input>
              <hr></hr>
            </div>
            <div className="DocInput">
              <input
                className="inp"
                type="text"
                placeholder="Department"
              ></input>
              <hr></hr>
            </div>
            <div className="DocInput">
              <input
                className="inp"
                type="text"
                placeholder="Contact information"
              ></input>
              <hr></hr>
            </div>
            <div className="DocInput">
              <input
                className="inp"
                type="text"
                placeholder="Valid till"
              ></input>
              <hr></hr>
            </div>
            <div className="DocInput">
              <input
                className="inp"
                type="text"
                placeholder="Employee ID"
              ></input>
              <hr></hr>
            </div>
          </div>
          <div className="DocSign">
            <h5 className="SignHead">Upload your Signature</h5>
            <div className="Sign"> Upload Your Signature</div>
            <h5 className="SignName">Your Name</h5>

            <div className="Name">Your Name Here</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm;
