$(document).ready(function() {
    if (checkLoginStatus()) {
        window.location.href = "index.html";
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const patterns = {
        username: /^[a-zA-Z]{5,12}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&\.^\\/])[A-Za-z\d@$!%*?&\.^\\/]{8,20}$/
    };

    $(".input-text-box input").keyup(function() {
        const inputId = $(this).attr("id");
        if (inputId === "username") {
            validateUsername($(this));
        } else if (inputId === "confirm-password") {
            validateConfirmPassword($(this));
        } else {
            validateFormat($(this), patterns[inputId]);
        }
    });

    $("form").submit(function(e) {
        let isValid = true;

        $(".input-text-box input").each(function() {
            const inputId = $(this).attr("id");
            if (inputId === "username") {
                if (!validateUsername($(this))) {
                    isValid = false;
                }
            } else if (inputId === "confirm-password") {
                if (!validateConfirmPassword($(this))) {
                    isValid = false;
                }
            } else {
                if (!validateFormat($(this), patterns[inputId])) {
                    isValid = false;
                }
            }
        });

        if (!validateTermsConditions()) {
            isValid = false;
        }

        e.preventDefault();
        if (isValid) {
            register();
        }
    });

    $(".password-icon i").click(function() {
        const passwordInput = $(this).parent().siblings("input");
        const isPassword = passwordInput.attr("type") === "password";
        passwordInput.attr("type", isPassword ? "text" : "password");
        $(this).toggleClass("bi-eye-slash-fill bi-eye-fill");
    });

    $(".login-form .close-btn").click(function() {
        window.location.href = "index.html";
    });

    function validateFormat(input, pattern) {
        const isValid = pattern.test(input.val());
        input.toggleClass("invalid", !isValid).toggleClass("valid", isValid);
        return isValid;
    }

    function validateUsername(input) {
        const username = input.val();
        const isValid = patterns["username"].test(username) && !users.includes(username);
        const invalidMsg = users.includes(username) ? 
            "Username already exists. Please try another." : 
            "Must be 5 - 12 alphabetic characters.";

        input.siblings("small").text(invalidMsg);
        input.toggleClass("invalid", !isValid).toggleClass("valid", isValid);
        
        return isValid;
    }

    function validateConfirmPassword(input) {
        const password = $("#password").val();
        const confirmPassword = input.val();
        const isMatch = password === confirmPassword && password !== "";
        input.toggleClass("invalid", !isMatch).toggleClass("valid", isMatch);
        return isMatch;
    }

    function validateTermsConditions() {
        const isChecked = $(".terms-conditions input").is(":checked");
        $(".terms-conditions input").toggleClass("invalid", !isChecked)
            .toggleClass("valid", isChecked);
        return isChecked;
    }

    function register() {
        const username = $("#username").val();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `username=${username}; expires=${expiryDate.toUTCString()}; path=/;`;

        users.push(username);
        if (typeof Storage !== "undefined") {
            localStorage.setItem("users", JSON.stringify(users));
        }

        window.location.href = "index.html";
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
