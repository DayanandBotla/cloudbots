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