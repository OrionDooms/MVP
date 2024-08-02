document.getElementById('editProfileBtn').addEventListener('click', () => {
  document.getElementById('editProfileForm').style.display = 'block';
});

document.getElementById('profileForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('editUsername').value;
  const email = document.getElementById('editEmail').value;
  document.getElementById('profileUsername').innerText = username;
  document.getElementById('profileEmail').innerText = email;
  document.getElementById('editProfileForm').style.display = 'none';
  console.log(`Profile Updated - Username: ${username}, Email: ${email}`);
   TODO: Integrate with backend API to save changes
});

// Example past bookings data (in a real scenario, this would be fetched from the backend)
const pastBookings = [
  { date: '2024-07-01', service: 'Full Wash' },
  { date: '2024-06-25', service: 'Quick Wash' },
  { date: '2024-06-15', service: 'Detailing' }
];

const bookingList = document.getElementById('bookingList');
pastBookings.forEach(booking => {
  const li = document.createElement('li');
  li.textContent = `Date: ${booking.date}, Service: ${booking.service}`;
  bookingList.appendChild(li);
});
