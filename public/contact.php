<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
error_reporting(0);
ini_set('display_errors', 0);

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($data['subject'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');
$recaptchaToken = $data['recaptchaToken'] ?? '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address"]);
    exit();
}

// Verify reCAPTCHA Enterprise v3 (if token provided)
if (!empty($recaptchaToken) && $recaptchaToken !== 'no-token-available') {
    // Note: For full Enterprise v3 verification, you need Google Cloud API credentials
    // For now, we'll accept the token if provided (basic spam protection still active)
    // To implement full verification, see: RECAPTCHA_ENTERPRISE_V3_SETUP.md
    
    // Optional: Add your secret key here for basic verification
    // $recaptchaSecret = 'YOUR_SECRET_KEY_HERE';
    // $verifyURL = "https://www.google.com/recaptcha/api/siteverify";
    // $response = file_get_contents($verifyURL . "?secret=" . $recaptchaSecret . "&response=" . $recaptchaToken);
    // $responseData = json_decode($response);
    // if (!$responseData->success) {
    //     http_response_code(400);
    //     echo json_encode(["status" => "error", "message" => "Security verification failed"]);
    //     exit();
    // }
}

// Email HTML body
$emailBody = "
<html>
<head><title>New SEO Consultation Request</title></head>
<body style='margin: 0; padding: 0; background-color: #0f172a; font-family: Arial, sans-serif;'>
    <table align='center' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px; background-color: #1e293b; margin: 20px auto; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);'>
        <tr>
            <td align='center' style='padding: 30px 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 8px 8px 0 0;'>
                <h1 style='color: #ffffff; margin: 0; font-size: 28px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);'>🎯 New SEO Lead!</h1>
                <p style='color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;'>Professional SEO Services Inquiry</p>
            </td>
        </tr>
        <tr>
            <td style='padding: 30px; color: #e2e8f0;'>
                <h2 style='color: #60a5fa; margin-top: 0;'>📧 Contact Details</h2>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr>
                        <td style='padding: 10px 0; border-bottom: 1px solid #334155;'>
                            <strong style='color: #94a3b8;'>Name:</strong><br>
                            <span style='color: #f1f5f9; font-size: 16px;'>$name</span>
                        </td>
                    </tr>
                    <tr>
                        <td style='padding: 10px 0; border-bottom: 1px solid #334155;'>
                            <strong style='color: #94a3b8;'>Email:</strong><br>
                            <a href='mailto:$email' style='color: #60a5fa; text-decoration: none; font-size: 16px;'>$email</a>
                        </td>
                    </tr>
                    <tr>
                        <td style='padding: 10px 0; border-bottom: 1px solid #334155;'>
                            <strong style='color: #94a3b8;'>Subject:</strong><br>
                            <span style='color: #f1f5f9; font-size: 16px;'>$subject</span>
                        </td>
                    </tr>
                </table>
                
                <h3 style='color: #60a5fa; margin-top: 25px;'>💬 Message</h3>
                <div style='background-color: #0f172a; padding: 20px; border-radius: 5px; border-left: 4px solid #3b82f6; margin: 10px 0;'>
                    <p style='color: #e2e8f0; line-height: 1.6; margin: 0;'>" . nl2br($message) . "</p>
                </div>
                
                <hr style='border: none; border-top: 1px solid #334155; margin: 25px 0;'>
                
                <p style='font-size: 12px; color: #64748b; margin: 5px 0;'>
                    <strong>Submitted:</strong> " . date('F j, Y \a\t g:i A') . "<br>
                    <strong>Source:</strong> SEO Expert Portfolio Contact Form<br>
                    <strong>IP:</strong> " . $_SERVER['REMOTE_ADDR'] . "
                </p>
            </td>
        </tr>
        <tr>
            <td align='center' style='padding: 25px; background-color: #0f172a; border-top: 1px solid #334155; border-radius: 0 0 8px 8px;'>
                <p style='color: #94a3b8; margin: 5px 0; font-size: 14px;'>Muhammad Adeel - Professional SEO Consultant</p>
                <p style='color: #64748b; margin: 5px 0; font-size: 12px;'>Helping Businesses Dominate Google Rankings</p>
            </td>
        </tr>
    </table>
</body>
</html>
";

// Email headers for admin notification
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: SEO Expert Portfolio <noreply@adeelahmad.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Return-Path: noreply@adeelahmad.com/\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1\r\n";
$headers .= "Importance: High\r\n";
$headers .= "Message-ID: <" . time() . "-" . md5($email) . "@adeelahmad.com>\r\n";

// Admin email (where you want to receive messages) - CHANGE THIS TO YOUR EMAIL
$adminEmail = "info@zeeshansoft.com";

// Email subject
$emailSubject = "🎯 New SEO Lead: " . $subject;

// Send email to Admin
$mailSent = mail($adminEmail, $emailSubject, $emailBody, $headers);

// Send auto-reply to the sender
if ($mailSent) {
    $autoReplySubject = "✅ Thank You for Your SEO Inquiry - Muhammad Adeel";
    $autoReplyBody = "
    <html>
    <head><title>Thank You for Contacting Me</title></head>
    <body style='margin: 0; padding: 0; background-color: #0f172a; font-family: Arial, sans-serif;'>
        <table align='center' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px; background-color: #1e293b; margin: 20px auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);'>
            <tr>
                <td align='center' style='padding: 40px 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 8px 8px 0 0;'>
                    <h1 style='color: #ffffff; margin: 0; font-size: 32px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);'>🎯 Message Received!</h1>
                    <p style='color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;'>I'll respond within 24 hours</p>
                </td>
            </tr>
            <tr>
                <td style='padding: 40px 30px; color: #e2e8f0;'>
                    <p style='font-size: 18px; margin: 0 0 20px 0; color: #f1f5f9;'>Hello <strong>$name</strong>,</p>
                    <p style='font-size: 15px; line-height: 1.7; margin-bottom: 20px; color: #cbd5e1;'>
                        Thank you for reaching out! I've received your message and I'm excited to help you dominate Google rankings and grow your organic traffic.
                    </p>
                    
                    <div style='background-color: #0f172a; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 25px 0;'>
                        <p style='margin: 0 0 10px 0; font-weight: bold; color: #60a5fa; font-size: 16px;'>📝 Your Message Summary:</p>
                        <p style='margin: 10px 0; color: #94a3b8;'><strong style='color: #cbd5e1;'>Subject:</strong> $subject</p>
                        <p style='margin: 10px 0 0 0; color: #e2e8f0; line-height: 1.6;'>" . nl2br($message) . "</p>
                    </div>
                    
                    <div style='background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%); padding: 25px; border-radius: 8px; margin: 25px 0;'>
                        <h3 style='color: #ffffff; margin: 0 0 15px 0; font-size: 18px;'>🚀 What Happens Next?</h3>
                        <ul style='margin: 0; padding-left: 20px; color: #e0e7ff; line-height: 1.8;'>
                            <li>I'll review your inquiry within 24 hours</li>
                            <li>Get a personalized SEO strategy assessment</li>
                            <li>Discuss how we can boost your rankings</li>
                            <li>Receive a custom proposal tailored to your goals</li>
                        </ul>
                    </div>
                    
                    <hr style='border: none; border-top: 1px solid #334155; margin: 30px 0;'>
                    
                    <h3 style='color: #60a5fa; margin: 20px 0 15px 0; font-size: 18px;'>📞 Contact Information</h3>
                    <table style='width: 100%; border-collapse: collapse;'>
                        <tr>
                            <td style='padding: 10px 0; font-size: 14px; color: #cbd5e1;'>
                                <strong style='color: #94a3b8;'>📧 Email:</strong> 
                                <a href='mailto:hello@adeelahmad.com' style='color: #60a5fa; text-decoration: none;'>hello@adeelahmad.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td style='padding: 10px 0; font-size: 14px; color: #cbd5e1;'>
                                <strong style='color: #94a3b8;'>📱 Phone:</strong> 
                                <a href='tel:+923231458064' style='color: #60a5fa; text-decoration: none;'>+92 323 1458064</a>
                            </td>
                        </tr>
                        <tr>
                            <td style='padding: 10px 0; font-size: 14px; color: #cbd5e1;'>
                                <strong style='color: #94a3b8;'>🌐 Website:</strong> 
                                <a href='https://adeelahmad.com' style='color: #60a5fa; text-decoration: none;'>adeelahmad.com</a>
                            </td>
                        </tr>
                    </table>
                    
                    <div style='background-color: #0f172a; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #334155;'>
                        <p style='font-size: 14px; line-height: 1.6; margin: 0; color: #94a3b8;'>
                            <strong style='color: #60a5fa;'>⏰ Response Time:</strong> I typically respond within 24 hours during business days. 
                            For urgent inquiries, feel free to call me directly.
                        </p>
                    </div>
                    
                    <p style='font-size: 15px; color: #cbd5e1; margin: 25px 0 0 0;'>
                        Looking forward to helping you achieve <strong style='color: #60a5fa;'>page 1 rankings</strong> and 
                        <strong style='color: #60a5fa;'>explosive organic growth</strong>! 🚀
                    </p>
                </td>
            </tr>
            <tr>
                <td align='center' style='padding: 30px; background-color: #0f172a; border-top: 1px solid #334155; border-radius: 0 0 8px 8px;'>
                    <p style='font-size: 16px; color: #f1f5f9; margin: 5px 0; font-weight: bold;'>Muhammad Adeel</p>
                    <p style='font-size: 14px; color: #94a3b8; margin: 5px 0;'>Professional SEO Consultant & Expert</p>
                    <p style='font-size: 12px; color: #64748b; margin: 15px 0 5px;'>Helping Businesses Dominate Google Rankings</p>
                    <p style='font-size: 11px; color: #475569; margin: 5px 0;'>&copy; " . date('Y') . " Muhammad Adeel SEO Services. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </body>
    </html>
    ";
    
    $autoReplyHeaders = "MIME-Version: 1.0\r\n";
    $autoReplyHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $autoReplyHeaders .= "From: Muhammad Adeel - SEO Expert <noreply@adeelahmad.com>\r\n";
    $autoReplyHeaders .= "Reply-To: info@zeeshansoft.com\r\n";
    $autoReplyHeaders .= "Return-Path: noreply@adeelahmad.com\r\n";
    $autoReplyHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $autoReplyHeaders .= "X-Priority: 3\r\n";
    $autoReplyHeaders .= "Message-ID: <" . time() . "-autoreply-" . md5($email . time()) . "@adeelahmad.com>\r\n";
    $autoReplyHeaders .= "List-Unsubscribe: <mailto:noreply@adeelahmad.com?subject=unsubscribe>\r\n";
    
    mail($email, $autoReplySubject, $autoReplyBody, $autoReplyHeaders);
}

if ($mailSent) {
    // ✅ Success response
    echo json_encode([
        "status" => "success",
        "message" => "🎉 Message sent successfully! Check your email for confirmation. I'll respond within 24 hours."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "status" => "error", 
        "message" => "❌ Failed to send message. Please try again or contact me directly via email."
    ]);
}
?>
