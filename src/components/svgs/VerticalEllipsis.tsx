import * as React from "react";

const VerticalEllipsis = (props: any) => (
  <svg width={5} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="evenodd">
      <circle cx={2.308} cy={2.308} r={2.308} />
      <circle cx={2.308} cy={10} r={2.308} />
      <circle cx={2.308} cy={17.692} r={2.308} />
    </g>
  </svg>
);

export default VerticalEllipsis;
