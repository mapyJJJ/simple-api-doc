function calc_content_height() {
  let header = document.getElementsByClassName("App-header");
  console.log(header[0]);
  // console.log(header.getAttrubute("height"))
}

function doCopy(e, content) {
  e.ClipboardData.setData();
  e.ClipboardData.setData("text/plain", content);
  alert("复制成功");
}

export { calc_content_height, doCopy };
