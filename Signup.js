// Signup Form Validation
const signupForm = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

signupForm.addEventListener('submit', function(e) {
  console.log('Form Submitted');
  console.log('Form Data:', signupForm);
  e.preventDefault();
  
  // Validate passwords match
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match!');
    return;
  }
  
  // Validate password length
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }
  
  // Form is valid - process signup
  const formData = new FormData(signupForm);
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  };
  
  // In a real app, you would send this to your server
  console.log('User data:', userData);
  
  // Show success message and redirect
  alert('Account created successfully! Welcome to Backroads.');
  window.location.href = 'index.html';
});

// Initialize floating labels
document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('input', function() {
    const label = this.nextElementSibling;
    if (this.value) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});