// GLOBAL FUNCTION
// ================================
// THIS IS THE FUNCTION WE WILL USE TO ALLOW OUR SEARCHED CITY BUTTONS TO CALL TO OUR API 
let arrCities = [];

function clickedButton(cityId) {
    var cityName = cityId
    // var lat = results.city.coord.lat;

    // Url & Key Variables
    var apiKey = "79b626f9fb03c7bd7e2f18487784205a";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + "&appid=" + apiKey;
    // var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

    // run an AJAX call (GET) to Open Weather API backend.
    var ajax1 = $.ajax({
        url: queryURL,
        method: "GET"

    })
    // var ajax2 = $.ajax({ 
    //    url: queryURL2,
    //    method: "GET"

    //   });
    $.when(ajax1, ).done(function (response) {

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
        $("#weather-section").append(name, image, date, "Temp (in &#8457;):", temperature, "Humidity (%):", humidity, "Windspeed (in Mph):", windSpeed)
        $("#day2").append(date2, image2, "Temp (in &#8457;):", temperature2, "Humidity (in &#37;):", humidity2)
        $("#day3").append(date3, image3, "Temp (in &#8457;):", temperature3, "Humidity (in &#37;):", humidity3)
        $("#day4").append(date4, image4, "Temp (in &#8457;):", temperature4, "Humidity (in &#37;):", humidity4)
        $("#day5").append(date5, image5, "Temp (in &#8457;):", temperature5, "Humidity (in &#37;):", humidity5)
        $("#day6").append(date6, image6, "Temp (in &#8457;):", temperature6, "Humidity (in &#37;):", humidity6)
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

    // console.log(queryURL2)
    // run an AJAX call (GET) to Open Weather API backend.

    var ajax1 = $.ajax({
        url: queryURL,
        method: "GET"

    })
    // var ajax2 = $.ajax({ 
    //    url: queryURL2,
    //    method: "GET"

    //   });
    $.when(ajax1,).done(function (response) {
        // this for loop will determine whether or not to push searched cities into our array
        console.log(arrCities)
        var repeat = false;
        for (var i = 0; i < arrCities.length; i++) {
            if (arrCities[i] === cityName) {
                repeat = true;
            }
        }
        if (repeat === false) {
            arrCities.push(cityName)
            $("#searched-city").append("<button id=' " + cityName + "' onClick='clickedButton(this.id)'" + "class='cityButton'>" + cityName + "</button>");
        }
        console.log(arrCities)
        var results = response;
        console.log(results)

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
        $("#weather-section").append(name, image, date, "Temp (in &#8457;):", temperature, "Humidity (%):", humidity, "Windspeed (in Mph):", windSpeed)
        $("#day2").append(date2, image2, "Temp (in &#8457;):", temperature2, "Humidity (in &#37;):", humidity2)
        $("#day3").append(date3, image3, "Temp (in &#8457;):", temperature3, "Humidity (in &#37;):", humidity3)
        $("#day4").append(date4, image4, "Temp (in &#8457;):", temperature4, "Humidity (in &#37;):", humidity4)
        $("#day5").append(date5, image5, "Temp (in &#8457;):", temperature5, "Humidity (in &#37;):", humidity5)
        $("#day6").append(date6, image6, "Temp (in &#8457;):", temperature6, "Humidity (in &#37;):", humidity6)
    })
})
//Saving Function
var arrSearchedCities = JSON.parse(localStorage.getItem("text")) 
$("#search-city").on("click", function () {
    var Cities = $("#city-name").val()

    arrSearchedCities.push({
        cities: Cities,
    })
    localStorage.setItem("text", JSON.stringify(arrSearchedCities));
})
