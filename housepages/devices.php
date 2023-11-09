<?php
 include_once "../phpfuncs.php";


// set json header
header('Content-Type: application/json');




echo json_encode(getDevicesforroomwithformatting(), JSON_PRETTY_PRINT);
?>