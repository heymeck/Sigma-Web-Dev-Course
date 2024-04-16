// Factorial finding of a no;
// let n=6;
// var temp=n;
// if(n==0 || n==1){
//     console.log(1);
// }else {
//     for (var index = n-1; index >= 1; index--) {
//         var temp = temp*index;
//     }
//     console.log(temp);
// }

// using reduce method
let a=[];
let m=5;
console.log(a.length)
for (let index = 0,i=1; index < m; index++,i++) {
    a.push(i)  
}
console.log(a,a.length)
const fac=(a,b)=>{
    return a*b;
}
console.log(a.reduce(fac));