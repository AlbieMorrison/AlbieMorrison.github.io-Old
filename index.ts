(() => {
    type Position = [number, number];

    type DataBox = {
        name: string;
        desc?: string;
        pos?: Position;
        angle?: number;
        children?: DataBox[];
        drawn?: boolean;
        path?: string;
    };

    const data: DataBox[] = [
        {
            name: "Albie Morrison",
            desc: "Me",
            path: "/index.html",
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
                    children: [
                        {
                            name: "LOGIC",
                            desc: "Many of my best friends are from LOGIC Speech and Debate club.",
                            path: "https://www.homeschool-life.com/1298/"
                        }
                    ]
                },
                {
                    name: "Projects/Hobbies",
                    desc: "Stuff I like doing.",
                },
                {
                    name: "Art",
                    desc: "Even a nerdy guy can express through art!",
                    children: [
                        {
                            name: "Music",
                            desc: "The musical/performing arts are some of my personal favorites."
                        },
                        {
                            name: "Origami",
                            desc: "Folding paper",
                            children: [

                            ]
                        },
                        {
                            name: "Origami",
                            desc: "Folding paper",
                            children: [

                            ]
                        }
                    ]
                }
            ]
        }
    ];
    const distBetweenNodes = 200;

    let canvas: HTMLCanvasElement = document.getElementById("main_canvas") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    var halfX = canvas.width / 2;
    var halfY = canvas.height / 2;
    var mouseX: number = halfX,
        mouseY: number = halfY;
    var startMovement = false;

    function centerCoords(x: number, y: number): Position {
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
        drawBoxes(data[0]?.children!, 0, 0, undefined, undefined, undefined, 5);
        let xOffset = mouseX - canvas.width / 2;
        let yOffset = mouseY - canvas.height / 2;
        let curMouseDist = Math.hypot(xOffset, yOffset);
        let moveSpeed = Math.min(Math.max((curMouseDist - 100) / 90, 0), 3.25);
        let moveDir = Math.atan2(yOffset, xOffset);

        let curDist = Math.hypot(canvas.width / 2 - halfX, canvas.height / 2 - halfY);
        let dx = -Math.cos(moveDir) * moveSpeed;
        let dy = -Math.sin(moveDir) * moveSpeed;
        let afterDist = Math.hypot(canvas.width / 2 - halfX - dx, canvas.height / 2 - halfY - dy);
        if (afterDist < curDist) {
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        } else if (afterDist < 300) {
            let scale = (1.1 - afterDist / 300);
            dx *= scale;
            dy *= scale;
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
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
        mouseX = halfX;
        mouseY = halfY;
        startMovement = false;
        (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
            el.style.left = (Number(el.style.left.slice(0, -2)) + halfX - oldHalfX) + "px";
            el.style.top = (Number(el.style.top.slice(0, -2)) + halfY - oldHalfY) + "px";
        });
    }

    function mouseMove(e: MouseEvent) {
        if (startMovement) {
            mouseX = e.x;
            mouseY = e.y;
        } else {
            if (Math.hypot(canvas.width / 2 - e.x, canvas.height / 2 - e.y) < 300) {
                startMovement = true;
            }
        }
    }

    function expandDescBox(div: HTMLDivElement) {
        window.removeEventListener("mousemove", mouseMove);
        mouseX = canvas.width / 2;
        mouseY = canvas.height / 2;
        div.style.zIndex = "15";
        div.querySelector("span.name")?.classList.remove("collapsed");
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "inline-block";
    }

    function collapseDescBox(div: HTMLDivElement) {
        window.addEventListener("mousemove", mouseMove);
        div.style.zIndex = "unset";
        div.querySelector("span.name")?.classList.add("collapsed");
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "none";
    }

    function addDescBox(box: DataBox, x: number, y: number) {
        let div = document.createElement("div");
        let pos: Position = centerCoords(x, y);
        div.classList.add("box");
        div.onmouseenter = () => {
            expandDescBox(div);
        };
        div.onmouseleave = () => {
            collapseDescBox(div);
        }
        let name = document.createElement("span");
        name.classList.add("name", "collapsed");
        name.innerText = box.name;
        let desc = document.createElement("span");
        desc.classList.add("desc");
        desc.innerHTML = box?.desc ?? "";
        if (box.path !== undefined) {
            let a = document.createElement("a");
            a.href = box.path.startsWith("/")
                ? window.location.href.substring(0, window.location.href.lastIndexOf("/")) + box.path
                : box.path;
            a.target = box.path.startsWith("/")
                ? "_self"
                : "_blank";
            let tip = document.createElement("span");
            tip.classList.add("tip");
            tip.innerText = "Click for more information";
            desc.append(document.createElement("br"), tip);
            a.append(name, document.createElement("br"), desc);
            div.append(a);
        } else {
            div.append(name, document.createElement("br"), desc);
        }
        div.style.left = pos[0] + "px";
        div.style.top = pos[1] + "px";
        document.body.append(div);
    }

    function drawBoxes(boxes: DataBox[], startX: number, startY: number,
        dist: number = distBetweenNodes, prevAngle?: number, prevBoxNum?: number,
        lineWidth: number = 2) {
        let numBoxes = boxes.length;
        ctx.strokeStyle = "black";
        for (let i = 0; i < numBoxes; i++) {
            ctx.lineWidth = lineWidth;
            let angle: number;
            if (prevAngle !== undefined && prevBoxNum) {
                let angleBetweenPrevBoxes = (2 * Math.PI / prevBoxNum);
                angle = numBoxes > 1
                    ? prevAngle - 0.8 * angleBetweenPrevBoxes + (1.6 * angleBetweenPrevBoxes / (numBoxes - 1)) * i
                    : prevAngle - (boxes[i].name.length % 2 == 0 ? 0.25 : -0.25);
                angle += ((boxes[i > 0 ? i - 1 : numBoxes - 1]?.children?.length || 0) - (boxes[(i + 1) % numBoxes]?.children?.length || 0)) * 0.1;
            } else {
                angle = (2 * Math.PI / numBoxes) * i - Math.PI / numBoxes / 2;
            }
            let pos: Position = [
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
                drawBoxes(boxes[i].children!, ...pos, distBetweenNodes * 1.2, angle, numBoxes, Math.max(Math.floor(lineWidth * 0.9), 2));
            }
        }
    }

    addDescBox(data[0], 0, 0);
    window.onresize = resizeCanvas;
    window.addEventListener("mousemove", mouseMove);
    resizeCanvas();
    redraw();
})();
