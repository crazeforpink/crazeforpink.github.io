/*$(function () {

    // Get the data from the acme.json file
    function getData() {
        $.ajax({
            url: "acme.json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                 var anvils = data['0'];
                console.log(data);
                // var explosives = data['1'];

                //  var decoys = data['2'];
                //  var traps = data['3'];

            }
        })
    }
});
*/
$("#largenav span") .on("click", function (evt){

event.preventDefault();
    var click = $(this).text();

    console.log("Selected:" + click);
    document.getElementById("home-content").style.display = "none";
    document.getElementById("product-content").style.display = "inline";

$.ajax({
    url: "/acme/js/acme.json",
    dataType: "json",
    success: function(data) {
        console.log(data);
        var name = data[click].name;
        console.log("Name: " + name);
        var description = data[click].description;
        console.log("Description: " + description);
        var path = data[click].path;
        console.log("Path: " + path);
        var price = data[click].price;
        console.log("Price: " + price);
        var manufacturer = data[click].manufacturer;
        console.log("Manufacturer: " + manufacturer);
        var reviews = data[click].reviews;
        console.log("Reviews: " + reviews);
       /*$.each( function(i, v) {
            if (v.name.search(new RegExp(/anvil/i)) != -1) {
                alert(v.path);
                return;
            }
        });
        */

        $("#name").html(name);
       $("#description").html(description);
        $("#path").html(path);
        $("#price").html(price);
        $("#manufacturer").html(manufacturer);
        $("#reviews").html(reviews);
    }
});

});
