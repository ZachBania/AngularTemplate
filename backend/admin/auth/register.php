<?php

include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$username = $data->username;
$password = $data->password;

// echo json_encode($request_body);
if(isset($data)){
    $sql = "INSERT INTO Users (first_name, last_name, email, username, password) VALUES ('$first_name','$last_name','$email','$username','$password')";
    $result = mysqli_query($conn,$sql);

    $authdata = ['first_name' => $first_name,'last_name' => $last_name,'email' => $email,'username' => $username,'password' => $password];
}
?>