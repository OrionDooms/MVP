// scripts.js - Currently empty, but can be used for future interactivity

// Example: Add functionality to "Book Now" buttons (could be expanded for actual booking logic)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to booking page...');
    // TODO: Implement redirection to booking page with pre-selected service
  });
});

/*function updateServiceList() {
  const carType = document.querySelectorAll('input[name="carType"]:checked');
  const services = document.querySelectorAll('input[name="services"]:checked');
  const displayBox = document.getElementById('displayBox');
  displayBox.innerHTML = '';

  let total = 0;

  services.forEach(service => {
    carType.forEach(carType => {
      const price = service.getAttribute('data-' + carType.value);
      total += parseFloat(price);
      displayBox.innerHTML += `<p>${service.value} for ${carType.value} car - $${price}</p>`;
    });
  });
  displayBox.innerHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}
function clear() {
  const services = document.querySelectorAll('input[name="services"]:checked');
  services.forEach(service => {
    service.checked = false;
  });
  updateServiceList();
}*/