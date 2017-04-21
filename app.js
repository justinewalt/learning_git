alert('Welcome to Git!');

console.log("We are on a new branch");

var firstName = "Justin";
var lastName = "Ewalt";
var age = 28;

console.log("Full Name: " + firstName + " " + lastName)

if ( age > 19) {
    console.log("Not a teen");
} else {
    console.log('little kid, homie.');
}

var carButton = document.getElementById('get-car');
carButton.addEventListener('click', function() {
    // i need to find the input off the page
    var carInput = document.getElementById('car');
    // i need to console log the input value
    console.log(carInput.value);
});