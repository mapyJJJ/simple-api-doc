import React from "react";

const SelectSchemaOptions = ["HTTP", "WEBSOCKET"];

export default class SchemaComp extends React.Component {
  render() {
    const SchemaOption = this.props.SchemaOption;
    const SetSchemaOption = this.props.SetSchemaOption;

    function ChangeOption(e) {
      SetSchemaOption(e.target.value.trim());
    }

    return (
      <div className="Schema">
        <p>Schemes</p>
        <select onChange={ChangeOption} value={SchemaOption}>
          {SelectSchemaOptions.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}
