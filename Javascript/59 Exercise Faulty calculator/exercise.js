let a= Math.random();
console.log(a);
console.log("hello world");
console.log("This is your calculator");
let n1=prompt("Enter your first no ");
console.log(n1);
let op = prompt("Enter Your operation to be performed ");
let n2 = prompt("Enter your second no");
let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
if (a>.1) {
    alert(`The result is ${eval(`${n1} ${op} ${n2}`)}`);
}else{
    // perform wrong calculation
    op=obj[op];
    alert(`The result is ${eval(`${n1} ${op} ${n2}`)}`);
}

