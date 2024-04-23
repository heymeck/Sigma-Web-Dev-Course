console.log("heloo duniya")
let bgcolor=document.querySelector(".container").children;
// console.log(bgcolor);

     var getrandomcolor=()=>{
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        return `rgb(${r},${g},${b})`
    }


Array.from(bgcolor).forEach(e=>{    // this line array.from() will create an array from the html colllection navigated using DOM
    e.style.backgroundColor=getrandomcolor();
    e.style.color=getrandomcolor();
});
