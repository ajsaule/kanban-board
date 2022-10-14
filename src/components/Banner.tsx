import React from "react";
import "../styles/components/Banner.scss";
import VerticalEllipsis from "./svgs/VerticalEllipsis";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Plaform Launch</h1>
      <div className="button-wrapper">
        <button>+ Add New Task</button>
        <div>
          <VerticalEllipsis className="vertical-ellipsis" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
