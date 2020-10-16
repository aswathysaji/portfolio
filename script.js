//Typing effect
var i=0;
var txt = "I'm  Aswathy Saji..";
var speed = 300;

function typeWriter(){
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}
typeWriter();
//visual effect
function scrollAppear1(){
  var intro = document.querySelector('.about');
  var introPosition = intro.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/0.5;

  if(introPosition < screenPosition){
    intro.classList.add('about-appear');
  }
}
window.addEventListener('scroll',scrollAppear1);
function scrollAppear2(){
  var intro1 = document.querySelector('.academics');
  var introPosition1 = intro1.getBoundingClientRect().top;
  var screenPosition1 = window.innerHeight;

  if(introPosition1 < screenPosition1){
    intro1.classList.add('academics-appear');
  }
}
window.addEventListener('scroll',scrollAppear2);
function scrollAppear3(){
  var intro2 = document.querySelector('.works');
  var introPosition2 = intro2.getBoundingClientRect().top;
  var screenPosition2 = window.innerHeight;

  if(introPosition2 < screenPosition2){
    intro2.classList.add('works-appear');
  }
}
window.addEventListener('scroll',scrollAppear3);