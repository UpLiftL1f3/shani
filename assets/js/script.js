// variables
let navbarDate = $('#navbar-date');

// navbar Current Date
let currentMoment = moment().format('dddd, MMMM Do');
console.log(navbarDate);
console.log(currentMoment);
navbarDate.text(currentMoment);
