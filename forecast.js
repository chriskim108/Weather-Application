$(document).ready(function(){
    $("#submitForecast").click(function(){
        return getForecast();
    });
});

function getForecast(){
    var city = $("#city").val(),
        days = $("#days").val();

    if(city != '' && days != ''){

        $.ajax({
            // url:"http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric" + "&cnt=" + days + "&APPID=6b8c924cd05332a4abf31ac5d5e7a753",
            // 5 days
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=metric" + "&cnt=" + days + "&APPID=6b8c924cd05332a4abf31ac5d5e7a753",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var table = '',
                    header = "<h2 style='font-weight:bold; font-size:30px;'>Weather Forecast for " + data.city.name + ", " + data.city.country + "</h2>";

                for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";
                    
                    // table += "<td>" + data.list[i].weather[0].icon + "</td>";
                    table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" + "</td>";
                    
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table += "<td>" + data.list[i].main.temp_min + "&deg;C" + "</td>";
                    table += "<td>" + data.list[i].main.temp_max + "&deg;C" + "</td>";          
                    table += "<td>" + data.list[i].main.pressure + "hpa" + "</td>";
                    table += "<td>" + data.list[i].main.humidity + "%" + "</td>";
                    table += "<td>" + data.list[i].wind.speed + "m/s" + "</td>";
                    table += "<td>" + data.list[i].wind.deg + "&deg;" + "</td>";
                    
                    table += "</tr>";
                }

                $("#forecastWeather").html(table);
                $("#header").html(header);

                $("#city").val('');
                $("#days").val('');
            }
        })

    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}