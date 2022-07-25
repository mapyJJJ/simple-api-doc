import React from "react"
import { ToastContainer } from "react-bootstrap"
import Toast from 'react-bootstrap/Toast'

function CustomToast (props) {

    const confobj = {
        bg: props.bg,  // Success, Primary , Secondary, Danger, Info, Warning
        toastkey: props.toastkey,
        toastTitle: props.title,
        firstTime: props.firsttime, //  example: 11 mins ago
        message: props.message,
        closefunc: props.closefunc
    }

    const doclose = () => {
        confobj.closefunc(false)
    }

    return (
        <ToastContainer position="middle-center">
            <Toast bg={confobj.bg} key={confobj.toastkey} onClose={doclose} delay={2000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{confobj.toastTitle}</strong>
                    <small className="text-muted" style={{ float: "right" }}>{confobj.firstTime}</small>
                </Toast.Header>
                <Toast.Body>
                    {confobj.message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
export default CustomToast
