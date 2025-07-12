let birthday = Number(prompt("Please enter your birth year"))

function calculateAgeInDays(year){
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    let ageIndays = age * 365;
    return ageIndays;
}
let days = calculateAgeInDays(birthday);
alert("You are " + days + "days old")
