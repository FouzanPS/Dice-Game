
var randomNumber1 = Math.random()*6+1;
var ran1 = Math.floor(randomNumber1);
console.log(ran1);

if(ran1===1){
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}
else if(ran1===2){
    document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}
else if(ran1===3){
    document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}
else if(ran1===4){
    document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}
else if(ran1===5){
    document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}
else if(ran1===6){
    document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
}


var randomNumber2 = Math.random()*6+1;
var ran2 = Math.floor(randomNumber2);
console.log(ran2);

if(ran2===1){
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}
else if(ran2===2){
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}
else if(ran2===3){
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}
else if(ran2===4){
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}
else if(ran2===5){
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}
else if(ran2===6){
    document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
}

if(ran1>ran2){
    document.querySelector("h1").innerHTML="🏆 Winner";
}
else if(ran2>ran1){
    document.querySelector("h1").innerHTML="Winner 🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}