document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscriptionForm");
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
    const emailError = document.getElementById("email_error");
    const confirmEmailError = document.getElementById("confirm_email_error");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const emailValue = email.value.trim();
      const confirmEmailValue = confirmEmail.value.trim();
      let valid = true;
  
      // Reset messages
      emailError.style.display = "none";
      confirmEmailError.style.display = "none";
      successMessage.style.display = "none";
  
      // Validate email format
      if (!validateEmail(emailValue)) {
        emailError.style.display = "block";
        valid = false;
      }
  
      // Check if emails match
      if (emailValue !== confirmEmailValue) {
        confirmEmailError.style.display = "block";
        valid = false;
      }
  
      if (valid) {
        successMessage.style.display = "block";
        form.reset();
      }
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });