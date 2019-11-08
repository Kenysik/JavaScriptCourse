/*let obj = new Object();
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
  border: "black",
  bg: "red"
};

delete options.bool; //delete field in object
console.log(options);

for (let key in options){
    console.log("Field "  + key + " has value " + options[key]);
}

console.log(Object.keys(options).length);*/

//-------------------------------------------------------------------------
/*let arr = [1, 2, 3, 4, 5];
arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");


for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);


let arr1 = ["first", 2, 3, "four", "last"];
arr1.forEach(function(item, i, mass){
    console.log(i+ ": " + item + " (array: ) " + mass + ")");
})

let mass = [1,3,4,6,7];

for(let key in mass){
    console.log(key);
}

for(let key of mass){
    console.log(key);
}*/

//----------------------------------------

/*let ans = prompt("", ""),
    arr2 = [];

arr2 = ans.split(",");
console.log(arr2);*/

/*
let arr3 = ["ddd", "rrrr", "333", "555"],
    i = arr3.join(", ");
console.log(i);*/


/*let arr3 = ["ddd", "rrrr", "333", "555"],
    i = arr3.sort();
console.log(i);

let arr4 = [4, 15, 1],
    j = arr4.sort(compareNum);
function compareNum(a, b){
    return a-b;
}*/
//=======================================OOP======================
let soldier = {
    health: 400,
    armor: 100
};

let john ={
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);