//NAVIGATION

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("navbar").style.top = "-85px";
        document.getElementById("nav").style.display = "block";
    }
}

var count = 0;

function opennav() {
    if (count == 0) {
        document.getElementById("nav").style.height = "240px";
        document.getElementById("icon").style.color = "#3399ff";
        count++;
    } else {
        document.getElementById("nav").style.height = "45px";
        document.getElementById("icon").style.color = "#000";
        count = 0;
    }
}

//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}