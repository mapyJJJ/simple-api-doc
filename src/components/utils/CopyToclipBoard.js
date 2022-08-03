// 复制到剪切板组件
/* 
主要用到 navigator.clipboard.writeText 写入剪切板
通过 icon 标签设置 onClick 事件
后续 弹出 toast 提示，复制成功， 另外 toast 是一个单独的组件，
也是通过改变父组件的state，向其传递消息，控制是否显示
*/

import React from "react";
import Icon from "supercons";
import CustomToastComp from "./toast";

export default class CTB extends React.Component {
  state = {
    showSuccessToast: false,
  };
  setShowSuccessToast = (v) => {
    this.setState({
      showSuccessToast: v,
    });
  };
  render() {
    const doCopy = () => {
      navigator.clipboard.writeText(this.props.copyContent);
      this.setShowSuccessToast(true);
    };

    return (
      <>
        <i
          className="clip-i"
          style={{ color: this.props.fontColor }}
          title="复制路由"
        >
          <Icon glyph="copy" onClick={doCopy} />
        </i>
        {this.state.showSuccessToast ? (
          <CustomToastComp
            bg="info"
            toastkey={Date.now() + "ctb"}
            title="复制"
            AppearTime="1 seconds ago"
            message="路由复制成功✔"
            closefunc={this.setShowSuccessToast}
          />
        ) : null}
      </>
    );
  }
}
