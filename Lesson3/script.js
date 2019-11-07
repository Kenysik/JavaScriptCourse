/*function showFirstMessage(text) {
    alert(text);
    let num = 20;
}

showFirstMessage("Some text");*/


/*let calc = function (a, b){
    return (a + b);
}*/

let calc = (a,b) => a+b

console.log (calc(3,4));
console.log (calc(7,4));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();