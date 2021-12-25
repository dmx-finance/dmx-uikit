import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img {...props} src="/images/tokens/dMX.png" />;
};

export default Icon;
