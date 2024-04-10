console.log("Hello world");
// Types of loops in JS
// 1. for loop
let a=1;
for (let i = 0; i < 10; i++) {
    console.log(a+i);
    
}
// 2. for-in loop :- it is used on object to find the constant values or the keys in object example given  below

let obj={
    "name":"Hemant",
    "age":25,
    role:"programmer",
    company:"Google Yahoo"
}
console.log("Use of for in loop");
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
           
}

// 3. for-of loop :- it is used as an iterator of a data structure like an array or a string.

console.log("Use of for-of loop is here\n")
for (const iterator of "Hemant") {
    console.log(iterator);
    
}
console.log("\n")

//  4. while loop :- it is used

let i=0;
console.log("Use of while loop is here\n")
while (i<6) {
    console.log(i);
    i++;
    
}

//  5. do- while loop :- it is used when we to run the loop atleast once.
let j=6;
console.log("use of do while loop is here");
do {
    console.log(j);
    j++;   
} while (j<6);