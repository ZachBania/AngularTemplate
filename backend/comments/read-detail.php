<?php

require './../mysql_connection.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$id = $_GET['id'];
$item_id = $_GET['item_id'];
$user_id = $_GET['user_id'];

$sql = "Select * From Comments INNER JOIN Users ON Users.id = Comments.user_id WHERE item_id = $item_id ORDER BY Comments.date_created DESC";

$result = mysqli_query($conn,$sql);

$data = array();

while($row = mysqli_fetch_array($result)){
    $data[] = $row;
}

echo json_encode($data);
?>