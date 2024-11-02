function validateMobileNumber(input) {
    const regex = /^[6789]\d{9}$/;
    if (!regex.test(input.value)) {
        input.setCustomValidity('Please enter a valid mobile number.');
    } else {
        input.setCustomValidity('');
    }
}

function showThankYouMessage() {
    document.getElementById('contactForm').reset(); // Reset the form
    document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
}


        // Function to format the date
        function formatDate(date) {
            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-US', options).replace(/ /g, '-'); // Format: "03-November-2024"
        }

        // Submit form event listener
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            // Get today's date in the desired format
            const today = new Date();
            const formSubmittedDate = formatDate(today); // Format: "03-November-2024"

            // Send form data using EmailJS
            emailjs.send("service_g0bs1xt", "template_f82vp4e", {
                fullName: this.fullName.value,
                mobileNumber: this.mobileNumber.value,
                email: this.email.value,
                course: this.course.value,
                formSubmittedDate: formSubmittedDate // Use the formatted date directly
            })
            .then(function() {
                // Show thank you message
                document.getElementById("thankYouMessage").style.display = "block";
                // Clear the form
                document.getElementById("contactForm").reset();
            }, function(error) {
                console.error("Failed to send email:", error);
                alert("An error occurred while sending the email. Please try again.");
            });
        });
