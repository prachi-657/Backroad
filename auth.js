// Check login state on page load
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');
    const usernameSpan = document.getElementById('username');
    const signoutBtn = document.getElementById('signout-btn');
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
      userGreeting.style.display = 'block';
      usernameSpan.textContent = currentUser.name;
    }
    
    // Sign out
    signoutBtn?.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.reload();
    });
  });