// learning fon in loop which is used for objects
let ob={
    name:"Hemant",
    age:34,
    role:"programmer"
 }
 //printing the object
 console.log('The object is',ob)
 // to access any obejct`s key`s value we use ob.key of the object example given below
 console.log('\nto access any obejct`s key`s value we use ob.key of the object example given below',ob.age)
 

 // to navigate the keys in an object 
 console.log('\nTo print the key of the object')
 for (const key in ob){
    console.log(key);
 }

 // to print the value of every key in object
 console.log('\nto print the value of every key in object\n')
 for(const key in ob){
    // we can do this 

    // const element = ob[key];
    // console.log(element)

    // or either this
    console.log(ob[key]);
}
console.log('\n')
//it is the short hand of key and its value printed in one line of code
 console.log('it is the short hand of key and its value printed in one line of code\n')
 for (const key in ob) {
    console.log(key,ob[key])
 }