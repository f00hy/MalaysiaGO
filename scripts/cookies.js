$(document).ready(function() {
    const isPrompted = sessionStorage.getItem("isCookiePrompted");
    if (isPrompted) {
        $(".cookies-wrapper").css("display", "none");
    } else {
        $(".cookies-wrapper").css("display", "block");
    }

    $(".cookies-wrapper .close-btn").click(function() {
        $(".cookies-wrapper").animate({
            opacity: 0
        });
        setTimeout(function() {
            $(".cookies-wrapper").css("display", "none");
        }, 1000);
        if (typeof Storage !== "undefined") {
            sessionStorage.setItem("isCookiePrompted", "true");
        }
    });
});
