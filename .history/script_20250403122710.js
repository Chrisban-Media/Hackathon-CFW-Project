(function() {
    emailjs.init('EguJaredoBoyd');
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send('EguJaredoBoyd', 'EguJaredoBoyd2', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
