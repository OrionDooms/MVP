document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const service = document.getElementById('serviceSelect').value;
  const date = document.getElementById('dateSelect').value;
  const time = document.getElementById('timeSelect').value;

  // Simulate booking confirmation
  const confirmationMessage = `Your booking for a ${service} on ${date} at ${time} has been confirmed.`;
  document.getElementById('confirmationMessage').innerText = confirmationMessage;

  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('bookingConfirmation').style.display = 'block';

  console.log(`Booking - Service: ${service}, Date: ${date}, Time: ${time}`);
  // TODO: Integrate with backend API to save booking details
});
