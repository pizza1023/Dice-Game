var rn1 = Math.floor((Math.random())*6) + 1;
var img1 = "dice" + rn1 + ".png";
var imgsrc1 = document.querySelectorAll("img")[0];
imgsrc1.setAttribute("src", img1);

var rn2 = Math.floor((Math.random())*6) + 1;
var img2 = "dice" + rn2 + ".png";
var imgsrc2 = document.querySelectorAll("img")[1];
imgsrc2.setAttribute("src", img2);

if (rn1 > rn2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
} else if (rn1 < rn2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h2").innerHTML = "Draw!"
}