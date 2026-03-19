<?php
// subscribe.php
header('Content-Type: application/json');

// 1. Get the email from the React request
$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'];

if (!$email) {
    echo json_encode(['message' => 'Email is required']);
    exit;
}

// 2. YOUR MAILERLITE API CONFIG
$api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMGM4MjMxMTUxOWNmZDczMmQwMjFmOTA0ODE5M2MyYTVhMjY3OTY4N6hUdqUwwBmfTpV2jzFgse_aMvQwD-68rDPAojnm89GChTExUqSIS_4L-qdmDAScLbQF30fUGOzfKLWzVo8EzUlsOj1Vd9JNXcwnwomdS3T-xuVFPfg5j2xOLeZFVslbQJ0otee3rAgQ4Ho07OCD9BYyZvWSkYVFLsllG8HHhOFreOEPhOxJlw0Gas6cvvaxjnbvvqaT9rreuLv0h4_L0udsrE-DzjQTqW1qofB1KY_74B35RJdhfmkUJk8-0034I0KjTmxqPxab6l8r0zXUiqdj8GhE_DyLxep04n3_ScTEKl-Ipul-nb3ZfkwmvqSPblC2fvV8C5eWbiW3mUNoXIR3-U-EBRBfmXjNxOVWTM_wbxbGwEQ3xFPpuE3UHqUQl2_WfXWNEy88pTM9f7G1cX_GfwVgqRg9R17jFlFO2ji5VeMNcz-ZMCpnD6Y_Bz8L98pp0Bh4-C0vW3UU5XQrz2KcnvJlx4MvlW2Soh4XgD7SGDgwQQ8bS4tKR-Zycin0cNXUwF5TUuxyMCXMOh2FYTIqZiggEVXESHhs18a1bp_p-gGj6PPVOj-JpDzKcxMWEGOtAa_PwwzIbLK7gRBCinblGRG2bQZqP9B-MdxVIuCmIgxrm5VlzMq0SamIXYQhPEfHJ76VzcWo';
$group_id = 'GROUP_ID'; // Optional 

$data = [
    'email' => $email,
    'groups' => [$group_id]
];

// 3. Talk to MailerLite
$ch = curl_init('https://connect.mailerlite.com/api/subscribers');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 || $http_code === 201) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(400);
    echo json_encode(['message' => 'MailerLite Error']);
}
?>