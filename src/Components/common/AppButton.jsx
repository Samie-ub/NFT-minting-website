import React from "react";

const AppButton = ({ title, onClick, selectedClass }) => {
  return (
    <button onClick={onClick} className={`app--button ${selectedClass}`}>
      {title}
    </button>
  );
};

export default AppButton;
