<?php
include_once("../../mysql_connection.php");

$data = file_get_contents("php://input");
$request = json_decode($data);

if(isset($data) && !empty($data)) {
    $password = $request->password;
    $username = $request->username;
    $sql = "SELECT * FROM Users WHERE username='$username' AND password='$password'";
    
    if($result = mysqli_query($conn,$sql)) {
        $rows = array();
        while($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;     
        }
        
        $_SESSION["first_name"] = $rows["first_name"];
        $_SESSION["last_name"] = $rows["last_name"];
        $_SESSION["email"] = $rows["email"];
        $_SESSION["username"] = $rows["username"];
        $_SESSION["permission_level"] = $rows["permission_level"];
        echo json_encode($rows);
    
    }
    else {
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        http_response_code(404);
    }
}
