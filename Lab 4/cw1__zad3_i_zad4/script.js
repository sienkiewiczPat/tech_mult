const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.style.background = '#5fdde5';

const div = document.querySelector('div');
div.style.color = '#d92027';

function getPointerPosition(e) {
    let canvasPosition = canvas.getBoundingClientRect();
    let x = e.clientX - canvasPosition.left;
    let y = e.clientY - canvasPosition.top;
    div.innerText = `Pozycja wskaźnika: x:${x},y:${y}`
    console.log(e.clientX - canvasPosition.left);
    console.log(e.clientY - canvasPosition.top);
}

canvas.addEventListener("pointermove", e => {
    const pointer = getPointerPosition(e);

})

canvas.addEventListener("pointerleave", () => {
    div.innerText = `Wskaźnik poza płótnem`;
})
const rect = { a:20, x:10, y:10, dx:1, dy:0 };
function drawRectangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f4ea8e';
    ctx.fillRect(rect.x, rect.y, rect.a, rect.a);
}

window.addEventListener('keydown', (e) => {

    const step = 10;

    switch (e.keyCode) {
        case 38:
            rect.y = ((rect.y - step) < 0) ? rect.y : rect.y - step;
            break;
        case 40:
            rect.y = ((rect.y + step) > (canvas.height - rect.a)) ? rect.y : rect.y + step;
            break;
        case 37:
            rect.x = ((rect.x - step) < 0) ? rect.x : rect.x - step;
            break;
        case 39:
            rect.x = ((rect.x + step) > (canvas.width - rect.a)) ? rect.x : rect.x + step;
            break;
    }
    drawRectangle();
});