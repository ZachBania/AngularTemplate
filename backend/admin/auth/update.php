<?php

include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = filter_var($data->id, FILTER_SANITIZE_STRING);
$first_name = filter_var($data->first_name, FILTER_SANITIZE_STRING);
$last_name = filter_var($data->last_name, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_STRING);
$username = filter_var($data->username, FILTER_SANITIZE_STRING);
$password = filter_var($data->password, FILTER_SANITIZE_STRING);
$date_created = filter_var($data->date_created, FILTER_SANITIZE_STRING);
$permission_level = filter_var($data->permission_level, FILTER_SANITIZE_STRING);

echo json_encode($request_body);

if(isset($data) && !empty($data)) {
        $sql = "UPDATE Users SET first_name = '$first_name', last_name = '$last_name', email = '$email', username = '$username', password = '$password' WHERE Users.id = '$id'";
        $result = mysqli_query($conn,$sql);
}

?>