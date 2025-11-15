console.log("script.js is installing")
let boxes = document.querySelectorAll(".box");

function getRandomColor(){
    let randomColorR = Math.floor(Math.random() * 255);
    let randomColorG = Math.floor(Math.random() * 255);
    let randomColorB = Math.floor(Math.random() * 255);
    const rgbColor = `rgb(${randomColorR},${randomColorG},${randomColorB})`;
    return rgbColor;
   

}
setInterval(() => {
    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
    })
}, 300);



