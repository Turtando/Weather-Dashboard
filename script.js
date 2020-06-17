// *Pseudocode*
// Retrieve user input in the search and convert that to a variable
// Use the Variable to run an AJAX call (GET) to Open Weather.
// Transfer the Open Weather object into the respected fields in our html
// Generate the HTML content dynamically 
alert("This script is connected!")

// FUNCTION
// ================================
$("#search-city").on("click", function (event) {
    event.preventDefault();

    // Search term Variable
    var cityName = $("#city-name").val();


    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    // var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "&cnt={cnt}&appid=" + apiKey;
    // console.log(queryURL);
    var weatherResults = parseInt($("#weather-section").val());
    // Our call to our API backend (Get)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response;
        console.log(results)
        console.log(results.city.name)
        console.log(results.list[0].main.temp)
        console.log(results.list[0].wind.speed)

        for (var i = 0; i < weatherResults; i++) { 
            var name = $("<h3>").text(results.city.name);
            var temperature = $("<p>").text(results.list[0].main.temp);
            var windSpeed = $("<p>").text(results.list[0].wind.speed);
           
            console.log(name)
            console.log(temperature);
            console.log(windSpeed);
            
            $("weather-section").append(temperature, windSpeed, name)
        }   
            
    })
})

//  MAIN PROCESSES
// ================================


