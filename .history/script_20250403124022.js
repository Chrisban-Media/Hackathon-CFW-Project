(function() {
    emailjs.init('service_eotddyd');
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_eotddyd', 'template_oooqj68', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
