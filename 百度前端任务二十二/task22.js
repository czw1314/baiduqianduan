function judgeId() {
    var text = document.querySelector(".form-horizontal").querySelectorAll("input")[0];
    var information = document.querySelector(".form-horizontal").querySelectorAll("p")[0];
    var phoneNumber = new RegExp("^1[0-9]{10}$");
    var email = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5-_]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
    var id = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5-_]{4,}$");
    if (text.value == "") {
        information.innerHTML = "输入不能为空"
        return 0
    }
    else if (phoneNumber.test(text.value) || email.test(text.value) || id.test(text.value)) {
        information.innerHTML = "通过验证"
        return 1
    }
    else {
        information.innerHTML = "请正确的账号信息"
        return 0
    }
}

function judgePassWord() {
    var text = document.querySelector(".form-horizontal").querySelectorAll("input")[1];
    var information = document.querySelector(".form-horizontal").querySelectorAll("p")[1];
    var password = new RegExp("^[A-Za-z0-9]+$")
    if (text.value == "") {
        information.innerHTML = "输入不能为空"
        return 0
    }
    else if (password.test(text.value)) {
        information.innerHTML = "格式正确"
        return 1
    }
    else {
        information.innerHTML = "请正确的密码格式"
        return 0
    }
    return 1
}

function success() {
    if (judgePassWord() && judgeId()) {
        alert("信息正确,将进入新网页")
        window.open("http://www.baidu.com/", "_self");
    }
    else {
        alert("请先输入正确信息")
    }
}

var text = document.querySelectorAll("input");
var btn = document.querySelector("button");
text[0].onclick = function () {
    judgeId()
};
text[0].onmouseout = function () {
    judgeId()
};
text[0].onkeydown = function () {
    judgeId()
};
text[1].onclick = function () {
    judgePassWord()
};
text[1].onmouseout = function () {
    judgePassWord()
};
text[1].onkeydown = function () {
    judgePassWord()
};
btn.onclick = function () {
    success()
};