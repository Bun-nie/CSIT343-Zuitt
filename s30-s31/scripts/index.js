console.log("Hello World");

document.addEventListener("DOMContentLoaded", () => {
    /*REGISTRATION*/
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
                        window.location.href = "login-page.html";
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

    /*LOGIN*/
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        const loginEmail = document.getElementById("loginEmail");
        const loginPassword = document.getElementById("loginPassword");

        const loginEmailError = document.getElementById("loginEmailError");
        const loginPasswordError = document.getElementById("loginPasswordError");

        loginEmailError.style.display = "none";
        loginPasswordError.style.display = "none";

        function validateLoginEmail() {
            const isValid = loginEmail.value.includes("@");
            loginEmailError.style.display = isValid ? "none" : "block";
            loginEmail.classList.toggle("input-error", !isValid);
            return isValid;
        }

        function validateLoginPassword() {
            const isValid = loginPassword.value.length >= 8;
            loginPasswordError.style.display = isValid ? "none" : "block";
            loginPassword.classList.toggle("input-error", !isValid);
            return isValid;
        }

        loginEmail.addEventListener("input", validateLoginEmail);
        loginPassword.addEventListener("input", validateLoginPassword);

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const isEmailValid = validateLoginEmail();
            const isPasswordValid = validateLoginPassword();

            if (!isEmailValid || !isPasswordValid) {
                alert("Please fix the errors before submitting.");
                return;
            }

            fetch("https://movieapp-api-lms1.onrender.com/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: loginEmail.value,
                    password: loginPassword.value,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Login Response:", data);
                    if (data.access && typeof data.access === "string") {
                        alert("Login Successful!");
                        loginForm.reset();
                        window.location.href = "movies.html";
                    } else {
                        alert("Login failed. Please check your credentials.");
                    }
                })
                .catch((error) => {
                    console.error("Login Error:", error);
                    alert("Error occurred while logging in.");
                });
        });
    }

    /*MOVIE LIST*/
    const movieListContainer = document.getElementById("movieList");

    if (movieListContainer) {
        movieListContainer.id = "movieList";
        document.body.appendChild(movieListContainer);

        fetch("https://movieapp-api-lms1.onrender.com/movies/getMovies")
            .then((response) => response.json())
            .then((data) => {
                const movies = data.movies;

                movies.forEach((movie) => {
                    const card = document.createElement("div");
                    card.className = "movie-card";
                    card.innerHTML = `
                        <img src="resources/images/movie-icon.jpg" class="movie-icon">
                        <h3>${movie.title}</h3>
                        <p>${movie.genre}</p>
                    `;
                    movieListContainer.appendChild(card);
                });
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
                movieListContainer.innerHTML = "<p>Failed to load movies.</p>";
            });

    }
});


