// Arrays are mutable compared to string as it can changed and can be updated if we change a string like 
// trimming it replace it or concatinating it, It always returns a new string and the older string remain same

let a=    [2,3,5,8,9];
// Index:  0,1,2,3,4
console.log("printing the length of the array a",a.length);
console.log("value at 0th index of array a:",a[0]);
console.log("value at 1st index of array a:",a[1]);
console.log("value at 2nd index of array a:",a[2]);
console.log("value at 3rd index of array a:",a[3]);
console.log("value at 4th index of array a:",a[4]);

// here if want to change an element of array a to check the mutability 
a[0]= 56;
console.log(a[0]);
console.log( "To print the type of array here is the example",typeof a);

// to change the array into string we use to string method
console.log("Example of changing an array to string:",a.toString());

// to print the array in desired for like 1 and 2 and 3 and we use join method this replace the comma with the word you desire to see

console.log("\nusing the join method on the array:",a.join(" and "));

// to pop an element from an array we use pop method on array example given below
console.log("\nExample of popping and pushingin array:")
let b = [4,3,8,5,2];
console.log ("Before poping and pushing the array:",b,b.join(" and "));
console.log("It will return the pop element of array",b.pop());
console.log("It will return the new length of array and will push the new no or string",b.push(300));
console.log("after popping and pushing in the array is ",b);
console.log("\nusing the shift method it will shift the first element of array of length :",b.shift(4));
console.log("After shifting array will look like :",b);
//to add in the begining of the array we use unshift method
console.log("using unshift method:",b.unshift(45));
console.log("After unshifting array will look like :",b);

// to delete an element in array we use delete 
console.log("\nto delete an element from array :",b);
delete b[2]; // now the element and index 2 will be deleted
console.log(b);
// now if we try to print deleted element it will print undefined
console.log(b[2]);

// Example of concatination method on array it will not change the existing array 
console.log("concationation of a and b array:",a.concat(b));


// Splice method on array: it is used to remove the desired indexed element from array
let no= [1,2,3,4,5,6];
console.log("The new declared array:",no);
// no.splice(2,2); //first argument will take from where you want to splice and 2nd arg will take how many you
                // want to splice and you can also add element in place of spliced element by giving them
                // as next arguments
console.log(no.splice(2,3,45,67));
console.log("After splicing the element of index 2 and 3:",no);
no[4];

// use of slice method : it is use to slice the array according to the arguments provided Example
 let arr=[33,55,77,88,55];
 console.log("\n using the slice method before slicing the array is :",arr);
//  console.log("after slicing the array is :",arr.slice(2)); //this args say slicing begin from 
                                                              // this index to end            
 console.log("after slicing the array is :",arr.slice(1,4));// the first arg say the index from where the 
                                                            //slicing begin and 2nd will say to where it will end not includen the mentioned index

// to reverse the array we us reverse method