<?php

require './../mysql_connection.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$search = $_GET['search'];

if (isset($search)) {
    $sql = "Select * From Items WHERE Items.name LIKE '%$search%' OR Items.description LIKE '%$search%' OR Items.price LIKE '%$search%' OR Items.inventory LIKE '%$search%' OR Items.category LIKE '%$search%'";
} else {
    $sql = "Select * From Items";
}

$result = mysqli_query($conn,$sql);

$data = array();

while($row = mysqli_fetch_array($result)){
    $data[] = $row;
}

echo json_encode($data);
?>