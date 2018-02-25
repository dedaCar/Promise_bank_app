<?php

require_once 'connection.php';

$name = $_POST['name'];
$deposit = $_POST['deposit'];
$card = $_POST['card'];

$sql = "INSERT INTO accounts VALUES(NULL,'$name','$deposit','$card')";

$query = mysqli_query($db,$sql);

if ($query) {
  echo "200";
}else {
  echo "502";
}
