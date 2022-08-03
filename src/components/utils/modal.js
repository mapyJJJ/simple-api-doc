// 模态框组（大号弹窗)

import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalTemplate(props) {
  const confobj = {
    mainBody: props.body, //接受显示内容
    show: props.showModal, // show 开关
    title: props.modalTitle, // 标题
    setShow: props.setShowModal,
  };

  // onHide 和 show 控制展示关闭
  return (
    <>
      <Modal
        show={confobj.show}
        onHide={() => confobj.setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {confobj.title ? confobj.title : "详情"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{confobj.mainBody}</Modal.Body>
      </Modal>
    </>
  );
}
