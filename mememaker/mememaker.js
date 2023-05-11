const saveBtn = document.getElementById("save")
const textInput = document.getElementById("text")
const fileInput = document.getElementById("file")
const eraseBtn = document.getElementById('eraser-btn');
const destroyBtn = document.getElementById('destroy-btn');
const modeBtn = document.getElementById('mode-btn');
const colorOptions = document.querySelectorAll(".color-option");
const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const ctx = canvas.getContext("2d")


canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
ctx.lineCap="round"//bruch끝 style
let isPaingting = false;
let isFilling = false;

function onMove(event){
    if(isPaingting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
            return;
    }
    
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPaingting(event){
    isPaingting = true;
    
}

function stopPainting(event){
    isPaingting = false;
    ctx.beginPath();
    //fill 도형
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
    console.log(event.target.value)
}

function onColorChange(event){ //html에서 제공해준 color parret
    ctx.strokeStyle = event.target.value;
    ctx.filleStyle = event.target.value;

}

function onColorClick(event){//자체 컬러 파레트
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill"
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800)
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,800,800)
}

function onEraserClick(){
    ctx.strokeStyle = "white"
    isFilling = false;
    modeBtn.innerHTML = "Fill"
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file)
    //console.log(url) -> 브라우저를 위한 url, 자신의 메모리에 있는 파일을 브라우저가 우리에게 보여주는 방식
    const image = new Image()
    image.src = url
    image.onload = function(){
        ctx.drawImage(image, 0, 0)
    }
}

function onDoubleClick(event){
    const text = textInput.value;

    if(text !== ""){
    ctx.save(); //save 현재 정보
    
    ctx.lineWidth = 1;
    ctx.font="48px serif"
    ctx.strokeText(text, event.offsetX, event.offsetY)
    //ctx.fillText(text, event.offsetX, event.offsetY)
    ctx.restore() // 저장했던 현재정보 가져옴
    }

    
}

function onSave(event){
    const url = canvas.toDataURL();
    const a = document.createElement("a")
    a.href = url;
    a.download = "myDrawing.png"
    a.click();

};


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove",onMove)
canvas.addEventListener("mousedown",startPaingting)
canvas.addEventListener("mouseup",stopPainting)
canvas.addEventListener("mouseleave",stopPainting)

canvas.addEventListener("click",onCanvasClick)

lineWidth.addEventListener("change",onLineWidthChange)
color.addEventListener("change", onColorChange)


colorOptions.forEach(color => color.addEventListener("click",onColorClick))

modeBtn.addEventListener("click", onModeClick)

destroyBtn.addEventListener("click", onDestroyClick)
eraseBtn.addEventListener("click", onEraserClick)
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSave);

//폰트 사이즈, 폰트 컬러, 폰트 바꾸기, 폰트를 채우거나 안채우는 fill or stroke 옵션
//그림 그리고 채울수있게