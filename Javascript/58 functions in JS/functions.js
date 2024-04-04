console.log("Hello world");
function name(name) {
    console.log("Hii my name is "+name+"");
    console.log(""+name+" is a good programmer");
    console.log(""+name+" is learning web devolopment");
    console.log(""+name+" is learning from code with harry");
    
}
function sum( a , b,c=1) { // here c is default parameter if user give 3rd value it will change
    console.log(a+b+c);
    return a+b+c;
    
}
 result=sum(4,5);
name("Arvind");
sum(5,"Five");
console.log("the return of the sum is ",result);

sum(5,6,3);

// new learning is the arrow function in this we can store a function in a variable like below

let=func1=(x)=>{
    console.log("The parameter here is x",x);
}
func1(56);