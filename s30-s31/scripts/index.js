console.log("Hello World");

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");

        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        emailError.style.display = "none";
        passwordError.style.display = "none";
        confirmPasswordError.style.display = "none";

        function validateEmail() {
            const isValid = emailInput.value.includes("@");
            emailError.style.display = isValid ? "none" : "block";
            return isValid;
        }

        function validatePassword() {
            const isValid = passwordInput.value.length >= 8;
            passwordError.style.display = isValid ? "none" : "block";
            return isValid;
        }

        function validateConfirmPassword() {
            const isValid = passwordInput.value === confirmPasswordInput.value;
            confirmPasswordError.style.display = isValid ? "none" : "block";
            return isValid;
        }

        emailInput.addEventListener("input", validateEmail);
        passwordInput.addEventListener("input", validatePassword);
        confirmPasswordInput.addEventListener("input", validateConfirmPassword);

        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            const isConfirmPasswordValid = validateConfirmPassword();

            if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
                fetch("https://movieapp-api-lms1.onrender.com/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: emailInput.value,
                        password: passwordInput.value,
                    }),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("API Response:", data);
                    if (data.message === "Registered Successfully") {
                        alert("Registration successful!");
                        registerForm.reset();
                    } else {
                      alert("Something went wrong. Please try again.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Error occurred while registering.");
                });
            } else {
                alert("Please correct the inputs.");
            }
        });
    }
});


