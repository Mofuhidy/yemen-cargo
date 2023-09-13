<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fullName"];
    $email = $_POST["email"];
    $phone = $_POST["phoneNumber"];
    $address = $_POST["address"];
    $from = $_POST["from"];
    $fromPort = $_POST["fromPort"];
    $to = $_POST["to"];
    $toPort = $_POST["toPort"];
    $commodity = $_POST["commodity"];
    $containerTypeSize = $_POST["containerTypeSize"];
    $containers = $_POST["containers"];
    $weight = $_POST["weight"];

    // Set up email
    // $tomail = ""; // Your email address
    $subject = "طلب شحنة";
    $message = "الاسم: $name\n";
    $message .= "البريد الإلكتروني: $email\n";
    $message .= "رقم التلفون: $phone\n";
    $message .= "من (البلد) $from\n";
    $message .= "من ميناء: $fromPort\n";
    $message .= "إلى (البلد)  $to\n";
    $message .= "إلى ميناء: $toPort\n";
    $message .= "نوع السلعة: $commodity\n";
    $message .= "نوع الحاوية وحجمها: $containerTypeSize\n";
    $message .= "عدد الحاويات: $containers\n";
    $message .= "وزن البضاعة لكل حاوية: $weight\n";


    // Send email
    if (mail($tomail, $subject, $message)) {
        $response = array('success' => true, 'message' => 'Message sent successfully');
    } else {
        $response = array('success' => false, 'message' => 'Message submission failed');
    }
}

header('Content-Type: application/json');
echo json_encode($response);
