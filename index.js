"use strict";
(() => {
    const data = [
        {
            name: "Albie Morrison",
            desc: "Me",
            children: [
                {
                    name: "Family",
                    desc: "People who are always around me. Got to learn to like them!",
                },
                {
                    name: "School",
                    desc: "All that learning stuff.",
                },
                {
                    name: "Friends",
                    desc: "People who I choose to spend time around; a bit of a different relationship than family.",
                },
                {
                    name: "Projects/Hobbies",
                    desc: "Stuff I like doing.",
                }
            ]
        }
    ];
    const distBetweenNodes = 175;
    let canvas = document.getElementById("main_canvas");
    let ctx = canvas.getContext("2d");
    var halfX = canvas.width / 2;
    var halfY = canvas.height / 2;
    var mouseX = 0, mouseY = 0;
    function centerCoords(x, y) {
        return [
            Math.round(x + halfX),
            Math.round(y + halfY)
        ];
    }
    function drawCrosses() {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                ctx.save();
                ctx.translate(canvas.width / 4 * j, canvas.height / 4 * i);
                ctx.beginPath();
                ctx.moveTo(-9, 0);
                ctx.lineTo(9, 0);
                ctx.moveTo(0, -9);
                ctx.lineTo(0, 9);
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCrosses();
        drawBoxes(data[0]?.children, 0, 0, undefined, undefined, undefined, 5);
        let xOffset = mouseX - canvas.width / 2;
        let yOffset = mouseY - canvas.height / 2;
        let curMouseDist = Math.hypot(xOffset, yOffset);
        let moveSpeed = Math.min(Math.max((curMouseDist - 100) / 90, 0), 3.25);
        let moveDir = Math.atan2(yOffset, xOffset);
        let curDist = Math.hypot(canvas.width / 2 - halfX, canvas.height / 2 - halfY);
        let dx = -Math.cos(moveDir) * moveSpeed;
        let dy = -Math.sin(moveDir) * moveSpeed;
        let afterDist = Math.hypot(canvas.width / 2 - halfX - dx, canvas.height / 2 - halfY - dy);
        console.log(curDist);
        if (afterDist < curDist) {
            halfX += dx;
            halfY += dy;
            document.querySelectorAll("div.box").forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        }
        else if (afterDist < 300) {
            let scale = (1.1 - afterDist / 300);
            dx *= scale;
            dy *= scale;
            halfX += dx;
            halfY += dy;
            document.querySelectorAll("div.box").forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        }
        requestAnimationFrame(redraw);
    }
    function resizeCanvas() {
        let oldHalfX = halfX;
        let oldHalfY = halfY;
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        halfX = canvas.width / 2;
        halfY = canvas.height / 2;
        document.querySelectorAll("div.box").forEach((el) => {
            el.style.left = (Number(el.style.left.slice(0, -2)) + halfX - oldHalfX) + "px";
            el.style.top = (Number(el.style.top.slice(0, -2)) + halfY - oldHalfY) + "px";
        });
    }
    function mouseMove(e) {
        mouseX = e.x;
        mouseY = e.y;
    }
    function expandDescBox(div) {
        div.style.zIndex = "15";
        div.querySelector("span.name")?.classList.remove("collapsed");
        div.querySelector("span.desc").style.display = "inline-block";
    }
    function collapseDescBox(div) {
        div.style.zIndex = "unset";
        div.querySelector("span.name")?.classList.add("collapsed");
        div.querySelector("span.desc").style.display = "none";
    }
    function addDescBox(box, x, y) {
        let div = document.createElement("div");
        let pos = centerCoords(x, y);
        div.classList.add("box");
        div.onmouseenter = () => {
            expandDescBox(div);
        };
        div.onmouseleave = () => {
            collapseDescBox(div);
        };
        let name = document.createElement("span");
        name.classList.add("name", "collapsed");
        name.innerText = box.name;
        let desc = document.createElement("span");
        desc.classList.add("desc");
        desc.innerHTML = box?.desc ?? "";
        div.append(name, document.createElement("br"), desc);
        div.style.left = pos[0] + "px";
        div.style.top = pos[1] + "px";
        document.body.append(div);
    }
    function drawBoxes(boxes, startX, startY, dist = distBetweenNodes, prevAngle, prevBoxNum, lineWidth = 2) {
        let numBoxes = boxes.length;
        ctx.strokeStyle = "black";
        for (let i = 0; i < numBoxes; i++) {
            ctx.lineWidth = lineWidth;
            let angle;
            if (prevAngle !== undefined && prevBoxNum) {
                let angleBetweenPrevBoxes = (2 * Math.PI / prevBoxNum);
                angle = prevAngle - 0.9 * angleBetweenPrevBoxes + (1.8 * angleBetweenPrevBoxes / numBoxes) * i;
            }
            else {
                angle = (2 * Math.PI / numBoxes) * i - Math.PI / numBoxes / 2;
            }
            let pos = [
                Math.cos(angle) * dist + startX,
                Math.sin(angle) * dist + startY
            ];
            ctx.beginPath();
            ctx.moveTo(...centerCoords(startX, startY));
            ctx.lineTo(...centerCoords(...pos));
            ctx.stroke();
            if (!boxes[i].drawn) {
                addDescBox(boxes[i], ...pos);
                boxes[i].drawn = true;
            }
            if (boxes[i]?.children !== undefined) {
                drawBoxes(boxes[i].children, ...pos, distBetweenNodes * 1.35, angle, numBoxes, Math.max(Math.floor(lineWidth * 0.7), 2));
            }
        }
    }
    addDescBox(data[0], 0, 0);
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
    resizeCanvas();
    redraw();
})();
