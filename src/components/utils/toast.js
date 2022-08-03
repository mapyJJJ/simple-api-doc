// Toast Component
/* 
bootstrap taost 
*/

import React from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

export default function CustomToastComp(props) {
  const confobj = {
    delay: props.delay, // 单位ms
    toastTitle: props.title, // 标题
    message: props.message, // 提示消息
    toastkey: props.toastkey, // toastkey
    position: props.position, // middle-center....
    closefunc: props.closefunc, // close callback func
    AppearTime: props.AppearTime, //  example: 11 mins ago
    bg: props.bg, // Success, Primary , Secondary, Danger, Info, Warning
  };

  const DoClose = () => {
    // 关闭操作
    confobj.closefunc(false);
  };

  // 返回一个bootstrap toast
  return (
    <ToastContainer position={confobj.position ? confobj.position : "top-end"}>
      <Toast
        bg={confobj.bg}
        onClose={DoClose}
        key={confobj.toastkey}
        delay={confobj.delay ? confobj.delay : 2000}
        autohide
      >
        {/* <Toast.Header>
          <strong className="me-auto">{confobj.toastTitle}</strong>
          <small className="text-muted" style={{ float: "right" }}>
            {confobj.AppearTime}
          </small>
        </Toast.Header> */}
        <Toast.Body>{confobj.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
