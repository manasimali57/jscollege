document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("Username");
    const email = document.getElementById("Email");
    const phoneNo = document.getElementById("phoneno.");
    const password = document.getElementById("Password");
    const confirmPassword = document.getElementById("ConfirmPassword");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        if (username.value.trim() === "") {
            alert("Username is required.");
            return;
        }

        if (email.value.trim() === "" || !validateEmail(email.value.trim())) {
            alert("Please enter a valid email.");
            return;
        }

        if (phoneNo.value.trim() === "" || !validatePhoneNumber(phoneNo.value.trim())) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (password.value.trim() === "" || !validatePassword(password.value.trim())) {
            alert("Password must be 7 characters long with at least 1 uppercase letter, 1 digit, and 1 special character (&,#,$,@).");
            return;
        }

        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhoneNumber(phone) {
        const phonePattern = /^[0-9]+$/;
        return phonePattern.test(phone);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&@#$])[A-Za-z\d&@#$]{7,}$/;
        return passwordPattern.test(password);
    }
});
