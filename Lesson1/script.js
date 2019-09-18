'use strict';

console.log(leftBorderWidth);
var leftBorderWidth = 1;


let second = 2;
console.log(second);

{
    let third = 3;
}
//console.log(third);

const pi = 3.14;

//Numbers:
var number = 5;
//console.log(4/0); //=> Infinity
//console.log('string'*9); //=> NaN (Not a number)

//Strings:
var string = "Hello!";
var sym = Symbol(); //new

var boolean = true;

null; //Such object doesn't exist
//console.log(something); //=> error in console "something isn't defined"

undefined; //Object exists but without value
let somethingmore;
console.log(somethingmore); //=> undefined
var obj = {};

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name); //=> John
console.log(person["name"]); //=> John

let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr[2]); //=>apple.bmp
console.log(arr[0]); //=> plum.png

//alert("Hello world!");

let answer = confirm("Are you here?");
console.log(answer);
console.log(typeof (answer));

//let answer = prompt("Are you 18?", "Yes"); // answer will be always string
//console.log(typeof (answer));

console.log("arr" + " - object"); //=> arr - object
console.log(4 + " - object"); //=> 4 + object
console.log(4 + +" - object"); //=> NaN
console.log(4 + +"4"); //=> NaN

let incr = 10,
    decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);

