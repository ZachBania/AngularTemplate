<?php 
include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first_name = mysqli_real_escape_string($conn, trim($data->first_name));
$last_name = mysqli_real_escape_string($conn, trim($data->last_name));
$email = mysqli_real_escape_string($conn, trim($data->email));
$username = mysqli_real_escape_string($conn, trim($data->username));
$password = mysqli_real_escape_string($conn, trim($data->password));

if(isset($request_body) && !empty($request_body)){

    $sql = "SELECT * FROM Users WHERE username='$username' and password='$password'";
    $data = [];

    if ($result = mysqli_query($conn,$sql)) {
        session_start();
        
        while($row = mysqli_fetch_array($result)){
            $data = $row;
        }
        
        if(count($data) > 0) {
            echo json_encode($data);
        } else {
            echo http_response_code(404);
        }
    } else {
        echo http_response_code(404);
    }
}
?>