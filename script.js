function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (username.length < 2) {
      alert("Username must be at least 2 characters long.");
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (age < 18 || age > 50) {
      alert("Age must be between 18 and 50.");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    return true;
  }
