// *Pseudocode*




alert("This script is connected!")

// FUNCTION
// ================================
$("#search-city").on("click", function (event) {
    event.preventDefault();
    
    // Retrieve user input in the search and convert that to a variable
    // Search term Variable
    var cityName = $("#city-name").val();


    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    // var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "&cnt={cnt}&appid=" + apiKey;
    console.log(queryURL);
    // run an AJAX call (GET) to Open Weather API backend.
    $.ajax({
        url: queryURL,
        method: "GET"
       //Our Then Function 
    }).then(function (response) {
        var results = response;
        console.log(results)
        console.log(results.city.name)
        console.log(results.list[0].main.temp)
        console.log(results.list[0].main.humidity)
        console.log(results.list[0].wind.speed)

        // Insert method/function here
        // Generate the HTML content dynamically 
        var name = $("<h3>").text(results.city.name);
        var temperature = $("<p>").html(results.list[0].main.temp);
        var humidity = $("<p>").html(results.list[0].main.humidity);
        var windSpeed = $("<p>").html(results.list[0].wind.speed);

        console.log(name)
        console.log(temperature);
        console.log(humidity)
        console.log(windSpeed);
        // Transfer the Open Weather object into the respected fields in our html
        $("#weather-section").append(name,temperature,humidity,windSpeed)


    })
})

//  MAIN PROCESSES
// ================================


