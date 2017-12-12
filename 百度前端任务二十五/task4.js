function createDiv() {
    var fragment = document.createDocumentFragment();
    var DIV = document.createElement("div");
    DIV.className = "box";
    var headeDiv = document.createElement("div");
    headeDiv.className = "top";
    DIV.appendChild(headeDiv);
    var buttomDiv = document.createElement("div");
    buttomDiv.className = "buttom";
    DIV.appendChild(buttomDiv);
    fragment.appendChild(DIV);
    return fragment;
}

var position = [];
var angle = 0;

function randomOccurrence() {
    var grid = document.querySelector("#grid");
    var div = createDiv();
    var fandomLeft = (Math.floor(Math.random() * 10 + 0)) * 49.5;
    var fandomTop = (Math.floor(Math.random() * 10 + 0)) * 50.6;
    grid.appendChild(div);
    var box = document.querySelector(".box");
    box.style.position = "absulote";
    box.style.left = fandomLeft + "px";
    box.style.top = fandomTop + "px";
    position.push(fandomLeft);
    position.push(fandomTop);
}

function turn() {
    var box = document.querySelector(".box");
    var p = document.querySelector("p");
    if (box == null) {
        p.innerHTML = "请先点击<span>start</span>,才能开始游戏"
        return false
    }
    else {
        var command = document.querySelector("select");
        var top = document.querySelector(".top").getBoundingClientRect();
        var buttom = document.querySelector(".buttom").getBoundingClientRect();
        p.style.display = "none"
        if (command.value == "turn left") {
            box.style.transform = "rotate(" + (angle - 90) + "deg)";
            return angle -= 90;
        }
        else if (command.value == "turn right") {
            box.style.transform = "rotate(" + (angle + 90) + "deg)";
            return angle += 90
        }
        else if (command.value == "turn bac") {
            box.style.transform = "rotate(" + (angle + 180) + "deg)";
            return angle += 180
        }
        else if (command.value == "go") {
            if ((top.top > buttom.top) && (parseInt(top.bottom)) <= 506) {
                box.style.top = (position[1] + 50) + "px";
                position[1] += 50;
            }
            else if ((top.top < buttom.top) && parseInt(top.top) >= 30) {
                box.style.top = (position[1] - 50) + "px";
                position[1] -= 50;
            }
            else if ((top.left < buttom.left) && (parseInt(top.left) >= 572)) {
                box.style.left = (position[0] - 50) + "px";
                position[0] -= 50;
            }
            else if ((top.left > buttom.left) && (parseInt(top.right) <= 1000)) {
                box.style.left = (position[0] + 50) + "px";
                position[0] += 50;
            }
        }
    }
}

/*var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubbles = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarger) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }
}
  var command = document.querySelector("select");
  EventUtil.addHandler(command,"mouseout",turn);
  */
var start = document.querySelectorAll("button")[0];
var order = document.querySelectorAll("button")[1];
order.onclick = function () {
    turn();
}
start.onclick = function () {
    var grid = document.querySelector("#grid");
    var p = document.querySelector("p");
    if (grid.childElementCount < 1) {
        randomOccurrence()
    }
    else {
        p.innerHTML = "每次只能存在一个方块"
    }
}