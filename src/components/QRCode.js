import React from "react";
import "./QRCode.scss";
function QRCode() {
  return (
    <div className="qr-code-container">
      <img className="qr-code-image" src={"./images/image-qr-code.png"}></img>

      <div className="qr-code-text-container">
        <div className="qr-code-topic">
          Improve your front-end
          <br />
          skills by building projects
        </div>
        <div className="qr-code-description">
          Scan the QR code to visit Frontend
          <br />
          Mentor and take your coding skills to
          <br />
          the next level
        </div>
      </div>
    </div>
  );
}

export default QRCode;
