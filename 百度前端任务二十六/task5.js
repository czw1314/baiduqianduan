(function () {
    var drawing = document.getElementById("drawing");
    if (drawing.getContext) {
        var context = drawing.getContext("2d");
        context.beginPath();
        context.moveTo(20, 20);
        context.lineTo(20, 520);
        context.moveTo(20, 20);
        context.lineTo(520, 20);
        context.moveTo(520, 20);
        context.lineTo(520, 520);
        context.moveTo(520, 520);
        context.lineTo(20, 520);
        context.moveTo(70, 20);
        context.lineTo(70, 520);
        context.moveTo(120, 20);
        context.lineTo(120, 520);
        context.moveTo(170, 20);
        context.lineTo(170, 520);
        context.moveTo(220, 20);
        context.lineTo(220, 520);
        context.moveTo(270, 20);
        context.lineTo(270, 520);
        context.moveTo(320, 20);
        context.lineTo(320, 520);
        context.moveTo(370, 20);
        context.lineTo(370, 520);
        context.moveTo(420, 20);
        context.lineTo(420, 520);
        context.moveTo(470, 20);
        context.lineTo(470, 520);
        context.moveTo(20, 70);
        context.lineTo(520, 70);
        context.moveTo(20, 120);
        context.lineTo(520, 120);
        context.moveTo(20, 170);
        context.lineTo(520, 170);
        context.moveTo(20, 220);
        context.lineTo(520, 220);
        context.moveTo(20, 270);
        context.lineTo(520, 270);
        context.moveTo(20, 320);
        context.lineTo(520, 320);
        context.moveTo(20, 370);
        context.lineTo(520, 370);
        context.moveTo(20, 420);
        context.lineTo(520, 420);
        context.moveTo(20, 470);
        context.lineTo(520, 470);
        context.stroke();
        context.font = "bold 14px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("1", 10, 45);
        context.fillText("2", 10, 95);
        context.fillText("3", 10, 145);
        context.fillText("4", 10, 195);
        context.fillText("5", 10, 245);
        context.fillText("6", 10, 295);
        context.fillText("7", 10, 345);
        context.fillText("8", 10, 395);
        context.fillText("9", 10, 445);
        context.fillText("10", 10, 495);
        context.fillText("1", 45, 10);
        context.fillText("2", 95, 10);
        context.fillText("3", 145, 10);
        context.fillText("4", 195, 10);
        context.fillText("5", 245, 10);
        context.fillText("6", 295, 10);
        context.fillText("7", 345, 10);
        context.fillText("8", 395, 10);
        context.fillText("9", 445, 10);
        context.fillText("10", 495, 10);
    }
})();//画出格子
var obj = {
    p: document.querySelector("p"),
    angle: 0,
    d: document.querySelectorAll("button")[1],
    command: document.querySelector("select"),

    position: [],
    resert: document.querySelector("button"),
    i: 0
};

//盒子的位置随机
function randomOccurrence() {
    var top = document.createElement("div");
    top.className = "top";
    var buttom = document.createElement("div");
    buttom.className = "buttom";
    var box = document.createElement("div");
    box.className = "box";
    var grid = document.querySelector("#grid");
    box.appendChild(top);
    box.appendChild(buttom);
    grid.appendChild(box);
    var fandomLeft = (Math.floor(Math.random() * 10 + 0)) * 50;
    var fandomTop = (Math.floor(Math.random() * 10 + 0)) * 50;
    box.style.position = "absulote";
    box.style.left = fandomLeft + "px";
    box.style.top = fandomTop + "px";
    obj.position[0] = fandomLeft;
    obj.position[1] = fandomTop;
    obj.angle = 0;
    obj.i = 0;
    box.style.transform = "rotate(" + 0 + "deg)";
}

//移动盒子
function move(finalX, finalY) {
    var xpos = parseInt(obj.box.style.left);
    var ypos = parseInt(obj.box.style.top);
    if (xpos == finalX && ypos == finalY) {
        return true
    }
    if (xpos < finalX) {
        xpos++
    }
    if (xpos > finalX) {
        xpos--
    }
    if (ypos < finalY) {
        ypos++
    }
    if (ypos > finalY) {
        ypos--
    }
    obj.box.style.left = xpos + "px";
    obj.box.style.top = ypos + "px";
    setTimeout("move(obj.position[0],obj.position[1])", 10);
}

//旋转盒子
function rotate(finalA) {
    if (obj.i == finalA) {
        return true
    }
    if (obj.i < finalA) {
        obj.i++
    }
    if (obj.i > finalA) {
        obj.i--
    }
    obj.box.style.transform = "rotate(" + (obj.i) + "deg)";
    moveme = setTimeout("rotate(obj.angle)", 10);
}

function information() {
    obj.p.style.display = "block";
    obj.p.innerHTML = "主人，您越界了，只能换方向移动"
}

//重置obj.angle，使他只能位于-360--360之间
function resert() {
    if (obj.angle <= -360) {
        obj.angle += 360;
        obj.i += 360;
    }
    if (obj.angle >= 360) {
        obj.angle -= 360;
        obj.i -= 360
    }
}

function reserts() {
    if (obj.angle < 0) {
        obj.angle += 360;
        obj.i += 360;
    }
}

function turn(commands) {
    resert()
    obj.p.style.display = "none";
    switch (true) {
        case commands == "TUN LEF":
            obj.angle -= 90;
            rotate(obj.angle);
            return;
        // break;
        case commands == "TUN RIG":
            obj.angle += 90;
            rotate(obj.angle);
            return;
            break;
        case commands == "TUN BAC":
            obj.angle += 180;
            rotate(obj.angle);
            return;
            break;
        case commands == "GO":
            go();
            return;
            break;
        case commands == "TRA LEF":
            if (obj.position[0] > 0) {
                obj.position[0] -= 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            break;
        case commands == "TRA TOP":
            if (obj.position[1] > 0) {
                obj.position[1] -= 50;
                move(obj.position[0], obj.position[1]);
                return;
            }
            break;
        case commands == "TRA RIG" :
            if (obj.position[0] < 450) {
                obj.position[0] += 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            break;
        case commands == "TRA BOT" :
            if (obj.position[1] < 450) {
                obj.position[1] += 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            break;
        case commands == "MOV LEF":
            reserts()
            if (obj.position[0] > 0) {
                obj.angle = 270;
                rotate(obj.angle);
                obj.position[0] -= 50;
                move(obj.position[0], obj.position[1]);
                return
            }

            else {
                obj.angle = 270;
                rotate(obj.angle);
            }
            break;
        case  commands == "MOV TOP":
            reserts()
            if (obj.position[1] > 0) {
                obj.angle = 0
                rotate(obj.angle);
                obj.position[1] -= 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            else {
                obj.angle = 0;
                rotate(obj.angle);
            }
            ;
            break;
        case commands == "MOV RIG":
            reserts()
            if (obj.position[0] < 450) {
                obj.angle = 90;
                rotate(obj.angle);
                obj.position[0] += 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            else {
                obj.angle = 90;
                rotate(obj.angle);
            }
            break
        case commands == "MOV BOT":
            reserts()
            if (obj.position[1] < 450) {
                if (obj.angle == 180) {
                    obj.position[1] += 50;
                    move(obj.position[0], obj.position[1])
                }
                else {
                    obj.angle = 180;
                    rotate(obj.angle);
                    obj.position[1] += 50;
                    setTimeout("move(obj.position[0], obj.position[1])", 1900);
                }
                return
            }
            else {
                obj.angle = 180;
                rotate(obj.angle);
            }
            break;
    }
    information()
}

function go(soprt) {
    switch (true) {
        case obj.angle == 0:
            if (obj.position[1] > 0) {
                obj.position[1] -= 50;
                move(obj.position[0], obj.position[1]);
                return
            }
            break;
        case (obj.angle == 270 || obj.angle == -90):
            if (obj.position[0] > 0) {
                obj.position[0] -= 50;
                move(obj.position[0], obj.position[1]);
                return;
            }
            break
        case (obj.angle == 180 || obj.angle == -180):
            if (obj.position[1] < 450) {
                obj.position[1] += 50;
                move(obj.position[0], obj.position[1]);
                return;
            }
            break
        case (obj.angle == 90 || obj.angle == -270):
            if (obj.position[0] < 450) {
                obj.position[0] += 50;
                move(obj.position[0], obj.position[1]);
                return;
            }
            break
    }
    information()
}

obj.resert.onclick = function () {
    if (obj.box == undefined) {
        randomOccurrence()
        obj.box = document.querySelector(".box");
    }
    else {
        obj.p.innerHTML = "每次只能存在一个盒子"
    }
}
obj.d.onclick = function () {
    turn(obj.command.value, obj.angle)
}