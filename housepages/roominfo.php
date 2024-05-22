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
     // set the browser cookie to the room, set the path /dashboard so it is available to all page
    setcookie("room", $room["ID"], time() + (86400 * 900), "/dashboard"); // 86400 = 1 day

echo json_encode($retun, JSON_PRETTY_PRINT);
ob_end_flush();
