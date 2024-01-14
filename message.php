<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    // Check if email and message are provided
    if (!empty($email) && !empty($message)) {
        // Validate email
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Construct email subject
            $subject = "Contact Form: $name";

            // Construct email body
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";

            // Set additional headers
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";

            // Send email
            if (mail('lvnce@icloud.com', $subject, $body, $headers)) {
                echo "Your message has been sent!";
            } else {
                echo "Sorry, failed to send your message.";
            }
        } else {
            echo "Enter a valid email address!";
        }
    } else {
        echo "Email and message fields are required.";
    }
} else {
    // Handle non-POST requests
    echo "Invalid request method.";
}
?>