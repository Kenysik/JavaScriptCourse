let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

/*
btn[0].onclick = function(){
    alert('You pressed the 1st button');
};

btn[0].onclick = function(){
    alert('You pressed the 1st button AGAIN');
};*/

btn[0].addEventListener('click', function(event){
    //alert('You pressed the 1st button');gh
    //console.log(event);
    //let target = event.target;
    //target.style.display = 'none';
    console.log("Some event happened: " + event.type + " on element " + event.target);
});

wrap.addEventListener('click', function (event) {
    console.log("Some event happened: " + event.type + " on element " + event.target);
});

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Some event happened: " + event.type + " on element " + event.target);
});

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log("Out from buttom!");
    })
});
/*
btn[0].addEventListener('click', function(){
    alert('You pressed the 1st button AGAIN');
});

btn[0].addEventListener('mouseenter', function(){
    alert('You moved mouse over the button 1');
});*/
