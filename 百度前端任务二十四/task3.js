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
    var node = document.querySelectorAll("select");
    var nodes = document.querySelectorAll("input");

    function match() {
        var university = [["北京", "北京大学", "清华大学", "中国人民大学", "北京师范大学", "北京理工大学", "中国农业大学", "中央民族大学", "北京航空航天大学"],
            ["上海", "复旦大学", "同济大学", "上海交通大学", "华东师范大学"], ["成都", "四川大学", "电子科技大学"], ["广州", "中山大学", "华南理工大学"],
            ["西安", "西安交通大学", "西北工业大学", "西北农林科技大学"]];
        node[1].options.length = 0;
        for (var i = 0; i < university.length; i++) {
            if (node[0].value == university[i][0]) {
                for (var j = 1; j < university[i].length; j++) {
                    var newOption = document.createElement("option")
                    newOption.appendChild(document.createTextNode(university[i][j]));
                    node[1].appendChild(newOption)
                }
            }
        }
    }

    EventUtil.addHandler(node[0], "change", match);
    EventUtil.addHandler(nodes[0], "click", insert)
    EventUtil.addHandler(nodes[1], "click", change)
    var divs = document.querySelectorAll(".col-sm-12");

    function insert() {
        divs[0].style.display = "block"
        divs[1].style.display = "none"
    }

    function change() {
        divs[1].style.display = "block"
        divs[0].style.display = "none"
    }

})()
