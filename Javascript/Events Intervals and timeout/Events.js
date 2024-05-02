console.log("hello world");
let e;
// List of mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
let button=document.querySelector(".btn");
function func(){
    console.log(e);
    document.querySelector(".box").innerHTML="<b>Hey you changed me</b> ☹️"
    }
button.addEventListener("click",func); // add event listener take event and first arg and the function should be performed after event as 
                                        //second arg you can directly give an arrow function as well like below

button.addEventListener("mouseup",(e)=>{
    console.log(e);
    document.querySelector(".box").innerHTML="I am changed by mouseup";// the mouseup event is when you double click the mouse anywhere
                                                                       // and release it on the button
})
button.addEventListener("mousedown",(e)=>{
    console.log(e);
    document.querySelector(".box").innerHTML="I am changed by mousedown";//the mouse down event is when you click the mouse form the  
                                                                         // button and release it anywhere opposite to mouse up
})
button.addEventListener("dblclick",(e)=>{
    console.log(e);
    document.querySelector(".box").innerHTML="I am changed by double click";//the mouse down event is when you double click the mouse
                                                                            // button and release it
})

button.addEventListener("contextmenu",(e)=>{
    console.log(e);
    alert("dont hack us by right clicking on the button")  // it occurs when you right click on the button or the location desired
})

//        Keyboard Events

document.body.addEventListener("keydown",(e)=>{
    console.log(e);
    document.querySelector(".box").innerHTML="<b>key is pressed</b>"
})
button.addEventListener("keyup",(e)=>{
    console.log(e ,e.key,e.keyCode);
    document.querySelector(".box").innerHTML="<b> G is released</b>"
})

// as we can use addeventlistener we can also use remove event listener to remove and evnet  the synatax is same as addeventlistener 
// and takes the same arg and parameter which is an event and a function

button.removeEventListener("keyup",(e)=>{
    console.log(e ,e.key);
    document.querySelector(".box").innerHTML="<b> r is released</b>"
})
