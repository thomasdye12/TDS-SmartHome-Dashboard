<?php
 include_once "../phpfuncs.php";

$json = file_get_contents("/Library/Server/Web/Data/Sites/Homeserver/Dashboard/Newrooms.json");
// decode the json file
$json_data = json_decode($json, true);

$showarry = array();

// loop through the array
foreach ($json_data as $value) {
    // for each room, get the current state of all the devices
    $room = $value['ID'];
    //  $roomstate = getDevicesforroomwithformatting($room);
    // // // add the roomstate to the json data
    // // add to the array the room name, and the roomstate

    // // remove devixe 1115 from the array
    //  $roomstate = array_filter($roomstate, function($var){return $var['id'] != "1115";});
    //  // remove the attr 
    //     foreach ($roomstate as $key => $value1) {
    //         unset($roomstate[$key]['attr']);
    //     }
    // $showarry[] = array('Room' => $value["Name"], 'Devices' => $roomstate);
    
    $showarry[]  = $value["Name"];

}

// make it into a , seperated string
$showarry = implode(", ", $showarry);
echo $showarry;
