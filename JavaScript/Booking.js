function BasicWash() {
    var specialGroup= ['WashDryTyre', 'WashWax',"ExpressWax", "Vacuum/Wash"];

specialGroup.forEach(function(itemId){
    document.getElementById(itemId).checked = true;
});
}
//Select STANDART option
function STANDART() {
  var specialGroup= ['WashDryTyre', "Vacuum/Wash", "WashWax"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}
//Select STANDARTPLUS option
function STANDARTPLUS() {
  var specialGroup= ["WashDry", "WashWax", "Vacuum/Wash", "Wash/Wheel"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}
//Select PREMIUM option
function PREMIUM() {
  var specialGroup= ["WashDryTyre", "Vacuum/Wash", "WaxWithClay", "Wash/Wheel", "DentRemoval"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = true;
});
}

//Clear all option
function Clear() {
  var specialGroup= ["WashDry", 'WashDryTyre', "WashWax", "Vacuum/Wash", "WaxWithClay", "Wash/Wheel", "DentRemoval"];

specialGroup.forEach(function(itemId){
  document.getElementById(itemId).checked = false;
});
}