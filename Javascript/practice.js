// doubts about redeclaration of variables
// we cannot redeclare let but we can redeclare var variable


let a =5;
console.log(a);
a= 56;
console.log(a);
var b=76;
console.log(b);
var b=45;
console.log(b);

// factorial finder using reduce
let fac=7;
arr=[];
if(fac==0 || fac==1){
    // console.log("1");
    return 0;
}
else{
for (let index = 1; index <= fac; index++) {
    arr.push(index);
}
console.log(arr);
factorial=(a,b) =>{
    return a*b;
}}
console.log(arr.reduce(factorial));


