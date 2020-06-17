// *Pseudocode*




alert("This script is connected!")

// GLOBAL FUNCTION
// ================================

let arrCities = [];
function clickedButton(cityId) {
    var cityName = cityId


    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
    // var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
    
    // run an AJAX call (GET) to Open Weather API backend.
    $.ajax({
        url: queryURL,
        method: "GET"
        //Our Then Function 
    }).then(function (response) {

        var results = response;
        
        $("#weather-section").empty();
        $("#day2").empty();
        $("#day3").empty();
        $("#day4").empty();
        $("#day5").empty();
        $("#day6").empty();
        
        // Insert method/function here
        // Generate the HTML content dynamically 

        // Day 1
        var name = $("<h3>").html(results.city.name);
        var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[0].weather[0].icon + ".png")
        var date = $("<h3>").html(results.list[0].dt_txt);
        var temperature = $("<p>").html(results.list[0].main.temp);
        var humidity = $("<p>").html(results.list[0].main.humidity);
        var windSpeed = $("<p>").html(results.list[0].wind.speed);
       
        
        // Day 2
        var date2 = $("<p>").html(results.list[6].dt_txt); 
        var image2 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[6].weather[0].icon + ".png")
        var temperature2 = $("<p>").html(results.list[6].main.temp);
        var humidity2 = $("<p>").html(results.list[6].main.humidity);

        // Day 3
        var date3 = $("<p>").html(results.list[14].dt_txt);
        var image3 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[14].weather[0].icon + ".png")
        var temperature3 = $("<p>").html(results.list[14].main.temp);
        var humidity3 = $("<p>").html(results.list[14].main.humidity);

        // Day 4
        var date4 = $("<p>").html(results.list[22].dt_txt);
        var image4 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[22].weather[0].icon + ".png")
        var temperature4 = $("<p>").html(results.list[22].main.temp);
        var humidity4 = $("<p>").html(results.list[22].main.humidity);

        // Day 5
        var date5 = $("<p>").html(results.list[30].dt_txt);
        var image5 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[30].weather[0].icon + ".png")
        var temperature5 = $("<p>").html(results.list[30].main.temp);
        var humidity5 = $("<p>").html(results.list[30].main.humidity);

        // Day 6
        var date6 = $("<p>").html(results.list[38].dt_txt);
        var image6 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[38].weather[0].icon + ".png")
        var temperature6 = $("<p>").html(results.list[38].main.temp);
        var humidity6 = $("<p>").html(results.list[38].main.humidity);



        // Transfer the Open Weather object into the respected fields in our html
        $("#weather-section").append(name, date, image, temperature, humidity, windSpeed)
        $("#day2").append(date2, image2, temperature2, humidity2)
        $("#day3").append(date3, image3, temperature3, humidity3)
        $("#day4").append(date4, image4, temperature4, humidity4)
        $("#day5").append(date5, image5, temperature5, humidity5)
        $("#day6").append(date6, image6, temperature6, humidity6)
       
    })
};


$("#search-city").on("click", function (event) {
    event.preventDefault();

    // Retrieve user input in the search and convert that to a variable
    // Search term Variable
    var cityName = $("#city-name").val();
    $("#city-name").empty();

    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
    // var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
    
    // run an AJAX call (GET) to Open Weather API backend.
    $.ajax({
        url: queryURL,
        method: "GET"
        //Our Then Function 
    }).then(function (response) {

        console.log(arrCities)
        var repeat = false;

        for (var i = 0; i < arrCities.length; i++) {
            if (arrCities[i] === cityName) {
                repeat = true;
            }
        }
       
        if (repeat === false) {
            arrCities.push(cityName)
            $("#searched-city").append("<button id=' "+ cityName + "' onClick='clickedButton(this.id)'" + "class='cityButton'>" + cityName + "</button>");

            
        }
        console.log(arrCities)
        var results = response;
        // console.log(results)
        // console.log(results.city.name)
        // console.log(results.list[0].main.temp)
        // console.log(results.list[0].main.humidity)
        // console.log(results.list[0].wind.speed)
        // We use this to empty our Weather Section so that we can refresh the section before new content is appended
        $("#weather-section").empty();
        $("#day2").empty();
        $("#day3").empty();
        $("#day4").empty();
        $("#day5").empty();
        $("#day6").empty();
        
        // Insert method/function here
        // Generate the HTML content dynamically 

        // Day 1
        var name = $("<h3>").html(results.city.name);
        var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[0].weather[0].icon + ".png")
        var date = $("<h3>").html(results.list[0].dt_txt);
        var temperature = $("<p>").html(results.list[0].main.temp);
        var humidity = $("<p>").html(results.list[0].main.humidity);
        var windSpeed = $("<p>").html(results.list[0].wind.speed);
       
        
        // Day 2
        var date2 = $("<p>").html(results.list[6].dt_txt); 
        var image2 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[6].weather[0].icon + ".png")
        var temperature2 = $("<p>").html(results.list[6].main.temp);
        var humidity2 = $("<p>").html(results.list[6].main.humidity);

        // Day 3
        var date3 = $("<p>").html(results.list[14].dt_txt);
        var image3 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[14].weather[0].icon + ".png")
        var temperature3 = $("<p>").html(results.list[14].main.temp);
        var humidity3 = $("<p>").html(results.list[14].main.humidity);

        // Day 4
        var date4 = $("<p>").html(results.list[22].dt_txt);
        var image4 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[22].weather[0].icon + ".png")
        var temperature4 = $("<p>").html(results.list[22].main.temp);
        var humidity4 = $("<p>").html(results.list[22].main.humidity);

        // Day 5
        var date5 = $("<p>").html(results.list[30].dt_txt);
        var image5 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[30].weather[0].icon + ".png")
        var temperature5 = $("<p>").html(results.list[30].main.temp);
        var humidity5 = $("<p>").html(results.list[30].main.humidity);

        // Day 6
        var date6 = $("<p>").html(results.list[38].dt_txt);
        var image6 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results.list[38].weather[0].icon + ".png")
        var temperature6 = $("<p>").html(results.list[38].main.temp);
        var humidity6 = $("<p>").html(results.list[38].main.humidity);



        // Transfer the Open Weather object into the respected fields in our html
        $("#weather-section").append(name, date, image, temperature, humidity, windSpeed)
        $("#day2").append(date2, image2, temperature2, humidity2)
        $("#day3").append(date3, image3, temperature3, humidity3)
        $("#day4").append(date4, image4, temperature4, humidity4)
        $("#day5").append(date5, image5, temperature5, humidity5)
        $("#day6").append(date6, image6, temperature6, humidity6)
       
    })

})


//  Activate Searched Cities
// ================================
// $(document).on("click", '#searched-city .cityButton', function() {
//     // event.preventDefault();
    
//     var fired_button = $(this).val();
//     alert(fired_button);


// });

