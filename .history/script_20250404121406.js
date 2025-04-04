(function () {
    emailjs.init("161H4uMvwcDP9hr4L"); 
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var templateParams = {
        first_name: document.getElementById("name-box").value,
        last_name: "", 
        email: document.getElementById("info-box").value, 
        phone: document.getElementById("info-box").value, 
        message: document.getElementById("message-box").value 
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
