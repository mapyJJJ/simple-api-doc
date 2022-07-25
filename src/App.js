// 本地css
import "./assert/css/index.css"
import "./assert/css/header.css"
import "./assert/css/apiList.css"
import "./assert/css/selectSchema.css"

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

// icon
import Icon from 'supercons'

// component
import Schema from "./components/page/schema"
import ApiList from "./components/page/apiList"

// version
const version = "v1.0"


/* main content */
function Content () {
  return <div class="Content">
    <Schema></Schema>
    <ApiList></ApiList>
  </div>
}



/*main app render */
function App () {
  return (
    
    <div className="App">
      <header className="App-header">
        <p><Icon glyph="battery-bolt" /> SimpleApiDocs <i>{version}</i></p>
      </header>
      <div className="Empty-box"></div>
      <Content />
    </div>
  )
}

export default App
