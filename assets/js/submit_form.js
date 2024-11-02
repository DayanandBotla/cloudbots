function validateMobileNumber(input) {
    const regex = /^[6789]\d{9}$/;
    if (!regex.test(input.value)) {
        input.setCustomValidity('Please enter a valid mobile number.');
    } else {
        input.setCustomValidity('');
    }
}

function showThankYouMessage() {
    document.getElementById('registrationForm').reset(); // Reset the form
    document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
}



 // Initialize EmailJS
 

// Submit form event listener
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Send form data using EmailJS
    emailjs.sendForm("service_g0bs1xt", "template_f82vp4e", this)
        .then(function() {
            // Show thank you message
            document.getElementById("thankYouMessage").style.display = "block";
            // Clear the form
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.error("Failed to send email:", error);
        });
});