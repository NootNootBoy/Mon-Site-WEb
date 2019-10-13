$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});

let CmptDM = 0;
document.getElementById("btndark").onclick = function() {
  CmptDM++;
  console.log(CmptDM);

  if (CmptDM % 2 === 0) {
    document.getElementById("btndark").innerHTML = '<i class="fas fa-moon"></i>';
    document.body.style.background = "#131418";
  } else {
    document.getElementById("btndark").innerHTML = '<i class="fas fa-sun"></i>';
    document.body.style.background = "#ffffff";
  }
};
