// console.log("Hello World!");

/*Activity (Uncomment to run)
const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const spanFullName = document.querySelector("#span-full-name");

function updateFullName() {
    spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
}

txtFirstName.addEventListener("keyup", updateFullName);
txtLastName.addEventListener("keyup", updateFullName);*/

// STRETCH GOAL
const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const email = document.querySelector("#txt-email");
const mobile = document.querySelector("#txt-mobile");

const spanFullName = document.querySelector("#full-name");
const emailPreview = document.querySelector("#email-preview");
const mobilePreview = document.querySelector("#mobile-preview");
const introMessage = document.querySelector("#intro-message");
const mobileError = document.querySelector(".error");

function updateFullName() {
    spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
    updateIntroMessage();
}
function updateEmail() {
	emailPreview.innerHTML = `${email.value}`;
	updateIntroMessage();
}
function updateMobile() {
	if(mobile.value.length === 11 && mobile.value.startsWith('0')){
		mobilePreview.innerHTML = `${mobile.value}`;
		mobileError.innerHTML = "";
	} else {
		mobilePreview.innerHTML = "";
		mobileError.innerHTML = "Invalid mobile number!";
	}
	updateIntroMessage();
}
function updateIntroMessage() {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const mobileNumber = mobile.value;

    if (firstName.trim() !== "" && lastName.trim() !== "" && mobileNumber.trim() !== "") {
        introMessage.innerHTML = `Hello, I am ${firstName} ${lastName}, you can contact me on this number ${mobileNumber}.`;
    } else {
        introMessage.innerHTML = "";
    }
}

txtFirstName.addEventListener("keyup", updateFullName);
txtLastName.addEventListener("keyup", updateFullName);
email.addEventListener("keyup", updateEmail);
mobile.addEventListener("keyup", updateMobile);
introMessage.addEventListener