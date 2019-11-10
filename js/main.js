//HAMBURGER
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
//Pop up
var ext_link =
document.getElementById("external_link");
ext_link.addEventListener("click",
  function(event) {
    var is_sure = confirm("Do you want to Donate to Teens Go Green?");
      if (is_sure === false) {
        event.preventDefault();
        alert("You have confirmed to not donate and stay on this page");
      }
  }, false
);
//Read More
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
//API
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
      

    }
};
xmlhttp.open('GET', 'http://trashnothing.com/api/v1.1/trashnothing-openapi.yaml', true);
xmlhttp.send();
