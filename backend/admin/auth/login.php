<?php 
include_once("./../../mysql_connection.php");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$data = file_get_contents("php://input");
$request = json_decode($data);

if(isset($data) && !empty($data)){
    $username = $request->username;
    $password = $request->password;
    $sql = "SELECT * FROM Users WHERE username='$username' and password='$password'";
    $result = mysqli_query($conn,$sql);

    $data = array();
    
    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }
    
    echo json_encode($data);
}
?>