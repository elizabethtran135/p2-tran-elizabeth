//API
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var apiResult = JSON.parse(this.responseText);
        var actual = document.createTextNode(apiResult.data[0].intensity.actual);
        var forecast = document.createTextNode(apiResult.data[0].intensity.forecast);
        var index = document.createTextNode(apiResult.data[0].intensity.index);

        var ukCarbonList = document.querySelectorAll('#uk p span.co2')

        ukCarbonList[0].appendChild(actual);
        ukCarbonList[1].appendChild(forecast);
        ukCarbonList[2].appendChild(index);  
    }
};
xmlhttp.open('GET', 'https://api.carbonintensity.org.uk/intensity?fbclid=IwAR04D6wpbFy41PFER7nkIHMaIZPAIXyJrf75ASUq7TZ501O3lfm8byhw5bc', true);
xmlhttp.send();

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
