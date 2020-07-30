import "./styles.css";

var startButton = document.createElement("button");

startButton.innerHTML = "start";
startButton.setAttribute("id", "start");
startButton.setAttribute("class", "square");
startButton.setAttribute("onclick", "setNumButton()");
document.getElementById("main").appendChild(startButton);
document.getElementById("start").style.left = "200px";
document.getElementById("start").style.top = "300px";

var timer;

document.setNumButton = function() {
  document.removeStart();
  for (var num = 9; num > 0; num--) {
    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");
    var function_name = "remove(" + num + ")";
    elm.setAttribute("onclick", function_name);
    document.getElementById("main").appendChild(elm);

    var left_pos = 10;
    var top_pos = 100;

    left_pos = left_pos + Math.floor(Math.random() * 400);
    top_pos = top_pos + Math.floor(Math.random() * 600);

    document.getElementById(num).style.left = "" + left_pos + "px";
    document.getElementById(num).style.top = "" + top_pos + "px";
  }
};

var next = 1;

var setForwordNumber = function() {
  if (next !== 1) {
    var set_num = next - 1;
    var elm = document.createElement("button");
    elm.innerHTML = set_num;
    elm.setAttribute("id", set_num);
    elm.setAttribute("class", "circle");
    var function_name = "remove(" + set_num + ")";
    elm.setAttribute("onclick", function_name);
    document.getElementById("main").appendChild(elm);

    var left_pos = 10;
    var top_pos = 100;

    left_pos = left_pos + Math.floor(Math.random() * 400);
    top_pos = top_pos + Math.floor(Math.random() * 600);

    document.getElementById(set_num).style.left = "" + left_pos + "px";
    document.getElementById(set_num).style.top = "" + top_pos + "px";

    next = next - 1;
    timer = setTimeout(setForwordNumber, 3000);
  }
};

document.remove = function(id) {
  if (id === next) {
    clearTimeout(timer);
    document.getElementById("main").removeChild(document.getElementById(id));
    timer = setTimeout(setForwordNumber, 3000);
    next = next + 1;
    if (id === 9) {
      document.getElementById("main").appendChild(startButton);
      next = 1;
    }
  }
};

document.removeStart = function() {
  document.getElementById("main").removeChild(document.getElementById("start"));
  clearTimeout(timer);
};
