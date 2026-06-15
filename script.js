// Declare variables below to save the different divs of your story.









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


/*
let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');
let opening = document.querySelector('.story-opening.');
optionOneBtn.addEventListener('click', function(){
    optionOneScreen.style.display = 'block';
    opening.style.display = 'none';
 });
*/


let next1Btn = document.querySelector('.next1');
let scene2 = document.querySelector('.story-opening-2');
let opening = document.querySelector('.story-opening');
opening.style.display = 'block';
next1Btn.addEventListener('click', function(){
    scene2.style.display = 'block';
    opening.style.display = 'none';
 });

let next2Btn = document.querySelector('.next2');
let scene3 = document.querySelector('.story-opening-3');
next2Btn.addEventListener('click', function(){
    scene3.style.display = 'block';
    scene2.style.display = 'none';
 });

 let next3Btn = document.querySelector('.next3');
 let optionPage = document.querySelector('.story-opening-4');
 next3Btn.addEventListener('click', function() {
    optionPage.style.display = 'block';
    scene3.style.display = 'none';
 })

 /* left turn code */
 let leftBtn = document.querySelector('.option-one');
 let leftScreen1 = document.querySelector('.option-one-screen');
 leftBtn.addEventListener('click', function() {
    leftScreen1.style.display = 'block';
    optionPage.style.display = 'none';
 })

 let nextL = document.querySelector('.nextL');
 let leftEnd = document.querySelector('.option-one-end');
 nextL.addEventListener('click', function() {
    leftEnd.style.display = 'block';
    leftScreen1.style.display = 'none';
 })

 /* right turn code */
 let rightBtn = document.querySelector('.option-two');
 let rightScreen1 = document.querySelector('.option-two-screen');
 rightBtn.addEventListener('click', function() {
    rightScreen1.style.display = 'block';
    optionPage.style.display = 'none';
 })

let nextR = document.querySelector('.nextR');
let rightEnd = document.querySelector('.option-two-end');
nextR.addEventListener('click', function() {
    rightEnd.style.display = 'block';
    rightScreen1.style.display = 'none';
})
 