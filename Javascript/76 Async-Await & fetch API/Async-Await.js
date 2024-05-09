/*
    Async-Await is used when we fetch data from other place the next line of code is dependent on the value of that data but due to the ascynchronous nature of the js it throw the data function in the background and run the other line of codes without waiting for that function, that`s why we use Async-Await. 

    Althoug there is another approach as well  by using promises, below we will see both of the approaches.
*/

// Promise approach

// creating function which will fetch the data from the server

// function getdata() {
//   setTimeout((e) => {
//     // console.log("getdata func to fetch data it will run late because of asynchronus nature");
//   }, 4000);
// }
// console.log("here is some random code to load the module of any package");
// console.log("here is some random code to load the module of any package");

// fetch = getdata(); // here we have called the data but due to the time it will take to fetch data js will throw it in background and run the
// // next line

// console.log(fetch);
// console.log(" getdata this line will run without waiting for the data");




// to counter the problem above we can either return a promise in the function or we can use async await

// let sum=(a,b)=>{
//     return a+b;
// }

// function Getdata() {
//   return new Promise((resolve, reject) => { // this is promise of fulfilling data
//     setTimeout((e) => {
//      resolve(sum(45,5)); // this line is fetching data from other function
//     },3000);
//   });
// }
// Fetch = Getdata();

// console.log("here is some random code in promise approach of Async-Await alternative");

// console.log(Fetch); // if we directly call the function it will not wait for the data and throw the function in background and execute
// // next line we have to catch the promise first

// Fetch.then((v) => { // lines in this will wait for data to be fetched when the promis is resloved and the execute the lines of code
//   console.log(v);
//   console.log('data + 5=',v)
//   console.log("I will wait for the data and will only run if the promise is fulfille or rejected");
//   console.log('this is process data ')

// });

// console.log('This will run even if the the data is not fectch because it has no work of data and it is not inside then of promise')



// Async-Await is the new way to wait for the data to be process

// in this we create am async function which fetch data from the source
// async function GETDATA(){
//     return new Promise((resolve,reject)=>{
//                     setTimeout((e) => {
//                         resolve('Async-Await');
//                     }, 3000);
//     })
// }
// async function main(){  // we have wrap this whole code because await function can only be used in an Async function so we wrap this 
//                         // in a main function and then call it at last
//     console.log('Hii this is the first line of async-await func and will exectue')
//     console.log('Hii this is the second line of async-await func and will exectue')
//     console.log('Hii this is the third line of async-await func and will exectue')
// let FETCH= await GETDATA();  // here we used await it means the further code will wait for the data to be fetched
// console.log(FETCH); // fetch here is variable which holds te get data function;
// console.log('Hii')
// }
// main();
// console.log('Jai shree ram')


// Fetching API in js

async function api(){
    // fetch takes to promises one is to fetch the data from the server and second is to parse it to json or text format
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch is here basically a promise which is later resolved by   then
    // .then(response => response.json())
    // .then(json => console.log(json))
    let data = await x.json();
    console.log(data);
    return 455;
}

async function main2(){
    console.log('Hii this is the first line of async-await func and will exectue')
    console.log('Hii this is the second line of async-await func and will exectue')
    let fapi= await api();
    console.log('Hii this is the third line of async-await func and will exectue')
}
main2();
// we will go deep in fetch api later