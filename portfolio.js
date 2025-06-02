document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector('[name="name"]')?.value || '';
  const email = form.querySelector('[name="email"]')?.value || '';
  const message = form.querySelector('[name="message"]')?.value || '';

  const formData = { name, email, message };

  const response = await fetch(form.action, {
    method: form.method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const messageEl = document.getElementById('form-message');

  if (response.ok) {
    messageEl.textContent = "Thanks! Your message has been sent.";
    messageEl.style.color = "green";
    form.reset();
  } else {
    messageEl.textContent = "Oops! Something went wrong.";
    messageEl.style.color = "red";
  }
});


