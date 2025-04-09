document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("q9DH9N4sMIDIpAfs7");
});
// (function() {

// })();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let  first_name= document.getElementById("name-box").value;
     let last_name= document.getElementById("last-name").value;
     let email= document.getElementById("info-box").value;
     let phone= document.getElementById("info-box").value;
     let message= document.getElementById("message-box").value;
    
    let templateParams = {
      from_name: first_name + " " + last_name,
      from_email: email,
      message: message,
      to_name: "Group A",
    };
    console.log(templateParams)

    emailjs.send("service_ga20tw6", "template_av9o39n", templateParams)
    .then(function (response) {
      
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset();
      })
        .catch (function (error) {
        alert("Failed to send message. Please try again." + error.text);
        console.log("FAILED...", error);
      });
    });
  
