// Add interactivity here (e.g., form validation, dynamic content)
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username && password) {
      alert('Login successful!');
      // Redirect to homepage or perform other actions
    } else {
      alert('Please fill in all fields.');
    }
  });