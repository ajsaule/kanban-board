import * as React from "react";

const SubtaskIcon = (props: any) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#828FA3" d="m12.728 0 2.121 2.121L2.121 14.85l-2.12-2.121z" />
    <path fill="#828FA3" d="M0 2.121 2.12 0 14.85 12.728l-2.121 2.12z" />
  </svg>
);

export default SubtaskIcon;
