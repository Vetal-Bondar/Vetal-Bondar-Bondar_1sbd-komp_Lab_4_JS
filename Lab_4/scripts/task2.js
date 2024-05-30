function checkPasswordStrength(password) {
    let letterBullet = document.getElementById("letterBullet");
    let specialCharBullet = document.getElementById("specialCharBullet");
    let numberBullet = document.getElementById("numberBullet");
    let lengthBullet = document.getElementById("lengthBullet");

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLengthValid = password.length >= 8;

    letterBullet.style.backgroundColor = hasLetters ? "red" : "grey";
    specialCharBullet.style.backgroundColor = hasSpecialChars ? "green" : "grey";
    numberBullet.style.backgroundColor = hasNumbers ? "blue" : "grey";
    lengthBullet.style.backgroundColor = isLengthValid ? "yellow" : "grey";
}