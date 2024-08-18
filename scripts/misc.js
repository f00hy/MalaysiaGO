$(document).ready(function() {
    $(".logout-btn").click(function() {
        sessionStorage.removeItem("username");
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "index.html";
    });

    console.log(checkLoginStatus());

    if (checkLoginStatus) {
        // display logout button
        $(".btn-logout").show();
      
    } else {
        
    }

    function checkLoginStatus() {
        const username = sessionStorage.getItem("username");
        if (username) {
            return username;
        }
    
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookiePair = cookies[i].split("=");
            if (cookiePair[0] === "username") {
                return cookiePair[1];
            }
        }

        return null;
    }
});
