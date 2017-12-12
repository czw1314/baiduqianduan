(function () {
    var EventUtil = {
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
    var input = document.querySelectorAll("input");
    var p = document.querySelectorAll("p");
    var btn = document.querySelector("button")

    function reset1() {
        p[0].innerHTML = "必填，4-16个字符";
        input[0].style.border = "1px red #ccc"
        p[0].style.color = "#555"
    }

    function input1() {
        var pattern = /^[A-Za-z0-9\u4e00-\u9fa5-_]{4,16}$/;
        if (input[0].value == "") {
            p[0].innerHTML = "名称不能为空";
            input[0].style.border = "1px red solid"
            p[0].style.color = "red"
            return 0
        }
        else if (pattern.test(input[0].value)) {
            p[0].innerHTML = "名称格式正确";
            input[0].style.border = "1px green solid";
            p[0].style.color = "green";
            return 1;
        }
        else {
            p[0].innerHTML = "对不起，您输入格式有误或含有非法字符";
            input[0].style.border = "1px red solid";
            p[0].style.color = "red";
            return 0
        }
        return 1
    }

    function reset2() {
        p[1].innerHTML = "必填，请输入密码";
        input[1].style.border = "1px red #ccc";
        p[1].style.color = "#555";
    }

    function input2() {
        var pattern = /^[A-Za-z0-9]+$/;
        if (input[1].value == "") {
            p[1].innerHTML = "密码不能为空";
            input[1].style.border = "1px red solid";
            p[1].style.color = "red";
            return 0
        }
        else if (pattern.test(input[1].value)) {
            p[1].innerHTML = "密码格式正确";
            input[1].style.border = "1px green solid";
            p[1].style.color = "green";
            return 1
        }
        else {
            p[1].innerHTML = "对不起，您输入的含有非法字符";
            input[1].style.border = "1px red solid";
            p[1].style.color = "red";
            return 0
        }
        return 1
    }

    function reset3() {
        p[2].innerHTML = "必填，请再次输入密码";
        input[2].style.border = "1px red #ccc";
        p[2].style.color = "#555";
    }

    function input3() {
        if (input[2].value == "") {
            p[2].innerHTML = "密码不能为空";
            input[2].style.border = "1px red solid";
            p[2].style.color = "red";
            return 0
        }
        else if (input[1].value === input[2].value) {
            p[2].innerHTML = "密码格式正确";
            input[2].style.border = "1px green solid";
            p[2].style.color = "green";
            return 1
        }
        else {
            if (input[1].value == "") {
                p[2].innerHTML = "请先输入密码";
                input[2].style.border = "1px red solid";
                p[2].style.color = "red";
                return 0
            }
            else {
                p[2].innerHTML = "两次输入不一致";
                input[2].style.border = "1px red solid";
                p[2].style.color = "red";
                return 0
            }
        }
        return 1
    }

    function reset4() {
        p[3].innerHTML = "必填，请输入邮箱";
        input[3].style.border = "1px red #ccc";
        p[3].style.color = "#555"
    }

    function input4() {
        var pattern = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5-_]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
        if (input[3].value == "") {
            p[3].innerHTML = "邮箱不能为空";
            input[3].style.border = "1px red solid";
            p[3].style.color = "red";
            return 0
        }
        else if (pattern.test(input[3].value)) {
            p[3].innerHTML = "邮箱格式正确";
            input[3].style.border = "1px green solid";
            p[3].style.color = "green";
            return 1
        }
        else {
            p[3].innerHTML = "对不起，您输入邮箱格式错误";
            input[3].style.border = "1px red solid";
            p[3].style.color = "red";
            return 0
        }
        return 1
    }

    function reset5() {
        p[4].innerHTML = "必填，请输入手机号";
        input[4].style.border = "1px red #ccc";
        p[4].style.color = "#555"
    }

    function input5() {
        var pattern = new RegExp("^1[0-9]{10}$");
        if (input[4].value == "") {
            p[4].innerHTML = "手机号不能为空";
            input[4].style.border = "1px red solid";
            p[4].style.color = "red";
            return 0
        }
        else if (pattern.test(input[4].value)) {
            p[4].innerHTML = "手机号格式正确";
            input[4].style.border = "1px green solid";
            p[4].style.color = "green";
            return 1
        }
        else {
            p[4].innerHTML = "对不起，您输入手机号格式有误";
            input[4].style.border = "1px red solid";
            p[4].style.color = "red";
            return 0
        }
        return 1
    }

    function submit() {
        if (input1() && input2() && input3() && input4() && input5()) {
            alert("恭喜你完成了所有信息的填写，下面将进入百度")
            window.open("http://www.baidu.com/", "_self");
        }
        else {
            alert("请先完善信息")
        }
    }

    EventUtil.addHandler(input[0], "focus", reset1)
    EventUtil.addHandler(input[0], "blur", input1)
    EventUtil.addHandler(input[1], "focus", reset2)
    EventUtil.addHandler(input[1], "blur", input2)
    EventUtil.addHandler(input[2], "focus", reset3)
    EventUtil.addHandler(input[2], "blur", input3)
    EventUtil.addHandler(input[3], "focus", reset4)
    EventUtil.addHandler(input[3], "blur", input4)
    EventUtil.addHandler(input[4], "focus", reset5)
    EventUtil.addHandler(input[4], "blur", input5)
    EventUtil.addHandler(btn, "click", submit)
})()