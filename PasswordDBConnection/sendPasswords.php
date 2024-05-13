<?php
include_once 'connect.php';

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO storedpasswords (Type,ShortName,Website,RequiredUsername,UsedPassword) VALUES (?,?,?,?,?);";
if (! $stmt = mysqli_prepare($conn, $sql)) {
    die("Statement failed:");
}

mysqli_stmt_bind_param($stmt, "sssss", $_REQUEST['Type'], $_REQUEST['ShortName'], $_REQUEST['Website'], $_REQUEST['RequiredUsername'], $_REQUEST['UsedPassword']);

mysqli_stmt_execute($stmt);

mysqli_stmt_close($stmt);

echo json_encode(array("success" => true));
?>
