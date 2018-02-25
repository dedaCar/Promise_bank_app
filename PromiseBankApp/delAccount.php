<?php

require_once "connection.php";

$id = $_POST['id'];

$sql = "DELETE FROM accounts WHERE id='$id'";

$query = mysqli_query($db,$sql);

if ($query) {
  echo "200";
}else {
  echo "502";
};
