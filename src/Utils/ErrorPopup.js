import React from "react";
import "./ErrorPopup.css";

const ErrorPopup = ({ error, onClose }) => {
  return (
    <div className="error-popup">
      <div className="error-content">
        <p className="error-message">Error:</p>
        <p className="error-description">{error}</p>
      </div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
};

export default ErrorPopup;
