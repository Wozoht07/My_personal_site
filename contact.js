document.getElementById('contactform').addEventListener('submit', function (e) {
  e.preventDefault();

  const name         = document.getElementById('name').value.trim();
  const email        = document.getElementById('email').value.trim();
  const confirmEmail = document.getElementById('confirmEmail').value.trim();
  const message      = document.getElementById('message').value.trim();
  const msgBox       = document.getElementById('formMessage');

  // Reset message
  msgBox.style.display = 'none';
  msgBox.classList.remove('error');

  // Validate required fields
  if (!name || !email || !confirmEmail || !message) {
    msgBox.textContent = 'Please fill in all required fields.';
    msgBox.classList.add('error');
    msgBox.style.display = 'block';
    return;
  }

  // Validate email match
  if (email !== confirmEmail) {
    msgBox.textContent = 'Email addresses do not match. Please check and try again.';
    msgBox.classList.add('error');
    msgBox.style.display = 'block';
    return;
  }

  // Success
  msgBox.textContent = 'Message sent! I\'ll get back to you soon.';
  msgBox.style.display = 'block';
  this.reset();
});
