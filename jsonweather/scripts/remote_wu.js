// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: "https://api.wunderground.com/api/52b2a203ce1d4762/geolookup/conditions/q/" + lat + "," + long + ".json",
        dataType: "jsonp",
        success : function(data)
        {
        console.log(data);
       var temp = data['current_observation']['temp_f'];
            console.log(temp);
       var currentTemp = $('#currentTemp');
            currentTemp.html((temp) + "&deg;F");
       var info = data['current_observation']['weather'];
            var sum = $('#summary');
            sum.html(info);
       var city = data['location']['city'];
            console.log(city);
            var c = $('#cityDisplay');

       var state = data['location']['state'];
            c.html((city) + ", " + (state));

//two extras

       var country = data['location']['country'];
            var num1 = $('#add1');
            console.log(country);
            num1.html(country);

       var wind = data['current_observation']['wind_mph'];
            var num2 = $('#add2');
            console.log(wind);
            num2.html("Wind Speed: " + (wind) + "MPH");

      $("#cover").fadeOut(250);
        }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
