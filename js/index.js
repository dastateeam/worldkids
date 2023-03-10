var myIndex = 0;
carousel();

function carousel() {
  var i;
  var xx = document.getElementsByClassName("mySlides");
  for (i = 0; i < xx.length; i++) {
    xx[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > xx.length) {myIndex = 1}    
  xx[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}



var myIndexx = 0;

function carousel1() {
  var i;
  var xxx = document.getElementsByClassName("mySlides1");
  for (i = 0; i < xxx.length; i++) {
    xxx[i].style.display = "none";  
  }
  myIndexx++;
  if (myIndexx > xxx.length) {myIndexx = 1}    
  xxx[myIndexx-1].style.display = "block";  
  setTimeout(carousel1, 4000); // Change image every 2 seconds
}
carousel1();


function darkmod() {
    if (document.documentElement.scrollTop > window.innerHeight ) {
      document.getElementById("Id-my-up-nav").style.backgroundColor = "black";
      document.getElementById("Id-my-up-nav").classList.add("animate__fadeInDown");
    } else {
        document.getElementById("Id-my-up-nav").style.backgroundColor = "#2525312d";
      document.getElementById("Id-my-up-nav").classList.remove("animate__fadeInDown");


    }
  };
  function myFunction() {
    var x = document.getElementById("id-hidegroub");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.classList.add("animate__backInDown");
    } else {
      x.style.visibility = "hidden";
    }
  }
 
  window.addEventListener('scroll', darkmod);
