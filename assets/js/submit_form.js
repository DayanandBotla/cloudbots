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
// Function to handle the form submission
function submitForm(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("courseSelect").value;
    var date = new Date().toLocaleDateString();  // Get current date

    // Create an object with form data to send to EmailJS
    var formData = {
        fullName: fullName,
        mobileNumber: mobileNumber,
        email: email,
        course: course,
        date: date
    };

    // Send the form data using EmailJS
    emailjs.send("service_e6ftpmb", "template_f82vp4e", formData)
        .then(function (response) {
            console.log("Sent successfully", response);
            //  Hide form
           // Hide the form
           const form = document.getElementById("contactForm");
           form.style.display = "none";

            // Show the thank-you message
            const thankYouMessage = document.getElementById("thankYouMessage");
            thankYouMessage.style.display = "block";

            // Reset the form
            form.reset();


             // Hide the thank-you message after 5 seconds and show the form again
             setTimeout(() => {
                thankYouMessage.style.display = "none";
                form.style.display = "block";
                console.log("Thank-you message hidden, form visible again");
            }, 5000); // Waits for 5 seconds
        },
        
        function(error) {
            console.error("Failed to send email:", error);
            alert("There was an issue sending your message. Please try again.");
        }
    );
}