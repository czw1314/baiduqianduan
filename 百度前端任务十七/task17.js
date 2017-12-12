var inNum = document.getElementById("inNum");
var outNum = document.getElementById("outNum");
var btnLeftIn = document.getElementById("btnLeftIn");
var btnRightIn = document.getElementById("btnRightIn");
var btnLeftOut = document.getElementById("btnLeftOut");
var btnRightOut = document.getElementById("btnRightOut");
var rank = document.getElementById("rank");
var data = [];
var frames = [];

// 插入数字
function judge() {
    if (inNum.value === "") {
        alert("请输入需要插入的值");//输入框为空，按钮点击时，跳出提示框
        inNum.focus();
        return 0
    }
    else if (isNaN(inNum.value)) {
        alert("只能输入数字");//输入框为非数字，按钮点击时，跳出提示框
        inNum.focus();
        return 0
    }
    else if (data.length > 60) {
        alert("超出容器容量了");//容器里有60个数字，按钮点击时，跳出提示框
        inNum.focus();
        return 0
    }
    else if (inNum.value < 10 || inNum.value > 100) {
        alert("只能输入10--100的数字");
        inNum.focus();
        return 0
    }
    return 1
}

function judges() {
    if (data.length < 1) {
        alert("没有可删除的数字了");//容器里有0个数字，按钮点击时，跳出提示框
        return 0
    }
    return 1
}

function insert(direction) {
    if (judge()) {
        var oLi = document.createElement("span");
        oLi.innerHTML = inNum.value;
        oLi.style.height = 2 * inNum.value + "px";
        if (direction === "left") { //点击左侧按钮插入
            outNum.insertBefore(oLi, outNum.firstChild);//将生成的li元素从前方放入
            data.unshift(parseInt(inNum.value));
        }
        else if (direction === "right") { //点击右侧按钮插入
            outNum.appendChild(oLi);//将生成的li元素从末尾放入
            data.push(parseInt(inNum.value));
        }
    }
    inNum.value = "";
}

// 删除数字
function del(node, direction) {
    if (judges()) {
        if (direction === "left") {  //点击左侧按钮删除
            alert("删除数字：" + outNum.firstChild.innerText + "！");
            data.shift()
            outNum.removeChild(outNum.firstChild);
        }
        else if (direction === "right") {  //点击右侧按钮删除
            alert("删除数字：" + outNum.lastChild.innerText + "！");
            data.pop();
            outNum.removeChild(outNum.lastChild);
        }
        else { //点击li标签删除
            alert("删除数字：" + node.innerText + "！");
            var index = [].indexOf.call(node.parentNode.children, node);
            data.splice(index, 1);
            outNum.removeChild(node)
        }
    }
}

function ranker() {
    var min = 0;
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length - i - 1; j++) {
            min = data[j];
            if (data[j] > data[j + 1]) {
                data[j] = data[j + 1];
                data[j + 1] = min;
                frames.push({"type": 3, "posA": j, "posB": j + 1}); //交换展示动作
                frames.push({"type": 1, "posA": j, "posB": j + 1}); //交换动作,pos 表示需要交换的位置
            } else {
                frames.push({"type": 3, "posA": j, "posB": j + 1}); //前进动作，pos  表示当前的位置
            }
        }
    }
    show()
}

function show() {
    if (frames.length == 0) {
        return;
    }
    var span = document.getElementsByTagName("span"),
        dd = frames.shift();

    if (dd.type == 3) { //交换展示
        var d1 = dd.posA, d2 = dd.posB;
        span[d1].style.backgroundColor = "orange";
        span[d2].style.backgroundColor = "orange";
    } else if (dd.type == 1) { //交换位置
        var d1 = dd.posA, d2 = dd.posB;
        var tmp = span[d1].style.height;
        span[d1].style.height = span[d2].style.height;
        span[d2].style.height = tmp;
        span[d1].style.backgroundColor = "pink";
        span[d2].style.backgroundColor = "yellow";

    }
    timeoutHandler = setTimeout(show, 1000);
}

//按钮
btnLeftIn.onclick = function () {
    insert("left");
};
btnRightIn.onclick = function () {
    insert("right");
};
btnLeftOut.onclick = function () {
    del(-1, "left");
};
btnRightOut.onclick = function () {
    del(-1, "right");
};
outNum.onclick = function () {
    del(event.target)
};
rank.onclick = function () {
    ranker();
};