// react development 指定一个固定的api前缀，方便开发

import process from "process";

function getApiUrls(apiPath) {
  let url;
  if (apiPath[0] !== "/") {
    apiPath = "/" + apiPath;
  }
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:9091" + apiPath;
  } else {
    url = "http://" + window.location.host + apiPath;
  }
  return url;
}

const ApiUrls = {
  ApiDocsList: getApiUrls("/docs-api/v1/api_list"),
};

export default ApiUrls;
