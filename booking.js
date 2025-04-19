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
