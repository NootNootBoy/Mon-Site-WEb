var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
compteur = 0;

$(window).on("load", function() {
  console.log("test");
  disableScroll();
  $(".loader-wrapper").fadeOut("slow");
  compteur++;
  console.log(compteur);

  if ((compteur = 1)) {
    console.log("start");

    enableScroll();
  }
});

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
document.addEventListener("wheel", preventDefault, { passive: false });
