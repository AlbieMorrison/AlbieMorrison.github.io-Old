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
                    children: []
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
                    children: []
                }
            ]
        }
    ];
    const distBetweenNodes = 175;
    let canvas = document.getElementById("main_canvas");
    let ctx = canvas.getContext("2d");
    var halfX = canvas.clientWidth / 2;
    var halfY = canvas.clientHeight / 2;
    function centerCoords(x, y) {
        return [
            Math.round(x + halfX),
            Math.round(y + halfY)
        ];
    }
    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBoxes(data[0]?.children, 0, 0, undefined, undefined, undefined, 5);
    }
    function resizeCanvas() {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        halfX = canvas.width / 2;
        halfY = canvas.height / 2;
        redraw();
    }
    function moveCenter(e) {
        let curDist = Math.hypot(halfX - canvas.width / 2, halfY - canvas.height / 2);
        console.log(curDist);
        let moveScalar = Math.max(0, 400 / (curDist + 1)) / 100;
        let newDist = Math.hypot(halfX - e.movementX - canvas.width / 2, halfY - e.movementY - canvas.height / 2);
        let dx = Math.round(newDist < curDist
            ? -e.movementX
            : -e.movementX * moveScalar);
        let dy = Math.round(newDist < curDist
            ? -e.movementY
            : -e.movementY * moveScalar);
        halfX += dx;
        halfY += dy;
        document.querySelectorAll("div.box").forEach((el) => {
            el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
            el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
        });
        requestAnimationFrame(redraw);
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
    resizeCanvas();
    window.onresize = resizeCanvas;
    window.onmousemove = moveCenter;
})();
