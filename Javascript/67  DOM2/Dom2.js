console.log("hello world\n");
let a=document.body.childNodes[1];
        console.log(a);
let b=document.body.childNodes[1].childNodes[1];
console.log(b);
let c= document.body.childNodes[1].childNodes[1];
console.log("It will trigger box1",c);
let children= document.body.firstElementChild.children; // children gives only the children element of html doc not the comment and text
console.log(children);
// to find the next sibiling element we do this 

let sibilig=document.body.firstElementChild.children[1].nextElementSibling;
console.log("It will point towards box 3",sibilig); // it will point towards box 3

let table=document.body.children[2];
console.log("table will print:",table);