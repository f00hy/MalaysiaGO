$(document).ready(function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    $(".input-text-box input").keyup(function() {
        if ($(this).attr("id") === "username") {
            validateUsername($(this));
        } else {
            validatePassword($(this));
        }
    });

    $("form").submit(function(e) {
        let isValid = true;

        $(".input-text-box input").each(function() {
            if ($(this).attr("id") === "username") {
                if (!validateUsername($(this))) {
                    isValid = false;
                }
            } else {
                if (!validatePassword($(this))) {
                    isValid = false;
                }
            }
        });

        e.preventDefault();
        if (isValid) {
            login();
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

    function validateUsername(input) {
        const isValid = users.includes(input.val());
        input.toggleClass("invalid", !isValid).toggleClass("valid", isValid);
        return isValid;
    }

    function validatePassword(input) {
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&\.^\\/])[A-Za-z\d@$!%*?&\.^\\/]{8,20}$/;
        const isValid = pattern.test(input.val());
        input.toggleClass("invalid", !isValid).toggleClass("valid", isValid);
        return isValid;
    }

    function login() {
        const username = $("#username").val();
        const isChecked = $(".remember-forgot input").is(":checked");
        
        if (isChecked) {
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30);
            document.cookie = `username=${username}; expires=${expiryDate.toUTCString()}; path=/;`;
        } else {
            if (typeof Storage !== "undefined") {
                sessionStorage.setItem("username", username);
            }
        }

        window.location.href = "index.html";
    }
});
