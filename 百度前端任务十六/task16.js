var inNum = document.getElementById("inNum");
var outNum = document.getElementById("outNum");
var btnLeftIn = document.getElementById("btnLeftIn");
var btnRightIn = document.getElementById("btnRightIn");
var btnLeftOut = document.getElementById("btnLeftOut");
var btnRightOut = document.getElementById("btnRightOut");

// 插入数字
function insert(direction) {
    if (inNum.value === "") {
        alert("请输入需要插入的值");//输入框为空，按钮点击时，跳出提示框
        inNum.focus();
    } else if (isNaN(inNum.value)) {
        alert("只能输入数字");//输入框为非数字，按钮点击时，跳出提示框
        inNum.focus();
    } else {
        var oLi = document.createElement("li");
        oLi.innerHTML = inNum.value;
        if (direction === "left") { //点击左侧按钮插入
            outNum.insertBefore(oLi, outNum.firstChild);//将生成的li元素从前方放入
        } else if (direction === "right") { //点击右侧按钮插入
            outNum.appendChild(oLi);//将生成的li元素从末尾放入
        }
    }
    inNum.value = "";
}

// 删除数字
function del(node, direction) {
    if (outNum.childNodes.length <= 0) {
        alert("不存在元素可以删除");
        return false;
    } else {
        if (direction === "left") {  //点击左侧按钮删除
            alert("删除数字：" + outNum.firstChild.innerText + "！");
            outNum.removeChild(outNum.firstChild);
        } else if (direction === "right") {  //点击右侧按钮删除
            alert("删除数字：" + outNum.lastChild.innerText + "！");
            outNum.removeChild(outNum.lastChild);
        } else { //点击li标签删除
            alert("删除数字：" + node.innerText + "！");
            outNum.removeChild(node)
        }
    }
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