
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
    const signinForm = document.getElementById('signin-form');
    
    signinForm.addEventListener('submit', function(e){
      e.preventDefault();
        
        // Get user input
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!email || !password) {
          alert('Please fill all fields');
          return;
        }
    
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check for matching user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
          // Save current user to localStorage
          localStorage.setItem('currentUser', JSON.stringify(user));
          alert('Login successful!');
          window.location.href = 'index.html';
        } else {
          alert('Invalid email or password!');
        }
    }
    )
    document.getElementById('email').addEventListener('input', function() {
      // You can add error clearing logic here
    });
  });