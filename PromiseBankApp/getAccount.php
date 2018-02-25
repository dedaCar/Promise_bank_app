<?php

require_once "connection.php";

$id = $_POST['id'];

$sql ="SELECT `id`, `name`, `deposit`, `cCard` FROM `accounts` WHERE id='$id'";

$query = mysqli_query($db,$sql);

if ($query) {
  echo json_encode(mysqli_fetch_object($query));;
}else {
  echo "502";
}
