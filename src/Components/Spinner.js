import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-5 px-5">
      <img src={loading} alt="spinner loader" className="my-5 px-5" />
    </div>
  );
};

export default Spinner;
