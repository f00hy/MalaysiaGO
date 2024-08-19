$(document).ready(function() {

    getStateDesc();

    function getStateDesc() {
        const match = document.title.match(/^Discover\s(.+?)\s-\sTourism Paradise$/);
        const state = match[1].toLowerCase().replace(/\s+/g, '_');
        const apiUrl = `https://jian.sh/malaysia-api/state/v1/${state}.json`;
        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            success: function(data) {
                $("#api").text(data.description);
            },
            error: function() {
                $("#api").text("Unable to retrieve data at this time. Please try again later.");
            }
        });
    }
});
