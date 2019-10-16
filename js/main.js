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
    document.body.style.color = "#fff";
    document.getElementById("sectionPortfolio").style.background = "url(/images/fond.jpg)";
    var x = document.getElementsByClassName("progress");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.background = "#ddd";
    }
  } else {
    document.getElementById("btndark").innerHTML = '<i class="fas fa-sun"></i>';
    document.body.style.background = "#ECE9E6";
    document.getElementById("sectionPortfolio").style.background = "url(/images/fond2.jpg)";
    document.body.style.color = "#131418";

    var x = document.getElementsByClassName("progress");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.background = "#111";
    }

    document.h3.style.color = "#222";
  }
};

function PerfectTicketRD() {
  window.open("https://invis.io/JMUEZ2R8AV6#/382184196_Screen1", "_blank");
  console.log("test");
}

function IWorkRD() {
  window.open("https://invis.io/5NUEZFQEADT#/389052044_Screen5", "_blank");
}
