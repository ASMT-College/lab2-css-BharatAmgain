document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();



    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
