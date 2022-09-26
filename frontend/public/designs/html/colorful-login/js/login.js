const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('#apt-login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const usernameField = $('#apt-username'),
  		passwordField = $('#apt-password');

  const username = usernameField.value.trim(),
  		password = passwordField.value.trim();

  if(username.length < 1) return usernameField.focus();
  else if(password.length < 1) return passwordField.focus();

  const body = JSON.stringify({ username, password });

  fetch('/somewhere', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });
});


