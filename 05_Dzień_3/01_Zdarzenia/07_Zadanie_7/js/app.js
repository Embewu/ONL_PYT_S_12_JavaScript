
//dokonczyc

const globalX = document.querySelector("#globalX");
const globalY = document.querySelector("#globalY");
const globalX = document.querySelector("#localX");
const globalY = document.querySelector("#localY");
const box = document.querySelector("box");


box.addEventListener(type: 'mousemove'),function ("mosemove", function(event) {
    globalX.innerText = event.screenX + 'px';
    globalY.innerText = event.screenY + 'px';

    localX.innerTExt = event.offsetX + 'px';
    localY.innerText = event.offsetY + 'px';

})