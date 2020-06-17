//Variable to track the cities searched?
// var searchedCities = 0;
alert("This script is connected!")

// FUNCTION
// ================================
$("#search-term").on("click", function(event) {
    event.preventDefault();
    alert("test")
    // Search term Variable
    var cityName = "Philadelphia";
    // $("#search-term").val();
    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "&cnt={cnt}&appid=" + apiKey;
    
    // Our call to our API backend (Get)
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(weatherdata){
        var results = weatherdata.forecast;
        console.log(results)
    })
})



//  MAIN PROCESSES
// ================================



// Retrieve user input in the search and convert that to a variable
// Use the Variable to run an AJAX call (GET) to Open Weather.
// Transfer the Open Weather object into the respected fields in our html
// Generate the HTML content dynamically 