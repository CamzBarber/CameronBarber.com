// MARK: Add message to console
console.log("%c \u{1F440} Looking for my code are we? Why not drop me an email? \u{1F4E7}", "font-size: 28px;")

// MARK: Add Mail Link
document.getElementById("mail").href = "ma" + "ilto:Cam" + "zBarber" + "@" + "live.com"; // attempt to scare off the bots

// MARK: Main image optimising
(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
            item.classList.remove('asyncImage');
            return item.nodeName === 'IMG' ? 
                item.src = item.dataset.src :        
            item.style.backgroundImage = `url(${item.dataset.src})`;
        };
    });
})();


// MARK: Navbar
function navbarColour() {
    var $nav = $(".fixed-top");
    // .toggleClass turns on/off depending on condition
    $nav.toggleClass('navbar-light bg-light', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('navbar-dark bg-transparent text-light-outline', $(this).scrollTop() <= $nav.height());    
}

$(function () {
    $(document).scroll(function () {
        navbarColour();
    });
});

navbarColour(); // fixes the navbar on first load with an anchor


// MARK: Rotate Burger Menu

var rotated = false;

document.getElementById('nav-rotate').onclick = function() {
    var div = document.getElementById('nav-rotate'), deg = rotated ? 0 : 180;

    div.style.webkitTransform = 'rotate(' + deg + 'deg)'; 
    div.style.mozTransform = 'rotate(' + deg + 'deg)'; 
    div.style.msTransform = 'rotate(' + deg + 'deg)'; 
    div.style.oTransform = 'rotate(' + deg + 'deg)'; 
    div.style.transform = 'rotate(' + deg + 'deg)'; 

    rotated = !rotated;
}

// MARK: Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});




// MARK: Collapse Navbar on click
$('.navbar a').on('click', function(){
    $('.navbar-collapse').collapse('hide'); 
});


// MARK: Tooltip intialiser
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// MARK: Popup for clickable images
var modal = document.getElementById('modal');

document.getElementsByClassName("modal-close")[0].onclick = function() { 
    modal.style.display = "none";
}

var imgs = document.getElementsByClassName("img-popup");
for(var i = 0; i < imgs.length; i++) {
    imgs.item(i).onclick = function() { 
        modal.style.display = "block";
        document.getElementById("modal-img").src = this.src;
        document.getElementById("modal-caption").innerHTML = this.alt;
    }
}
