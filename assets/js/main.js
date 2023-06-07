function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});






/* Open when someone clicks on the span element */
function openNav() {
  setTimeout(function () {
    $('#overlay-content').toggleClass('displayy');
  }, 400);
  $('#myNav').toggleClass('openmenuu');
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $('#overlay-content').toggleClass('displayy');
  $('#myNav').toggleClass('openmenuu');
}


// ********************************************* back to top btn


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
    mybutton.classList.add('animate__bounceInRight');
  } else {
    mybutton.classList.remove('animate__bounceInRight');
    mybutton.classList.add('animate__backOutRight');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.carousel').carousel()

