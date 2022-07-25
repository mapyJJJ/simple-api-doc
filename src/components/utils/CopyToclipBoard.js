/* 复制到剪切板组件 */

// react
import React from "react"

// icon
import Icon from 'supercons'

// bootstrap toast
import CustomToast from "./toast"



class CTB extends React.Component {
    state = {
        showSuccessToast: false
    }
    setShowSuccessToast = (v) => {
        this.setState({
            showSuccessToast: v
        })
    }
    render () {
        const doCopy = () => {
            navigator.clipboard.writeText(this.props.copyContent)
            this.setShowSuccessToast(true)
        }

        return (
            <i
                className="clip-i"
                style={{ color: this.props.fontColor }}
                title="复制路由"
            >

                <Icon glyph="copy" onClick={doCopy} />
                {this.state.showSuccessToast ? <CustomToast
                    bg="success"
                    toastkey={Date.now() + "ctb"}
                    title="提示"
                    firsttime="1 seconds ago"
                    message="路由复制成功"
                    closefunc={this.setShowSuccessToast}
                /> : null}
            </i>
        )
    }
}

export default CTB