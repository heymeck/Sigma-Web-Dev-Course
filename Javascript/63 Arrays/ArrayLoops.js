console.log("hello world")
let a=[134,65,43,221,87];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}

a.forEach((value,index,array)=>{
    console.log(value,index,array) // arrow function to print the value index and array.
});

//Example of for in loop uses on object
let obj = {
    a : 1,
    b: 2,
    c:3
}

for (const key in obj   ) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key,element);
    }
}

// Example of for of loop uses for array and strings

let arr= [5,2,6,9];
for (const iterator of arr) {
    console.log("Example of for of loop ",iterator);
}
console.log("length of arr:",arr.length)

// Example of map in js

// let arrnew=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     arrnew.push(element+1);   
// }
// console.log(arrnew);

// map is used to create new array from old array
let arrnew = arr.map(element => {
    return element**2;
});
console.log(arrnew);

// Use of fiter in array

let smallerthan25=(e)=>{ //this is an arrow function and it is diffrent from for each loop
    if (e<=25) {
        return true;
    }
    return false;
}


console.log(arrnew.filter(smallerthan25));
let arr2=[1,2,3,4,5];
// reduce function it will do what you want from element of array example from above array
// if you want to add it will first add 0 and 1st element and the 2nd elemnet and than third 
// example 1+2 = 3 than 3+ 4= 7 than 7+ 5 = 12 and will go on until the array ends

const red = (a,b)=>{  // here i have created an arrow function stored in variable red
    return a*b;
}
console.log(arr2.reduce(red))// here the parameter will be sent to the red function from arr2 and reduce 
                                // function will do his job as mentioned aboves