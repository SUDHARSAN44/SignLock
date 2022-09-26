import React from "react";
import "./DocView2.css";
function DocView2() {
  return (
    <>
      <div className="DocArea2">
        <div className="DocPreview2">
          <div className="DocContainer2"></div>
          <div className="DocButtons2">
            <input type="button" value="Decline" id="decline"></input>
            <input type="button" value="Accept" id="accept"></input>
          </div>
          <div className="DocText2">
            <textarea
              id="DocTextArea"
              rows="8"
              cols="80"
              placeholder="Reason for Decline"
            ></textarea>
            <div className="DocTempButtons2">
              <input type="button" value="Cancel" id="decline"></input>
              <input type="button" value="Submit" id="accept"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DocView2;
