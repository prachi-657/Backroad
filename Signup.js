// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

  // Get the signup form element
  const signupForm = document.getElementById('signup-form');
  
  // Add submit event listener
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create user object from form data
    const user = {
      id: Date.now(), // Unique ID
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim().toLowerCase(),
      password: document.getElementById('password').value
    };

    // Basic validation
    if (!user.name || !user.email || !user.password) {
      alert('Please fill all fields');
      return;
    }

    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      alert('Please enter a valid email');
      return;
    }

    // Password length validation
    if (user.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check for duplicate email
    if (users.some(u => u.email === user.email)) {
      alert('Email already exists!');
      return;
    }

    // Save user to localStorage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Success feedback and redirect
    alert('Registration successful!');
    window.location.href = 'signin.html';
  });
