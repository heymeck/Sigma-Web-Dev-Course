/* 
Create a Buisness name generator by combining list of adjectives, shop name and another word

Adjectives
    Crazy
    Amazing
    Fire

Shop Name
    Engine
    Food
    Garments

Another word
    Bros
    Limited
    Hub
*/

let Adjectives ={
    1:"Amazing",
    2:"Crazy",
    3:"Fire"
}
let shop_name ={
    1:"Engine",
    2:"Food",
    3:"Garments"
}
let other_word ={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
var first,second,third;
for (const key in Adjectives) {
    a=Math.random()*3;
    console.log(a);
    if (a<=1) {
        first=Adjectives[1];
    }else if(a>1 && a<=2){
        first=Adjectives[2];
    }else if(a>2 && a<=3){
        first=Adjectives[3];
    }
}
for (const key in shop_name){
    a=Math.random()*3;
    if (a<=1) {
        second=shop_name[1];
    }else if(a>1 && a<=2){
        second=shop_name[2];
    }else if(a>2 && a<=3){
        second=shop_name[3];
    }
}
for (const key in other_word) {
    a=Math.random()*3;
    if (a<=1) {
        third=other_word[1];
    }else if(a>1 && a<=2){
        third=other_word[2];
    }else if(a>2 && a<=3){
        third=other_word[3];
    }
}
console.log("Your shop name will be: ",first +second +third);
