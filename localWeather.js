$(document).ready(function() {
  
var lat;
var long;
var ftemp;
var ctemp;
var ktemp;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
    var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=fc2cab6bd0135f301855dc526f2fadd6';
    
    $.getJSON(api, function(data){
        var city = data.name;
        var weather = data.weather[0].description;
        var icon = data.weather[0].icon;
        var iconScr = 'https://openweathermap.org/img/w/' + icon + '.png';
        ktemp = data.main.temp;
        ftemp = (ktemp) * (9/5) - 459.67;
        ctemp = (ktemp) - 273;
        console.log(icon);
        
        console.log(data);
        console.log(city);
        $('#location').html('Your Location: ' + city);
        console.log(weather);
        $('#weather').html('Weather: ' + weather);
        console.log(ftemp, ctemp);
        $("#getCelcius").on("click", function(){
          $('#temperature').html('Temperature: ' + Math.floor(ctemp) + '°C');
        });
        $("#getFahrenheit").on("click", function(){
          $('#temperature').html('Temperature: ' + Math.floor(ftemp) + '°F');
        });
        $('#icon').prepend('<img src=' + iconScr + '>');
    });
    
  });
}
});

// '<img scr="' + iconScr + '">'