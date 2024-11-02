<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $fullName = htmlspecialchars($_POST['fullName']);
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);
    $email = htmlspecialchars($_POST['email']);
    $course = htmlspecialchars($_POST['course']);

    // Set the recipient email address
    $to = 'dayanand.botla@gmail.com'; // Replace with your email address
    $subject = 'New Course Registration';

    // Create the email content
    $message = "
    <html>
    <head>
        <title>New Course Registration</title>
    </head>
    <body>
        <h2>New Registration Details</h2>
        <p><strong>Full Name:</strong> $fullName</p>
        <p><strong>Phone Number:</strong> $phoneNumber</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Course:</strong> $course</p>
    </body>
    </html>
    ";

    // Set content-type for sending HTML email
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= "From: <$email>" . "\r\n"; // Sender's email address
    $headers .= "Reply-To: <$email>" . "\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>
