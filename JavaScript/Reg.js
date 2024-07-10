document.getElementById('signUp').addEventListener('click', () => {
  document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
  document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signUpUsername').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  console.log(`Sign Up - Username: ${username}, Email: ${email}, Password: ${password}`);
  // TODO: Integrate with backend API
});

document.getElementById('signInForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  console.log(`Sign In - Email: ${email}, Password: ${password}`);
  // TODO: Integrate with backend API
});
