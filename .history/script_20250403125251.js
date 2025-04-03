(function() {
    emailjs.init("Gmail-Jared");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var templateParams = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    emailjs.send("EguJaredoBoyd", "EguJaredoBoyd2", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});
