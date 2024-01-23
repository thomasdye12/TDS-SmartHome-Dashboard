<?php
 header('Content-Type: application/json');
 ob_start("ob_gzhandler");
 include_once "../phpfuncs.php";


    $retun = array();
    $issmall = $_GET["small"] == "true" ? true : false;
    // echo "small: " . $_GET["small"] . "\n";
    $room = GetRoom($_GET["room"], $issmall);
    
    $retun["Name"] = $room["Name"];
    $retun["ID"] = $room["ID"];
    $retun["type"] = isset($room["type"]) ? $room["type"] : "room";
    $retun["devices"] = getDevicesforroomwithformatting($_GET["room"]);
    // check for security
    $retun["security"] = $room["security"] ?? false;
    $retun["security_keypad"] = $room["security_keypad"] ?? false;
  
    $retun["layout"] = getlayout($_GET["room"], $issmall );

echo json_encode($retun, JSON_PRETTY_PRINT);
ob_end_flush();
