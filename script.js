/*Designed by CodingTuting.Com*/
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $("#gotop").fadeIn();

            $("#top-btn").click(function() {
                $(window).scrollTop(0);
            });
        } else {
            $("#gotop").fadeOut();
        }
    });
});

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    $(".mainMenu").toggleClass("active");
    $(".mainMenu a").toggleClass("active");
}

// Countdown timer

function updateTimer() {
    future = Date.parse("apr 21, 2023 11:59:59");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);