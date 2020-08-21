<?php
include_once("./../../mysql_connection.php");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    
    $request = json_decode($postdata);

    $first_name = trim($request->username);
    $last_name = trim($request->username);
    $email = trim($request->email);
    $username = trim($request->username);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));

    $sql = "INSERT INTO Users (first_name,last_name,email,username,password) 
            VALUES ('$first_name','$last_name','$email','$username','$password')";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'first_name' => $first_name,
            'last_name' => $last_name,
            'email' => $email,
            'username' => $username,
            'password' => $password,
        ];
        echo json_encode($authdata);
    }
}

?>