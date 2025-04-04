document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("sk01ge5f4mHwbDolE");
});
// (function() {

// })();

document
  .getElementById("contact-form").addEventListener("submit", function (event) {
    // event.preventDefault();

    // Get form values
    var templateParams = {
      first_name: document.getElementById("first-name").value,
      last_name: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
    var templateParams = {
      from_name: first_name,

      from_name: last_name,
      from_email: email,
      message: message,
      to_name: "Group A",
    };
    console.log(templateParams)

    emailjs.send("service_ga20tw6", "template_av9o39n", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
          alert("Failed to send message. Please try again." + error.text);
      }
    );
  });
