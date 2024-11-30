 
 
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


    const courseLinks = document.querySelectorAll('.courseLink');
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    const formModal = document.getElementById("contactFormModal");
    const thankYouMessageModal = document.getElementById("thankYouMessageModal");

    var myModalForm = new bootstrap.Modal(document.getElementById('timerModal'));

    let userPdfJourney = false; // To track if the user clicked a course link

 
    let selectedPdf = ''; // To store the selected PDF path


        // Show the form modal when any link is clicked
        courseLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default link behavior
                

                // if user via online course clicking
                userPdfJourney = true;

                // Get the PDF file from the data-pdf attribute
                selectedPdf = this.getAttribute('data-pdf');
                getCourseName = this.getAttribute('data-title');

                document.querySelector('.timerModal-title').innerText='Become a Pro in ' + getCourseName;
                
                // Show the modal
              
                 myModalForm.show();   
            });
        });


  // Submit form event listener 
// Function to handle the form submission
function submitForm(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    // Get the current date and format it
    var dateTime = new Date();
    var date = formatDate(dateTime); // Get current date

    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("courseSelect").value;

    console.log(date, 'date');

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
        .then(function(response) {
            console.log("Sent successfully", response);
            handleFormSubmissionSuccess();
        })
        .catch(function(error) {
            console.error("Failed to send email:", error);
            alert("There was an issue sending your message. Please try again.");
        });
}

// Handle form submission success
function handleFormSubmissionSuccess() {
    if (userPdfJourney) {
        // Hide the form and show the thank-you message modal
        formModal.style.display = "none";
        thankYouMessageModal.style.display = "block";

        // Start PDF download
        const link = document.createElement('a');
        link.href = './assets/pdf/' + selectedPdf; // Use the selected PDF path
        link.download = selectedPdf; // Use the PDF file name for download
        link.click(); // Programmatically trigger the download

       
        resetFormState('formModal');  // Reset the formModal

        setTimeout(() => {
            thankYouMessageModal.style.display = "none";
            formModal.style.display = "block"; // Show the form again
        }, 5000); // Waits for 5 seconds

        setTimeout(() => {
        myModalForm.hide();   
    }, 3000);

    } else {
        // Hide the form and show the thank-you message
        form.style.display = "none";
        thankYouMessage.style.display = "block";

        resetFormState('form');  // Reset the form

        setTimeout(() => {
            thankYouMessage.style.display = "none";
            form.style.display = "block"; // Show the form again 
        }, 5000); // Waits for 5 seconds

     
    }
}


// Reset form state and remove validation classes based on which form is used
function resetFormState(formName) {
    if (formName === 'formModal') {
        formModal.reset();  // Reset the formModal form
        inputs.forEach((input) => {
            input.classList.remove("is-valid", "is-invalid");
        });
    } else if (formName === 'form') {
        form.reset();  // Reset the form
        inputs.forEach((input) => {
            input.classList.remove("is-valid", "is-invalid");
        });
    }
}     