var i = 0;
var j = 0;
var txt = 'Hello world!'; 
var txt2 = ' I\'m Julian';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function init() {
  setTimeout(typeWriter, 500);
  AOS.init();
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i => txt.length) {
    setTimeout(typeWriter2, 800);
  }
}

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("intro").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}

window.onload = init