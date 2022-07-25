/* 展示api文档列表 */

// react
import React, { useState } from "react"

// 其他组件
import ApiItem from "./item"

// bootstrap 折叠组件
import Collapse from 'react-bootstrap/Collapse';

// icon
import Icon from 'supercons'



const mockList = [1, 2, 3, 4, 5]
function ApiList() {
    const [selectNum, setSelectNum] = useState(1);
    console.log(selectNum)

    return (
        <>
            <div class="item-list">
                <p>:API LIST:</p>

                {
                    mockList.map(item =>
                        <div className="http-group">
                            <div
                                className="group-item"
                                onClick={() => setSelectNum(item !== selectNum ? item : -1)}
                                aria-controls={"collapse" + item}
                                aria-expanded={item}
                            >/api/user: <i><Icon glyph={item === selectNum ? "down-caret" : "view-forward"} /></i>
                            </div>
                            <Collapse in={selectNum === item}>
                                <div id={"collapse" + item}>
                                    <ApiItem method="POST" path="/api/user/modify/one"></ApiItem>
                                    <ApiItem method="GET" path="/api/user/get/one"></ApiItem>
                                    <ApiItem method="DELETE" path="/api/user/delete"></ApiItem>
                                    <ApiItem method="PUT" path="/api/user/add"></ApiItem>
                                    <ApiItem method="OPTIONS" path="/api/user/get/one"></ApiItem>
                                </div>
                            </Collapse>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default ApiList