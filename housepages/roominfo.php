<?php
 header('Content-Type: application/json');
 ob_start("ob_gzhandler");
 include_once "../phpfuncs.php";


    $retun = array();
    $room = GetRoom($_GET["room"]);
    $retun["Name"] = $room["Name"];
    $retun["type"] = isset($room["type"]) ? $room["type"] : "room";
    $retun["Did"] = (isset($room["dashboard-id"]) ? $room["dashboard-id"] : "951");
    $retun["devices"] = getDevicesforroomwithformatting($_GET["room"]);
    // check for security
    $retun["security"] = $room["security"] ?? false;
    $retun["security_keypad"] = $room["security_keypad"] ?? false;
    $retun["layout"] = getlayout($_GET["room"]);

echo json_encode($retun, JSON_PRETTY_PRINT);
ob_end_flush();
