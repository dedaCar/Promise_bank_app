<?php

require_once 'connection.php';
$sql = "SELECT * FROM accounts";

$query = mysqli_query($db,$sql);

echo json_encode(mysqli_fetch_all($query,MYSQLI_ASSOC));
