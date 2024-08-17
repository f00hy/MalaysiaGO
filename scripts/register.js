$(document).ready(function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const patterns = {
        username: /^[a-zA-Z]{5,12}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    };

    $(".input-text-box input").keyup(function() {
        const inputId = $(this).attr("id");
        if (inputId === "username") {
            validateUsername();
        } else if (inputId === "confirm-password") {
            validateConfirmPassword();
        } else {
            const regex = patterns[inputId];
            validateFormat($(this), regex);
        }
    });

    $("form").submit(function(e) {
        let isValid = true;

        $(".input-text-box input").each(function() {
            const inputId = $(this).attr("id");
            if (!["username", "confirm-password"].includes(inputId)) {
                const regex = patterns[inputId];
                if (!validateFormat($(this), regex)) {
                    isValid = false;
                }
            }
        });

        if (!validateUsername()) {
            isValid = false;
        }

        if (!validateConfirmPassword()) {
            isValid = false;
        }

        if (!validateTermsConditions()) {
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            register(e);
        }
    });

    $(".password-icon i").click(function() {
        const passwordInput = $(this).parent().siblings("input");
        const isPassword = passwordInput.attr("type") === "password";
        passwordInput.attr("type", isPassword ? "text" : "password");
        $(this).toggleClass("bi-eye-slash-fill bi-eye-fill");
    });

    function validateFormat(input, regex) {
        const isValid = regex.test(input.val());
        input.toggleClass("invalid", !isValid).toggleClass("valid", isValid);
        return isValid;
    }

    function validateUsername() {
        const username = $("#username").val();
        const isValidPattern = patterns["username"].test(username);
        const isDuplicate = users.includes(username);
        
        if (!isValidPattern || isDuplicate) {
            $("#username").addClass("invalid").removeClass("valid");
            if (isDuplicate) {
                $("#username ~ small").text("Username already exists. Please try another.");
            } else {
                $("#username ~ small").text("Must be 5 - 12 alphabetic characters.");
            }
            return false;
        } else {
            $("#username").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = $("#password").val();
        const confirmPassword = $("#confirm-password").val();
        const isMatch = password === confirmPassword && password !== "";
        $("#confirm-password").toggleClass("invalid", !isMatch)
            .toggleClass("valid", isMatch);
        return isMatch;
    }

    function validateTermsConditions() {
        const isChecked = $(".terms-conditions input").is(":checked");
        $(".terms-conditions input").toggleClass("invalid", !isChecked)
            .toggleClass("valid", isChecked);
        return isChecked;
    }

    function register(e) {
        e.preventDefault();

        const username = $("#username").val();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `username=${username}; expires=${expiryDate.toUTCString()}; path=/;`;

        users.push(username);
        if (typeof Storage !== "undefined") {
            localStorage.setItem("users", JSON.stringify(users));
        }

        console.log(getCookie("username"));
        alert(getCookie("username"));

        window.location.href = "index.html";
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
});
