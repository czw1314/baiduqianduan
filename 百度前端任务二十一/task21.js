var queue = [];
var timer;
var x = [];//存放查找后的值
var treeRoot = document.getElementById("root");
var text = document.getElementById("text");
var button = document.getElementsByTagName("button");
var sign = document.getElementsByClassName('sign');
var selected = document.getElementsByClassName("selected");
var depth = button[0];
var rang = button[1];
var depthSearch = button[2];
var rangeSearch = button[3];
var addBtn = button[4];
var delBtn = button[5];

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
        divs[i].classList.remove("selected")
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

treeRoot.addEventListener("click", function (e) {
    var node = e.target;
    reset();
    node.style.backgroundColor = "blue";
    node.className += " selected"
})

function add(node) {

    if (selected.length < 1) {
        alert("请先选择添加位置")
    }
    else {
        if (text.value == "") {
            alert("请输入要添加的值")
        }
        else {
            var child = document.createElement("div");
            child.style.backgroundColor = "white"
            child.innerHTML = text.value
            node.appendChild(child);
        }
    }
}

function del(node) {
    if (node == null) {
        alert("请先选择要删除的元素")
    }
    else {
        var parent = node.parentNode;

        parent.removeChild(node)
    }
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
rangeSearch.onclick = function () {
    reset();
    traverseBF(treeRoot);
    search();
}
addBtn.onclick = function () {
    add(selected[0]);
}
delBtn.onclick = function () {
    del(selected[0]);
}
