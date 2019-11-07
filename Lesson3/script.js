/*function showFirstMessage(text) {
    alert(text);
    let num = 20;
}

showFirstMessage("Some text");*/


/*let calc = function (a, b){
    return (a + b);
}*/

/*let calc = (a,b) => a+b

console.log (calc(3,4));
console.log (calc(7,4));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();*/
/*
function first(){
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();*/

function learnJS(lang, callback){
    console.log("I'm learning " + lang);
    callback();
}

function done(){
    console.log("I've done the third lesson!");
}

learnJS("JavaScript", done)