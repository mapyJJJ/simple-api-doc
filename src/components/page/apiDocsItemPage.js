// 显示apilist 中的一项，还包括这一项的详情页面

import { useState } from "react"
import { Container } from "react-bootstrap"
import { Table } from "react-bootstrap"

import PopoverComp from "../utils/Pop"
import CTB from "../utils/CopyToclipBoard"
import ModalTemplate from "../utils/modal"

import Icon from "supercons"


const methodColorMap = {
  GET: "#0f99db",
  POST: "#3bd13b",
  PUT: "#fca130",
  DELETE: "red",
  OPTIONS: "#90bd6f",
  PATCH: "#fca130",
}
function GenPopoverMessage (message) {
  return (
    <code style={{ color: "blue", cursor: "pointer", "font-style": "italic" }}>
      {message}
    </code>
  )
}
function GenPopoverContent (jsonContent) {
  return <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
}

function ApiDetailDocs (confObj) {
  var indexArgContentObjectMap = {}
  var baseModels = Object.keys(confObj.basemodelmap)

  // 针对某些类型可能不是基础类型，而是包含多个参数的复杂对象
  // 这里提供一个hover 弹出的提示，展示这些对象内部精细结构
  // 弹出组件用 antd  popover , bootstrap 的popover不知道为啥arrow一直对不齐
  function replaceArgType (Args) {
    for (var i = 0; i < Args.length; i++) {
      var arg_type = Args[i].arg_type
      for (var j = 0; j < baseModels.length; j++) {
        var modelName = baseModels[j]

        var startIndex = arg_type.toString().indexOf(modelName)

        if (startIndex === -1) {
          continue
        } else {
          var baseModelMap = {}
          baseModelMap[modelName] = confObj.basemodelmap[modelName]
          if (!indexArgContentObjectMap[i]) {
            console.log(indexArgContentObjectMap[i])
            indexArgContentObjectMap[i] = [baseModelMap]
          } else {
            console.log(indexArgContentObjectMap[i])
            indexArgContentObjectMap[i].push(baseModelMap)
          }
        }
      }
      console.log(indexArgContentObjectMap)
    }
    for (let indexNum in indexArgContentObjectMap) {
      var baseModelList = indexArgContentObjectMap[indexNum]
      console.log(baseModelList)
      Args[indexNum]["arg_type"] = (
        <PopoverComp
          popBody={GenPopoverMessage(arg_type)}
          popContent={GenPopoverContent(baseModelList)}
          popTitle="数据模型"
        ></PopoverComp>
      )
    }
  }

  // 依次检查 body , query, response
  replaceArgType(confObj.bodys)
  replaceArgType(confObj.querys)
  replaceArgType(confObj.responses)

  return (
    <Container>
      <p>
        <strong>METHOD</strong>
        <small>(请求方法)</small>:<code> {confObj.method} </code>
      </p>
      <p>
        <strong>PATH</strong>
        <small>(路由)</small>:<code> {confObj.path}</code>
      </p>

      <p>
        <strong>api描述</strong>
        <small></small>:<code> {confObj.describe}</code>
      </p>

      <strong>Query参数:</strong>

      <p
        style={{
          display: confObj.querys.length === 0 ? "block" : "none",
          marginLeft: "20px",
        }}
      >
        <code>无</code>
      </p>

      <Table
        style={{ display: confObj.querys.length !== 0 ? "table" : "none" }}
        striped
        bordered
        hover
        size="sm"
        className="api-detail-table"
      >
        <thead>
          <tr>
            <th>
              <code>
                <strong>参数名</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>类型</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>必传</strong>
              </code>
            </th>
            <th>
              <code>默认值</code>
            </th>
            <th>
              <code>
                <strong>备注</strong>
              </code>
            </th>
          </tr>
          {confObj.querys.map((item) => (
            <tr>
              <th>
                <code>{item.name}</code>
              </th>
              <th>
                <code>{item.arg_type}</code>
              </th>
              <th>
                <code>{item.required ? "是" : "否"}</code>
              </th>
              <th>
                <code>{item.default}</code>
              </th>
              <th>
                <code>{item.description}</code>
              </th>
            </tr>
          ))}
        </thead>
      </Table>

      <strong>body参数:</strong>
      <p
        style={{
          display: confObj.bodys.length === 0 ? "block" : "none",
          marginLeft: "20px",
        }}
      >
        <code>无</code>
      </p>

      <Table
        style={{ display: confObj.bodys.length !== 0 ? "table" : "none" }}
        striped
        bordered
        hover
        size="sm"
        className="api-detail-table"
      >
        <thead>
          <tr>
            <th>
              <code>
                <strong>参数名</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>类型</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>必传</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>默认值</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>备注</strong>
              </code>
            </th>
          </tr>
          {confObj.bodys.map((item) => (
            <tr>
              <th>
                <code>{item.name}</code>
              </th>
              <th>
                <code>{item.arg_type}</code>
              </th>
              <th>
                <code>{item.required ? "是" : "否"}</code>
              </th>
              <th>
                <code>{item.default}</code>
              </th>
              <th>
                <code>{item.description}</code>
              </th>
            </tr>
          ))}
        </thead>
      </Table>

      <strong>返回值:</strong>
      <p
        style={{
          display: confObj.responses.length === 0 ? "block" : "none",
          marginLeft: "20px",
        }}
      >
        <code>未定义</code>
      </p>
      <Table
        style={{ display: confObj.responses.length !== 0 ? "table" : "none" }}
        striped
        bordered
        hover
        size="sm"
        className="api-detail-table"
      >
        <thead>
          <tr>
            <th>
              <code>
                <strong>参数名</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>类型</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>必传</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>示例</strong>
              </code>
            </th>
            <th>
              <code>
                <strong>备注</strong>
              </code>
            </th>
          </tr>
          {confObj.responses.map((item) => (
            <tr>
              <th>
                <code>{item.name}</code>
              </th>
              <th>
                <code>{item.arg_type}</code>
              </th>
              <th>
                <code>{item.required ? "是" : "否"}</code>
              </th>
              <th>
                <code>{item.default}</code>
              </th>
              <th>
                <code>{item.description}</code>
              </th>
            </tr>
          ))}
        </thead>
      </Table>

      <strong>数据模型:</strong>
      <small style={{ fontSize: "10px", "font-style": "italic" }}>
        {" "}
        (复杂传参使用数据模型表示结构)
      </small>
      <pre
        style={{
          marginTop: "10px",
          background: "lightgoldenrodyellow",
          color: "#dc5397",
          display:
            Object.keys(confObj.basemodelmap).length === 0 ? "none" : "block",
        }}
      >
        {JSON.stringify(confObj.basemodelmap, null, 2)}
      </pre>
      <p
        style={{
          display:
            Object.keys(confObj.basemodelmap).length === 0 ? "block" : "none",
          marginLeft: "20px",
        }}
      >
        <code>无</code>
      </p>
    </Container>
  )
}

function ApiItem (props) {
  const confObj = {
    path: props.path,
    bodys: props.bodys,
    querys: props.querys,
    method: props.method,
    describe: props.describe,
    responses: props.responses,
    basemodelmap: props.basemodelmap,
  }

  const [showDetail, setShowDetail] = useState(false)

  var method = props.method
  var colorStyle = {
    background: methodColorMap[method],
  }
  var ApiItemBorderStyle = {
    border: "1px solid " + methodColorMap[method],
  }
  var fontColor = methodColorMap[method]
  return (
    <div className="Api-item" style={ApiItemBorderStyle}>
      <p className="Api-item-method" style={colorStyle}>
        {props.method}
      </p>
      <p className="Api-item-path">{props.path}</p>
      <Icon
        glyph="docs"
        style={{ float: "right", color: fontColor }}
        onClick={() => setShowDetail(true)}
      />
      <CTB copyContent={props.path} fontColor={fontColor}></CTB>
      <ModalTemplate
        showModal={showDetail}
        setShowModal={setShowDetail}
        body={ApiDetailDocs(confObj)}
      ></ModalTemplate>
    </div>
  )
}

export default ApiItem
