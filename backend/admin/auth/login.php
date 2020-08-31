<?php 
include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$username = filter_var($data->username, FILTER_SANITIZE_STRING);
$password = filter_var($data->password, FILTER_SANITIZE_STRING);

if(isset($data) && !empty($data)){
    $sql = "SELECT * FROM Users WHERE username='$username' and password='$password'";
    $result = mysqli_query($conn,$sql);
    
    while($row = mysqli_fetch_array($result)){
        $data = $row;
    }
    
    echo json_encode($data);
}
?>