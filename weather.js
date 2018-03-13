$(document).ready(function(){
    $("#submitCity").click(function(){
        return getWeather();
    });
});


// AJAX Request
function getWeather(){
    // Getting the value from the input field
    var city = $("#city").val();
    // If the our input with the id 'city' is not empty
    if(city != ''){
        // Ajax method 
        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=6b8c924cd05332a4abf31ac5d5e7a753",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data);
                
                $("#showWeather").html(widget);

                $("#city").val('');
            }
        });
    // If the our input with the id 'city' is empty        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}

// http://openweathermap.org/img/w/

function showResults(data){
    return  "<h2 style='font-width:bold; font-size:30px; padding-top:30px;' class='text-center'>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" +
            "<h3 style='padding-left:40px;'><strong>Weather</strong>:" + data.weather[0].main + "</h3>" +
            "<h3 style='padding-left:40px;'><strong> Weather Description </strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>" +            
            "<h3 style='padding-left:40px;'><strong> Temperature </strong>: " + data.main.temp + "	&#8451;</h3>" +
            "<h3 style='padding-left:40px;'><strong> Pressure </strong>: " + data.main.pressure + " hpa</h3>" +
            "<h3 style='padding-left:40px;'><strong> Humidity </strong>: " + data.main.humidity + "%</h3>" + 
            "<h3 style='padding-left:40px;'><strong> Min Temperature </strong>: " + data.main.temp_min + "&#8451;</h3>" + 
            "<h3 style='padding-left:40px;'><strong> Max Temperature </strong>: " + data.main.temp_max + "&#8451;</h3>" +
            "<h3 style='padding-left:40px;'><strong> Wind Speed </strong>: " + data.wind.speed + "m/s</h3>" +
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong> Wind Direction </strong>: " + data.wind.deg + "&deg;</h3>";
}





