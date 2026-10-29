const generatePasswordButton = document.getElementById("generatePassword");
const passwordLengthRangeInput = document.getElementById("range-input");
const passwordLength = document.getElementById("password-Length");
const message = document.getElementById("message");
const copyGeneratedPasswordButton = document.getElementById("copy");
const showGeneratePassword = document.getElementById("show-generate-password");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

const generatePassword = () => {
  let password = "";
  const random = new Uint32Array(1);

  const limit = Math.floor(2 ** 32 / characters.length) * characters.length;

  for (let i = 0; i < Number(passwordLengthRangeInput.value); i++) {
    do {
      crypto.getRandomValues(random);
    } while (random[0] > limit);

    password += characters[random[0] % characters.length];
  }

  showGeneratePassword.value = password;
};

const generatePasswordFromRange = () => {
  passwordLength.textContent = passwordLengthRangeInput.value;
  generatePassword();
};

const copyGeneratedPassword = () => {
  navigator.clipboard.writeText(showGeneratePassword.value);

  copyGeneratedPasswordButton.textContent = "Copied";
  message.textContent = "Password copied to clipboard.";

  setTimeout(() => {
    copy.textContent = "Copied";
    message.textContent = "Uses letters, numbers, and symbols.";
  }, 1500);
};

generatePasswordButton.addEventListener("click", generatePassword);
passwordLengthRangeInput.addEventListener("input", generatePasswordFromRange);
copyGeneratedPasswordButton.addEventListener("click", copyGeneratedPassword);
