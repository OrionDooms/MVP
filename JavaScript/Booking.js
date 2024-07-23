//document.getElementById('bookingForm').addEventListener//('submit', (e) => {
  //e.preventDefault();

  //const service = document.getElementById('serviceSelect').value;
  //const date = document.getElementById('dateSelect').value;
  //const time = document.getElementById('timeSelect').value;

  // Simulate booking confirmation
  //const confirmationMessage = `Your booking for a ${service} on ${date} at ${time} has been confirmed.`;
  //document.getElementById('confirmationMessage').innerText = confirmationMessage;

  //document.getElementById('bookingForm').style.display = 'none';
  //document.getElementById('bookingConfirmation').style.display = 'block';

  //console.log(`Booking - Service: ${service}, Date: ${date}, Time: ${time}`);
  // TODO: Integrate with backend API to save booking details
//});
//Booking a special service
//Select Basic Wash option
function BasicWash() {
    var specialGroup= ['CustomHandWash', 'MiniDetails',"ExpressWax", "Vacuum/Wash"];

specialGroup.forEach(function(itemId){
    document.getElementById(itemId).checked = true;
});
}
//Select STANDART option
function STANDART() {
  var specialGroup= ['CustomHandWash', "WaxWithClay", "Vacuum/Wash"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}
//Select STANDARTPLUS option
function STANDARTPLUS() {
  var specialGroup= ["Wash/Wheel", "DentRemoval", "ExpressWax", "CustomHandWash"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}
//Select PREMIUM option
function PREMIUM() {
  var specialGroup= ["Wash/Wheel", "DentRemoval", "CustomHandWash", "Vacuum/Wash"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}

//Clear all option
function Clear() {
  var specialGroup= ["WaxWithClay", 'MiniDetails', "ExpressWax", "Wash/Wheel", "DentRemoval", "CustomHandWash", "Vacuum/Wash"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = false;
});
}