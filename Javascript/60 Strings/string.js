console.log("This is string understanding file");
let a="Hemant";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length);
let name = "Hemant";
let friend_name = "Arvind";
console.log("My name is " +name +" and my friend name is " +friend_name); // so this is native type of printing a string
console.log(`My name is ${name} and my friend name is ${friend_name}`); // this is the template literal use when we have so many variables
                                                                        //  and to make it easy to print without writin + and , in lines 
                                                                        // it is declared by apostrophe (``)in the brackets
// Escape sequence characters                                                              
// are basically \n character like it was in c programming language which i learned earlier

// Letter case change
console.log(a.toUpperCase());
console.log(a.toLowerCase()); // to run a function on a variable we use () with name of function like  e.g func()
console.log(a.length); // to know the property of a variable we write .property_name like e.g. a.length

// Slicing a string

console.log(a.slice(1,4)); // it will slice the name Hemant accordint to the indexation, indexation start from 0 in this case ema will
                           // print
console.log(2);            // it will start slicing the string from index 2 and go to end of string as there is no othe argument

// Replace in a string
console.log(a.replace("em","55")); // it will replace only fir occurence of the string exaple given below
let demo = "Hemant_kumar"
/*now if we replace ma with it will only change the first or the startin ma in Hemant and will not change ma in kumar */
console.log(demo.replace("ma","66"));

// Concatination of strings
console.log(demo.concat(a));
console.log(a,"Aishwariya"); // we can concatinate by directy giving string as an argument but in this we will not use . instead we use ,
console.log(a+"katrina "+"anushka"); // we can also concatinate using + operator

/* Strings are immutable means that we have performed many things on a carrying string "Hemant" we performed replace we performed 
    concationate, slicing but string will be the same which we declared intially if we try to print it now it will still print "Hemant" */

 console.log(a);
 
 // trim() is a function that is used to remove white spaces in strings