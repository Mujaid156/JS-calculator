function press(val) {
  document.getElementsByClassName("screen")[0].value += val;
}

function clear() {
  document.getElementsByClassName("screen")[0].innerHTML = "";
}

function equal() {
  let text = document.getElementsByClassName("screen")[0].value;
  let result = eval(text);
  document.getElementsByClassName("screen")[0].value = result;
}
