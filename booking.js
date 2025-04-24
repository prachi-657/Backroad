// js/booking.js

function validateBookingForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;

  if (!name || !email || !destination || !date || !people) {
    alert("Please fill all fields.");
    return false;
  }

  const bookingDetails = {
    name,
    email,
    destination,
    date,
    people
  };

  // Save booking details locally
  localStorage.setItem("booking", JSON.stringify(bookingDetails));

  // Redirect to confirmation page
  window.location.href = "confirmation.html";
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Check localStorage for dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Toggle dark mode on checkbox change
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
