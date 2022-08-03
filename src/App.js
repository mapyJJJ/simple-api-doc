// 本地css
import "./assert/css/index.css";
import "./assert/css/header.css";
import "./assert/css/apiList.css";
import "./assert/css/selectSchema.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// icon
import Icon from "supercons";

// component
import SchemaComp from "./components/page/schemaPage";
import ApiDocsDomListComp from "./components/page/apiDocsListPage";
import { useState } from "react";

// version
const version = "v1.0";

/* main content */
function Content() {
  const [SchemaOption, SetSchemaOption] = useState("HTTP");

  return (
    <div class="Content">
      <SchemaComp
        SchemaOption={SchemaOption}
        SetSchemaOption={SetSchemaOption}
      ></SchemaComp>
      <ApiDocsDomListComp></ApiDocsDomListComp>
    </div>
  );
}

/*main app render */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Icon glyph="battery-bolt" /> SimpleApiDocs <i>{version}</i>
        </p>
      </header>
      <div className="Empty-box"></div>
      <Content />
    </div>
  );
}

export default App;
