// Global Settings / Variables
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Events = Matter.Events,
    BodyM = Matter.Body,
    Vertices = Matter.Vertices;

var engine;
var render;
var runner;
const canvasWidth = window.innerWidth;
const canvasHeigh = 900;
const blockSize = 100;
const mainBallRadius = 100;
const minimumBlockGenerateX = 50;
const minimumBlockGenerateY = 100;
const blockSeparateX = canvasWidth - minimumBlockGenerateX - 50;
const blockSeparateY = canvasHeigh - minimumBlockGenerateY - 100;
const minimumDistanceBetweenBlocks = 60;

function init() {
    engine = Engine.create();
    render = Render.create({
        element: document.getElementById('Li71'),
        engine: engine,
        options: {
            wireframes: false,
            showIds: false,
            background: '#none', //"#bfe9f5"
            width: canvasWidth,
            height: canvasHeigh
        }
    });
    formHiddenWall();
    formMainBall();
    formRandomBlocks(15);

    Render.run(render);
    runner = Runner.create();
}
init();

function reInit() {
    event.preventDefault();
    Engine.clear(engine);
    Render.stop(render);
    Runner.stop(runner);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    init();
}

function formMainBall() {
    const mainBallInitX = canvasWidth / 2;
    const mainBallInitY = 50;

    var mainBall = Bodies.circle(mainBallInitX, mainBallInitY, mainBallRadius, options = {
        restitution: 1,
        render: {
            fillStyle: "#FFFFFF"
        }
    }, 100);
    Composite.add(engine.world, [mainBall]);
}
function formHiddenWall() {
    var wallLeft = Bodies.rectangle(-21, canvasHeigh/2, 40, canvasHeigh, { isStatic: true });
    var wallFloor = Bodies.rectangle(canvasWidth/2, 850, canvasWidth, 30, { isStatic: true });
    var wallRight = Bodies.rectangle(canvasWidth+21, canvasHeigh/2, 40, canvasHeigh, { isStatic: true });
    Composite.add(engine.world, [wallLeft,wallRight,wallFloor]);
}

// function formRandomBlocks(blockCount) {
//     var blockOptions = {
//         render: {
//             fillStyle: "#569cd8",
//         },
//         isStatic: true,
//         angle: getRadiusByDegree(45)
//     };

//     var blockCoordinateList = [];

//     for (var i = 0; i < blockCount; i++) {
//         var blockCoordinate = getRandomCoordinateForBlocks(blockCoordinateList);
//         var block = Bodies.rectangle(blockCoordinate.x, blockCoordinate.y, blockSize, blockSize, blockOptions);
//         blockCoordinateList.push(blockCoordinate);
//         Composite.add(engine.world, [block]);
//     }
// }
// function getRandomCoordinateForBlocks(blockCoordinateList) {
//     var x = minimumBlockGenerateX + blockSeparateX * Math.random();
//     var y = minimumBlockGenerateY + blockSeparateY * Math.random();
//     var fitAll = false;
//     var loopCount = 0;
//     while (!fitAll && loopCount < 1000) {
//         fitAll = true;
//         for (var i in blockCoordinateList) {
//             if (getDistanceWithPoints(blockCoordinateList[i], { x, y }) < minimumDistanceBetweenBlocks) {
//                 x = minimumBlockGenerateX + blockSeparateX * Math.random();
//                 y = minimumBlockGenerateY + blockSeparateY * Math.random();
//                 fitAll = false;
//             }
//         }
//         loopCount++;
//     }
//     return { x, y };
// }
// function getDistanceWithPoints(pointA, pointB) {
//     return Math.sqrt(Math.pow(Math.floor(pointA.x) - Math.floor(pointB.x), 2) + Math.pow(Math.floor(pointA.y) - Math.floor(pointB.y), 2));
// }

function runTheRunner() {
    Runner.run(runner, engine);
}
function stopTheRunner() {
    Runner.stop(runner, engine);
}
function getRadiusByDegree(degree) {
    return Math.PI / 180 * degree;
}