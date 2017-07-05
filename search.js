var returned;

$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup




// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
   // $()
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
    console.log(jsonCity);
    index= $(this).index("a");
    getData(index.lat, index.lon);
    $('#searchResults').hide();

});


// Get weather data from wunderground.com
function getData(lat, lon) {
    // Get the data from the wunderground API
    $.ajax({
        url: "https://api.wunderground.com/api/52b2a203ce1d4762/geolookup/conditions/q/" + lat + ',' + lon + ".json",

         dataType: "jsonp"
        , success: function (parsed_json) {

            var location = parsed_json['location']['city'];
            //+ ', ' + data.location.state;
            var temp_f = parsed_json['current_observation']['temp_f'];
            //$('#currentTemp').html(Math.round(temp_f)+ "&#8457");

            //console.log('Location is: ' + location);
            //console.log('Temp is: ' + temp_f);
            $("#add1").text(location);
            $("title").html(location + " | Weather Center");
            $("#currentTemp").html(Math.round(temp_f) + '°');
            $("#summary").text(toTitleCase(data.current_observation.icon));
            $("#add2").fadeOut(250);
            console.log(parsed_json);
        }
    });
}







