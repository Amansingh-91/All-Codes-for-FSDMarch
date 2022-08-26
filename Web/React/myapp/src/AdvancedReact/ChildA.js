import { memo } from "react";

const ChildA = ({ name, myFunc }) => {
  console.log("child element");
  return <></>;
};

export default memo(ChildA);
