<?php
    
require './../mysql_connection.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$item_id = $data->item_id;
$user_id = $data->user_id;
$name = $data->name;
$body = $data->body;
$rating = $data->rating;

if(isset($data) && !empty($data)){
    $sql = "INSERT INTO Comments (item_id, user_id, name, body, rating) VALUES ('$item_id', '$user_id','$name','$body','$rating')";
    $result = mysqli_query($conn,$sql);
}

echo json_encode($data);
?>