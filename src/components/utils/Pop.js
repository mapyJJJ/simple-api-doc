import { Popover } from "antd";
import React from "react";

export default function PopoverComp(props) {
  var popBody = props.popBody;
  var popTitle = props.popTitle;
  var popContent = props.popContent;

  return (
    <Popover
      content={popContent}
      title={popTitle}
      trigger="hover"
      className="Popover"
    >
      {popBody}
    </Popover>
  );
}
