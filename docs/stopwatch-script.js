// Name: Everett Johnson
// Class: CPSC 332
// Assignment: Homework 6
// Last Modified: 11/18/2022
$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $timer = $("#timer");
    var $wrapper = $(".wrapper");
    var interval;

    $timer.addClass("timer-background");
    $timer.css({
        backgroundColor: "lightgray",
        border: "3px dashed green",
        color: "red"
    });

    $wrapper.css({
        fontFamily: "Lucida Handwriting",
        fontWeight: "bold",
        border: "5px dotted green",
        backgroundColor: "lightgreen",
        color: "red"
    });

    // Tree png from: https://www.seekpng.com/ipng/u2q8w7r5o0i1i1i1_christmas-tree-clipart-funny-christmas-tree-png-cartoon/
    $("body").css({
        backgroundImage: "url(./tree.png)",
        backgroundSize: "20% 33%"
    });

    $buttonStart.addClass("button-class");
    $buttonReset.addClass("button-class");
    $buttonStop.addClass("button-class");
    $(".button-class").css({
        backgroundColor: "pink",
        border: "1px solid green",
        color: "blue",
        borderRadius: "10px"
    });

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $timer.css({
            backgroundColor: "aquamarine"
        });
    });

    $buttonStop.on("click", function () {
        clearInterval(interval);

        if (tens != "00" || seconds != "00") {
            $timer.stop(true, true);
            $timer.css({
                backgroundColor: "red",
                color: "black",
                opacity: "1.0"
            });
        }
    });

    $buttonReset.on("click", function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timer.stop(true, true);
        $timer.css({
            backgroundColor: "lightgray",
            color: "red",
            opacity: "1.0"
        });
    });

    function startTimer() {
        tens++;
        $timer.animate({
            opacity: 0.8
        }, 500);
        $timer.animate({
            opacity: 1.0
        }, 500);

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});