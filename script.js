$(document).ready(function(){
    setTimeout(function(){
        $("#mainText1").typed({
            strings: ["Simple Weather App"],
            typeSpeed: 40
        });
    }, 0);

    setTimeout(function(){
        $("#mainText2").typed({
            strings: ["Get Weather Information of any City"],
            typeSpeed: 50
        });
    }, 2000);

    setTimeout(function(){
        $("#list1").typed({
            strings: ["Temperature"],
            typeSpeed: 50
        });
    }, 4000);

    setTimeout(function(){
        $("#list2").typed({
            strings: ["Pressure"],
            typeSpeed: 50
        });
    }, 6000);

    setTimeout(function(){
        $("#list3").typed({
            strings: ["Wind Speed"],
            typeSpeed: 50
        });
    }, 8000);

    setTimeout(function(){
        $("#list4").typed({
            strings: ["Humidity"],
            typeSpeed: 50
        });
    }, 10000);

});