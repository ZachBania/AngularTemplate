<?php

require './../mysql_connection.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = $data->id; 

if(isset($data)){
    
    $sql = "DELETE FROM Comments WHERE id=$id";
    $result = mysqli_query($conn,$sql);
    echo json_encode($request_body);

}
?>