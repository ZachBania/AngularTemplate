<?php 
include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first_name = filter_var($data->first_name, FILTER_SANITIZE_STRING);
$last_name = filter_var($data->last_name, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_STRING);
$username = filter_var($data->username, FILTER_SANITIZE_STRING);
$password = filter_var($data->password, FILTER_SANITIZE_STRING);

if(isset($data) && !empty($data)){
    session_start();
    $_SESSION['first_name'] = $first_name;
    $_SESSION['last_name'] = $last_name;
    $_SESSION['email'] = $email;
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;

    $sql = "SELECT * FROM Users WHERE username='$username' and password='$password'";
    $result = mysqli_query($conn,$sql);
    
    while($row = mysqli_fetch_array($result)){
        $data = $row;
    }
    
    echo json_encode($data);
}
?>