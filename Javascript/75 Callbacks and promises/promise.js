console.log('This is promises');


// A callback function inside a callback function can lead to callback Hell or Pyramid of doom, it might happen that the function you are passing as call back function is also taking a callback function and that callback function is also taking a callback function as and arguement.

// promises in javascript

// The solution of callback hell or pyramid of doom is promises. A promise is a promise of code execution, in this case either the code is executed or fails in both the cases the user will be notified.
// let c= "girlfriend"
let promi = new Promise((resolve,reject)=>{
    let rand=Math.floor(Math.random()*10);
    if(rand<5){
        reject("Error");
    }else{
        console.log('Yes I am done');
        resolve("i am resolved");// the value inside the () will be passed to then its on you what you want to add in it 
    }
});

promi.then((a)=>{   // then is used to console the resoved result as desired
    console.log(a); // here is the same value taken by then as parameter from the promise resolve`s argument
}).catch((a)=>{
    console.log(a); // here is the same value taken by then as parameter from the promise reject`s argument
})
