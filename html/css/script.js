const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // validate username and password here

  if (username === '22BTAI196' && password === 'Nuh80516') {
    alert('Login successful!');
    window.location.href = 'https://www.gardencity.university'; // redirect to home page
  } else {
    alert('Invalid username or password');
  }
});


