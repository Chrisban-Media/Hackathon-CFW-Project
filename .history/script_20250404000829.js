(function () {
    emailjs.init("161H4uMvwcDP9hr4L"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var templateParams = {
        first_name: document.getElementById("name-box").value, // Assuming first name
        last_name: "", // No separate last name field in your form
        email: document.getElementById("info-box").value, // Email input
        phone: document.getElementById("info-box").value, // Phone input (should be a separate field)
        message: document.getElementById("message-box").value // Message
    };

    emailjs.send("EguJaredoBoyd", "EguJaredoBoyd2", templateParams)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});
