"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const confirmEmail = form.confirmEmail.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      // Check if emails match
      if (email !== confirmEmail) {
        alert("Email addresses do not match. Please double-check.");
        return;
      }
  
      // Optionally: Check if other fields are empty (browser will usually catch this)
      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
      }
  
      // All good — do something with the data
      const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };
  
      // Log data (or send to a server with fetch if needed)
      console.log("Form submitted:", formData);
  
      // Show confirmation message
      alert("Thank you! Your message has been sent.");
  
      // Clear the form
      form.reset();
    });
  });
