// CHANGING THE COLOR

var color = document.getElementById("firstBtn");
color.addEventListener("click", myButton);

function myButton() {
    document.getElementById("body").style.backgroundColor = "blue";
}

// CHANGING BACKGROUND IMAGE

var image = document.getElementById("secondBtn");
image.addEventListener("click", myImage);

function myImage() {
    document.getElementById("body").style.backgroundImage = 'url(https://www.fotor.com/images2/features/backgrounds-new/Ripples/Ripples_06_A-small-map.jpg)';
} 

// CHANGING HEADING TEXT

var text = document.getElementById("thirdBtn");
text.addEventListener("click", myText);

function myText() {
    document.getElementById('heading').innerHTML = "Faadia Langeveldt | MASONRY LAYOUT";
}

// CHANGING FIRST IMAGE ON HOVER

var hover = document.getElementById("one");
hover.addEventListener("mouseenter", myFirstEnter);
var hover = document.getElementById("one");
hover.addEventListener("mouseout", myFirstOut);

function myFirstEnter() {
    document.getElementById("one").src = "images/hoverImg.jpg";
}
function myFirstOut() {
    document.getElementById("one").src = "images/cherry-plant.jpg";
}

// CHANGING SECOND IMAGE ON HOVER

var hover = document.getElementById("two");
hover.addEventListener("mouseenter", mySecondEnter);
var hover = document.getElementById("two");
hover.addEventListener("mouseout", mySecondOut);

function mySecondEnter() {
    document.getElementById("two").src = "images/hoverImg2.jpg";
}
function mySecondOut() {
    document.getElementById("two").src = "images/oranges-pomegranates.jpg";
}

// CHANGING THIRD IMAGE ON HOVER

var hover = document.getElementById("three");
hover.addEventListener("mouseenter", myThirdEnter);
var hover = document.getElementById("three");
hover.addEventListener("mouseout", myThirdOut);

function myThirdEnter() {
    document.getElementById("three").src = "images/hoverImg3.jpg";
}
function myThirdOut() {
    document.getElementById("three").src = "images/strawberry.jpg";
}

// CHANGING FOURTH IMAGE ON HOVER

var hover = document.getElementById("four");
hover.addEventListener("mouseenter", myFourthEnter);
var hover = document.getElementById("four");
hover.addEventListener("mouseout", myForthOut);

function myFourthEnter() {
    document.getElementById("four").src = "images/hoverImg4.jpg";
}
function myForthOut() {
    document.getElementById("four").src = "images/blueberries.jpg";
}

// CHANGING FIFTH IMAGE ON HOVER

var hover = document.getElementById("five");
hover.addEventListener("mouseenter", myFifthEnter);
var hover = document.getElementById("five");
hover.addEventListener("mouseout", myFifthOut);

function myFifthEnter() {
    document.getElementById("five").src = "images/hoverImg5.jpg";
}
function myFifthOut() {
    document.getElementById("five").src = "images/pears.jpg";
}

// CHANGING SIXTH IMAGE ON HOVER

var hover = document.getElementById("six");
hover.addEventListener("mouseenter", mySixthEnter);
var hover = document.getElementById("six");
hover.addEventListener("mouseout", mySixthOut);

function mySixthEnter() {
    document.getElementById("six").src = "images/hoverImg6.jpg";
}
function mySixthOut() {
    document.getElementById("six").src = "images/easter-eggs.jpg";
}

// CHANGING SEVENTH IMAGE ON HOVER

var hover = document.getElementById("seven");
hover.addEventListener("mouseenter", mySeventhEnter);
var hover = document.getElementById("seven");
hover.addEventListener("mouseout", mySeventhOut);

function mySeventhEnter() {
    document.getElementById("seven").src = "images/hoverImg7.jpg";
}
function mySeventhOut() {
    document.getElementById("seven").src = "images/lemons.jpg";
}

// CHANGING EIGHTH IMAGE ON HOVER

var hover = document.getElementById("eight");
hover.addEventListener("mouseenter", myEighthEnter);
var hover = document.getElementById("eight");
hover.addEventListener("mouseout", myEighthOut);

function myEighthEnter() {
    document.getElementById("eight").src = "images/hoverImg8.jpg";
}
function myEighthOut() {
    document.getElementById("eight").src = "images/cherries.jpg";
}

// CHANGING NINETH IMAGE ON HOVER

var hover = document.getElementById("nine");
hover.addEventListener("mouseenter", myNinethEnter);
var hover = document.getElementById("nine");
hover.addEventListener("mouseout", myNinethOut);

function myNinethEnter() {
    document.getElementById("nine").src = "images/hoverImg9.jpg";
}
function myNinethOut() {
    document.getElementById("nine").src = "images/grapes.jpg";
}













// JAHIL JQUERY EXPLANATION
// const $ = element => document.getElementById(element);

// $('thirdBtn').addEventListener('click', () => {
//     document.getElementById('body').style.backgroundColor = 'red'
// } )