<?php
    
require './../mysql_connection.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name;
$description = $data->description;
$price = $data->price;
$inventory = $data->inventory;
$category = $data->category;
$image_url = $data->image_url;

echo json_encode($request_body);
if(isset($data)){
    
$sql = "INSERT INTO Items (name, description, price, inventory, category, image_url)
    VALUES ('$name', '$description','$price','$inventory','$category','$image_url')";
$result = mysqli_query($conn,$sql);

}
?>