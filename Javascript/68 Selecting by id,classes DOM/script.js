console.log("Hemant");
let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="red"
// document.body.getElementById("ID").style.backgroundColor="green"
// Correct usage
const btn = document.getElementById('ID').style.backgroundColor="green";
console.log(btn); // This will log the button element with the ID 'btn'
// document.getElementById("ro").style.backgroundColor="violet";
document.querySelector("#ro").style.backgroundColor="purple"

// making the container flex using dom manipulation
let flex= document.getElementById("ru").style.display="flex";
// flex.style.display="flex";
console.log(flex);

// matches is used to see if the css selector matches to the Selector of the tag

console.log(boxes[2].matches(".box"));

// closest to look for the nearest matches ancestor to the given css selector works only on ancestor and parents element
boxes[2].closest("box");

// contains :- return true if element b is inside element a and if element a is element b 

let a=document.querySelector(".container").contains(document.querySelector("#ro"));
console.log(a); // it will return true as it contains an element with selector id ro


