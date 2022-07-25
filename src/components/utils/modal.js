import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ModalTemplate (props) {

  // props
  const show = props.showModal
  const setShow = props.setShowModal
  const mainBody = props.body


  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            详情
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mainBody}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTemplate