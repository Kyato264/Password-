<?php
include_once 'connect.php';
$sql = "SELECT * FROM storedpasswords ORDER BY type asc";
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt,$sql)){
echo json_encode(array("status" => false,'reason'=>'Select query failed'));
die("Statement failed:");
}
mysqli_stmt_execute($stmt);
$resultdata = mysqli_stmt_get_result($stmt);
while($row = mysqli_fetch_assoc($resultdata)){
$arr_out[] = $row;
}
echo json_encode($arr_out)
?>