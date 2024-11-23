 

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

const inputs = document.querySelectorAll(".form-control, .form-select");
inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        // If the field is invalid after losing focus
        if (!input.checkValidity()) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        }
    });

    // Remove invalid class on user input
    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        }
    });
});


    // Custom date formatting function
    function formatDate(date) {
        const options = {
            day: '2-digit', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // This will use 12-hour format with AM/PM
        };
        
        // Format the date and time using Intl.DateTimeFormat
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }


// Submit form event listener 
// Function to handle the form submission
function submitForm(event) {
 
    event.preventDefault();  // Prevent the form from reloading the page

        // Get the current date and format it
        var dateTime = new Date();

    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("courseSelect").value;
    var date = formatDate(dateTime); // Get current date

    console.log(date, 'date')

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

               // Remove validation classes
               inputs.forEach((input) => {
                input.classList.remove("is-valid", "is-invalid");
            });


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