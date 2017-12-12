var queue = [];
var timer;
var x = [];
var treeRoot = document.getElementById("root");
var button = document.getElementsByTagName("button");
var depth = button[0];
var rang = button[1];
var depthSearch = button[2];

//深度
function traverseDF(node) {
    queue.push(node)
    for (var i = 0; i < node.children.length; i++) {
        if (node.children[i] != null)
            traverseDF(node.children[i])
    }
}

//广度
function traverseBF(treeNodes) {
    var stack = [];
    //先将第一层节点放入栈
    for (var i = 0, len = treeNodes.children.length; i < len; i++) {
        stack.push(treeNodes.children[i]);
    }
    var item;
    while (stack.length) {
        item = stack.shift();
        queue.push(item)
        //先将第一层节点放入栈
        for (var i = 0, len = item.children.length; i < len; i++) {
            stack.push(item.children[i]);
        }
    }
    queue.unshift(treeRoot)
}

//改变颜色
function changeColor() {
    var i = 0;
    queue[i].style.backgroundColor = "red";
    timer = setInterval(function () {
        i++;
        if (i < queue.length) {
            queue[i - 1].style.backgroundColor = "white";
            queue[i].style.backgroundColor = "red";
        }
        else {
            clearInterval(timer);
            queue[queue.length - 1].style.backgroundColor = "#fff";
        }
    }, 100)
}

//重置
function reset() {
    queue = [];
    x = [];
    clearInterval(timer);
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
}

function search() {
    var input = document.getElementById("input").value;
    var pattern = new RegExp(input);
    if (input != "") {
        for (var i = 0; i < queue.length; i++) {
            for (var j = 0; j < queue[i].childNodes.length; j++) {
                if (queue[i].childNodes[j].nodeValue != null && input == queue[i].childNodes[j].nodeValue.replace(/\s+/g, "")) {
                    x.push(queue[i]);
                }
            }
        }
        changeColors()
    }
    else {
        alert("请输入值");
    }
}

function change() {
    clearInterval(timer);
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }

}

function changeColors() {
    var i = 0;
    queue[i].style.backgroundColor = "red";
    timer = setInterval(function () {
        i++;
        if (i < queue.length) {
            queue[i - 1].style.backgroundColor = "white";
            queue[i].style.backgroundColor = "red";
        }
        else {
            clearInterval(timer);
            queue[queue.length - 1].style.backgroundColor = "#fff";
            if (x.length < 1) {
                alert("没找到")
            }
            else {
                change();
            }
        }

    }, 100)
}

depth.onclick = function () {
    reset();
    traverseDF(treeRoot);
    changeColor();
}
rang.onclick = function () {
    reset();
    traverseBF(treeRoot);
    changeColor();
}
depthSearch.onclick = function () {
    reset();
    traverseDF(treeRoot);
    search();
}
