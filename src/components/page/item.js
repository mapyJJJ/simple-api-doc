import { useState } from "react"
import CTB from "../utils/CopyToclipBoard"
import ModalTemplate from "../utils/modal"
import { Container } from "react-bootstrap"
import { Table } from "react-bootstrap"

// icon
import Icon from 'supercons'


const methodColorMap = {
    GET: "#0f99db",
    POST: "#3bd13b",
    PUT: "#fca130",
    DELETE: "red",
    OPTIONS: "#90bd6f"
}

function ApiDetailDocs (apipath) {
    return (
        <Container>
            <p><strong>METHOD</strong><small>(请求方法)</small>:<code>  GET</code></p>
            <p><strong>PATH</strong><small>(路由)</small>:<code>  {apipath}</code></p>
            <p><strong>CONTENT_TYPE</strong><small>(传输方式$编码)</small>:<code>  application/json</code></p>
            <strong>Query参数: </strong>
            <Table striped bordered hover size="sm" className="api-detail-table">
                <thead>
                    <tr>
                        <th><code><strong>参数名</strong></code></th>
                        <th><code><strong>类型</strong></code></th>
                        <th><code><strong>是否可选</strong></code></th>
                        <th><code><strong>示例</strong></code></th>
                        <th><code><strong>备注</strong></code></th>
                    </tr>
                    <tr>
                        <th><code>name</code></th>
                        <th><code>str</code></th>
                        <th><code>false</code></th>
                        <th><code>'zhangsan'</code></th>
                        <th></th>
                    </tr>
                </thead>
            </Table>

            <strong>body参数</strong>
            <Table striped bordered hover size="sm" className="api-detail-table">
            <thead>
                    <tr>
                        <th><code><strong>参数名</strong></code></th>
                        <th><code><strong>类型</strong></code></th>
                        <th><code><strong>是否可选</strong></code></th>
                        <th><code><strong>示例</strong></code></th>
                        <th><code><strong>备注</strong></code></th>
                    </tr>
                    <tr>
                        <th><code>name</code></th>
                        <th><code>str</code></th>
                        <th><code>false</code></th>
                        <th><code>'zhangsan'</code></th>
                        <th></th>
                    </tr>
                </thead>
            </Table>

            <strong>返回值:</strong>
            <Table striped bordered hover size="sm" className="api-detail-table">
            <thead>
                    <tr>
                        <th><code><strong>参数名</strong></code></th>
                        <th><code><strong>类型</strong></code></th>
                        <th><code><strong>是否可选</strong></code></th>
                        <th><code><strong>示例</strong></code></th>
                        <th><code><strong>备注</strong></code></th>
                    </tr>
                    <tr>
                        <th><code>name</code></th>
                        <th><code>str</code></th>
                        <th><code>false</code></th>
                        <th><code>'zhangsan'</code></th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
            
            <strong>状态码:</strong>
            <Table striped bordered hover size="sm" className="api-detail-table">
            <thead>
                    <tr>
                        <th><code><strong>状态码</strong></code></th>
                        <th><code><strong>说明</strong></code></th>
                    </tr>
                    <tr>
                        <th><code>200</code></th>
                        <th><code>success</code></th>
                    </tr>
                </thead>
            </Table>
            
            
            
        </Container>
    )
}



function ApiItem (props) {
    const [showDetail, setShowDetail] = useState(false)

    var method = props.method
    var colorStyle = {
        background: methodColorMap[method]
    }
    var ApiItemBorderStyle = {
        border: '1px solid ' + methodColorMap[method]
    }
    var fontColor = methodColorMap[method]
    return (
        <div className="Api-item" style={ApiItemBorderStyle}>
            <p className="Api-item-method" style={colorStyle}>{props.method}</p>
            <p className="Api-item-path">{props.path}</p>
            <Icon glyph="docs" style={{ float: "right", "color": fontColor }} onClick={() => setShowDetail(true)} />
            <CTB copyContent={props.path} fontColor={fontColor}></CTB>
            <ModalTemplate showModal={showDetail} setShowModal={setShowDetail} body={ApiDetailDocs(props.path)}></ModalTemplate>
        </div>
    )
}

export default ApiItem