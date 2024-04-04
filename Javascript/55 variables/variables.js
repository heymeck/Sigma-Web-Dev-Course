console.log("Hey this is tutorial 55 of Js");
console.log("this is another line of code");
let a = 5;
var b = 5;
var c = "Hemant";
console.log(a + b + c);
console.log(typeof a, typeof b, typeof c);

// var in js is a global scoped variable
// let is local or blocked scope variable in js
// const variable is constant and cannot be changed once u assigned the value

{
  let a = 56;
  var b = 45;
  console.log(" the value of let after change inside block", a);
  console.log(" the value of var inside block", b);
}
console.log("the value of let outside that block ", a); // here the value in the first will be printed even if we changed it in block
console.log(
  "Here the value of var is changed when we changed it in block scope",
  b
);
const Hem = 56;
// Hem=Hem+3;           // this line will not be allowed and it will throw an error in console

//  Primitive data type
let p = null;
let q = "hemant";
const r = true;
let s = 45;
let t = 4.5;
let u = undefined;
console.log(p, q, r, s, t, u);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u);

// how to create object in JS
let o = {
  name: "Hemant",
  " job role": "frontend devoloper",
  salary: 45000,
};
console.log(o);
o.salary = 55000;
console.log(o);

//  Quick question

{
    //  Quick question 1
    let name = "Hemant";
    let roll_no = 45;

    console.log(name + roll_no);

    // Quick question 2
    console.log(typeof name)
    // Quick question 5
     let dictionary= {
        "love": "affection, attraction ",
        traitor: " betray, "
     }
     console.log(dictionary);

}
