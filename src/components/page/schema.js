import React from "react"

const SelectOptions = [
    "HTTP",
    "WEBSOCKET",
    "MODEL"
]

class Schema extends React.Component {
    render() {
        return (
            <div className="Schema">
                <p>Schemes</p>
                <select>
                    {
                        SelectOptions.map(item=> <option value={item}>{item}</option>)
                    }
                </select>
            </div>
        )
    }
}

export default Schema