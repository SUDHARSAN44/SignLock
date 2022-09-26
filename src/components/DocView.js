import React from "react";
import "./DocView.css";

function DocView() {
  return (
    <>
      <div className="DocArea">
        <div className="DocPreview">
          <div className="DocContainer"></div>
          <div className="DocButtons">
            <input type="button" value="Decline" id="decline"></input>
            <input type="button" value="Accept" id="accept"></input>
          </div>
          <div className="DocTemp"></div>
        </div>
      </div>
    </>
  );
}

export default DocView;
