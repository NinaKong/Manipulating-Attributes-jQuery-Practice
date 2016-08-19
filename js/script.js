/*Nina Kong*/

$(document).ready(function() {
    $(".fa-home").attr("title", "Home Icon Title");
    $(".fa-github").attr("target", "_blank");
    $(".fa-linkedin-square").removeAttr("href");
    $("img").attr(
        {
            src: "img/imageUpdate.jpg",
            title: "Image Update!"
        }
    );

    var windowHeight = $(window).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);
});
