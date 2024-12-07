// Validate mobile number
function validateMobileNumber(input) {
    const regex = /^[6789]\d{9}$/;
    if (!regex.test(input.value)) {
        input.setCustomValidity("Please enter a valid mobile number.");
    } else {
        input.setCustomValidity("");
    }
}

// Add validation feedback on blur and input events
const inputs = document.querySelectorAll(".form-control, .form-select");
inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        if (!input.checkValidity()) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        }
    });

    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        }
    });
});

// Format date for email
function formatDate(date) {
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Global variables
const courseLinks = document.querySelectorAll(".courseLink");
const modalForm = document.getElementById("contactFormModal");
const contactForm = document.getElementById("contactFormPage");
const thankYouMessageModal = document.getElementById("thankYouMessageModal");
const thankYouMessageContact = document.getElementById("thankYouMessage");
const modalInstance = new bootstrap.Modal(document.getElementById("timerModal"));
const modalContactFormInstance = new bootstrap.Modal(modalForm);

let userPdfJourney = false;
let selectedPdf = "";

// Handle course link clicks
courseLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        userPdfJourney = true;
        selectedPdf = this.getAttribute("data-pdf");
        const courseTitle = this.getAttribute("data-title");

        document.querySelector(".timerModal-title").innerText = `Become a Pro in ${courseTitle}`;
        modalInstance.show();
    });
});

// Handle form submissions
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const formElement = event.target;
    const formData = new FormData(formElement);

    const date = formatDate(new Date());
    const fullName = formData.get("fullName");
    const mobileNumber = formData.get("mobileNumber");
    const email = formData.get("email");
    const course = formData.get("course");

    const emailData = { fullName, mobileNumber, email, course, date };

    emailjs
        .send("service_e6ftpmb", "template_f82vp4e", emailData)
        .then((response) => {
            console.log("Email sent successfully:", response);
            if (formElement.id === "contactFormModal") {
                handleModalFormSuccess();
            } else if (formElement.id === "contactFormPage") {
                handleContactFormSuccess();
            }
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("There was an issue sending your message. Please try again.");
        });
}

// Handle modal form success
function handleModalFormSuccess() {
    modalContactFormInstance.hide(); // Use Bootstrap modal hide
    thankYouMessageModal.style.display = "block";

    const link = document.createElement("a");
    link.href = `./assets/pdf/${selectedPdf}`;
    link.download = selectedPdf;
    link.click();

    resetForm("contactFormModal");

    setTimeout(() => {
        thankYouMessageModal.style.display = "none";
    }, 5000);
}

// Handle contact page form success
function handleContactFormSuccess() {
    contactForm.style.display = "none";
    thankYouMessageContact.style.display = "block";

    resetForm("contactFormPage");

    setTimeout(() => {
        thankYouMessageContact.style.display = "none";
        contactForm.style.display = "block";
    }, 5000);
}

// Reset form state
function resetForm(formId) {
    const form = document.getElementById(formId);
    form.reset();

    inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
    });
}

// Attach event listeners
if (modalForm) {
    modalForm.addEventListener("submit", handleFormSubmission);
}
if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmission);
}
