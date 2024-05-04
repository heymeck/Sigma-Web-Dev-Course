// first understand about the asynchronus nature of javascript, js does not execute the progrom
// line to line for some methods or function it postpone the execution to the end of the script the best example of this is the setIntervals and setTimeout, js execute all the line of the program and postpone the execution of these two methods at the end of the script not caring about the interval time. These two function will execute after script according to their time 

// Example of Asynchronous nature of the js 

console.log("Hemant is a good boy") //  this line will execute first
console.log("Arvind is not a good boy")// this line will execute 2nd

setTimeout(()=>{
    console.log("I am set timeout function and will get executed at last")    // you may think it will execute 3rd but due to asynchrouns 
                                                                            // nature it will get postponed till the end of script
},3000)
console.log("I will get printed third")
console.log("I will get printed fourth")


// A callback function is a function passed to the another function as parameter/argument  which is then invoked of called inside that function;

// Example of callback

// here we created a callback function named callback to  pass into another function which takes an arguemnet
const callback=(arg)=>{
    console.log(arg);
    
}

// here we created a loadscript function  it takes two arguement one is the source of the script and other is the callback function. This function simply creates a script inside the head and takes its source from the arguement and  after that it add source in the script and on onload of the script in the browser sit calls the callback function
const loadscript=(src,callback)=>{
    let sc=document.createElement("script");
    document.head.append(sc);
    sc.src=src;
    sc.onload=callback("Hemant")
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
