<?php

require_once "connection.php";

$id = $_POST['id'];
$name = $_POST['name'];
$deposit = $_POST['deposit'];
$card = $_POST['card'];

$sql ="UPDATE `accounts` SET name='$name', deposit='$deposit', cCard='$card' WHERE id='$id'";

$query = mysqli_query($db,$sql);

if ($query) {
  echo "200";
}else {
  echo "502";
}
