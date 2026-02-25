<?php
// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Grab the form fields
    $name = strip_tags(trim($_POST["Client_Name"]));
    $phone = strip_tags(trim($_POST["Client_Phone"]));
    $service = strip_tags(trim($_POST["Legal_Service"]));
    $branch = strip_tags(trim($_POST["Preferred_Branch"]));

    // Check that data was actually sent
    if (empty($name) || empty($phone) || empty($service) || empty($branch)) {
        http_response_code(400);
        echo "Please complete all fields.";
        exit;
    }

    // THE MAGIC: Route to the correct receptionist based on the dropdown
    if ($branch == "Johannesburg") {
        $recipient = "jhb@nemadzivhananiattorney.co.za";
    } else if ($branch == "Roodepoort") {
        $recipient = "roodepoort@nemadzivhananiattorney.co.za";
    } else {
        $recipient = "info@nemadzivhananiattorney.co.za"; // Fallback safety
    }

    // Build the email
    $subject = "New Website Lead: $service - $branch";
    
    $email_content = "You have a new consultation request from the website.\n\n";
    $email_content .= "Client Name: $name\n";
    $email_content .= "Phone Number: $phone\n";
    $email_content .= "Requested Service: $service\n";
    $email_content .= "Preferred Branch: $branch\n";

    // Set the sender (must be your domain to prevent going to spam)
    $email_headers = "From: website@nemadzivhananiattorney.co.za";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>