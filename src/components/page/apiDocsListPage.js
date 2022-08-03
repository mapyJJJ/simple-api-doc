//api docs 列表


import axios from "axios";
import Icon from "supercons";
import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";

import ApiItem from "./apiDocsItemPage";
import ApiUrls from "../../apis";

export default function ApiDocsDomListComp() {
  const ApiListUrl = ApiUrls.ApiDocsList;
  const [selectIncludeName, setSelectIncludeName] = useState(null);
  const [IncludeApiDocsListMap, setIncludeApiDocsListMap] = useState({});

  useEffect(() => {
    axios.get(ApiListUrl).then((response) => {
      var data = response.data;
      if (!data) return null;
      var IncludeApiDocsListMap = {};
      var ApiDocsList = data["api_docs_list"];

      for (var i = 0; i < ApiDocsList.length; i++) {
        var ApiDocs = ApiDocsList[i];
        if (i === 0) {
          setSelectIncludeName(ApiDocs.include);
        }
        var FilterApiDocsList = IncludeApiDocsListMap[ApiDocs.include];
        if (!FilterApiDocsList) {
          IncludeApiDocsListMap[ApiDocs.include] = [ApiDocs];
        } else {
          IncludeApiDocsListMap[ApiDocs.include].push(ApiDocs);
        }
      }
      setIncludeApiDocsListMap(IncludeApiDocsListMap);
    });
  }, []);
  return (
    <div class="item-list">
      <p>:API LIST:</p>
      {Object.keys(IncludeApiDocsListMap).map((includeName) => (
        <div className={includeName}>
          <div className="http-group">
            <div
              className="group-item"
              onClick={() =>
                setSelectIncludeName(
                  includeName !== selectIncludeName ? includeName : -1
                )
              }
              aria-controls={"collapse" + includeName}
              aria-expanded={includeName}
            >
              {includeName}
              <small
                style={{
                  "font-size": "15px",
                  "font-style": "italic",
                  color: "#abb3b3",
                }}
              >
                (包含{IncludeApiDocsListMap[includeName].length}个api)
              </small>
              <i>
                <Icon
                  glyph={
                    includeName === selectIncludeName
                      ? "down-caret"
                      : "view-forward"
                  }
                />
              </i>
            </div>
            <Collapse in={selectIncludeName === includeName}>
              <div id={"collapse" + includeName}>
                {IncludeApiDocsListMap[includeName].map((item) => (
                  <ApiItem
                    path={item.path}
                    bodys={item.bodys}
                    querys={item.querys}
                    describe={item.describe}
                    responses={item.responses}
                    basemodelmap={item.data_model_map}
                    method={item.method.toString()}
                  ></ApiItem>
                ))}
              </div>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}
