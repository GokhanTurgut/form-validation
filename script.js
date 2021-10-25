const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailCheck = document.getElementById("emailCheck");
const emailMassage = document.getElementById("emailMassage");

const country = document.getElementById("country");
const countryError = document.getElementById("countryError");
const countryCheck = document.getElementById("countryCheck");
const countryMassage = document.getElementById("countryMassage");

const zipCode = document.getElementById("zipCode");
const zipCodeError = document.getElementById("zipCodeError");
const zipCodeCheck = document.getElementById("zipCodeCheck");
const zipCodeMassage = document.getElementById("zipCodeMassage");

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const passwordCheck = document.getElementById("passwordCheck");
const passwordMassage = document.getElementById("passwordMassage");

const passwordConfirmation = document.getElementById("passwordConfirmation");
const passwordConfirmationError = document.getElementById(
  "passwordConfirmationError"
);
const passwordConfirmationCheck = document.getElementById(
  "passwordConfirmationCheck"
);
const passwordConfirmationMassage = document.getElementById(
  "passwordConfirmationMassage"
);

keyupListener(email, emailError, emailCheck, emailMassage, emailChecker);
keyupListener(
  country,
  countryError,
  countryCheck,
  countryMassage,
  countryChecker
);
keyupListener(
  zipCode,
  zipCodeError,
  zipCodeCheck,
  zipCodeMassage,
  zipCodeChecker
);
keyupListener(
  password,
  passwordError,
  passwordCheck,
  passwordMassage,
  passwordChecker
);
keyupListener(
  passwordConfirmation,
  passwordConfirmationError,
  passwordConfirmationCheck,
  passwordConfirmationMassage,
  passwordConfirmationChecker
);

function emailChecker(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function countryChecker(country) {
  if (country.value === "") {
    return false;
  } else {
    return true;
  }
}

function zipCodeChecker(zipCode) {
  return /[0-9]{5}/.test(zipCode);
}

function passwordChecker(password) {
  if (password.length > 5) {
    return true;
  } else {
    return false;
  }
}

function passwordConfirmationChecker(passwordConfirmation) {
  if (password.value === passwordConfirmation) {
    return true;
  } else {
    return false;
  }
}

function keyupListener(
  element,
  elementError,
  elementCheck,
  elementMassage,
  checkFunction
) {
  element.addEventListener("keyup", () => {
    if (checkFunction(element.value)) {
      element.classList.remove("fail");
      element.classList.add("success");
      elementError.classList.add("displayNone");
      elementCheck.classList.remove("displayNone");
      elementMassage.classList.add("displayNone");
    } else {
      element.classList.remove("success");
      element.classList.add("fail");
      elementCheck.classList.add("displayNone");
      elementError.classList.remove("displayNone");
      elementMassage.classList.remove("displayNone");
    }
  });
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  if (
    emailCheck.classList.contains("displayNone") ||
    countryCheck.classList.contains("displayNone") ||
    zipCodeCheck.classList.contains("displayNone") ||
    passwordCheck.classList.contains("displayNone") ||
    passwordConfirmationCheck.classList.contains("displayNone")
  ) {
    event.preventDefault();
  } else {
    console.log("Submitted, high five!");
  }
});
