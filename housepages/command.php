<?php
include_once "/Server/app/support/Apikeyserver.php";
$authtoken = Getapikeyforpath("/Homeserver/dashboard/CommandToken");
$posturl = "http://40.0.1.5/apps/api/950/dashboard/951/command";


// the raw incoming data looks like this: 
// {"id":1018,"cmd":"setVolume","secondary":50}
// we just need to forward it to the hubitat hub at the post url
// we need to set the content type to application/json

//then return the response from the hubitat hub

// get the raw data from the post
$data = file_get_contents('php://input');

// set the content type to application/json
header('Content-Type: application/json');

// use curl to post the data to the hubitat hub
$ch = curl_init($posturl);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data),
    'Authorization: Bearer ' . $authtoken 
));

// return the response from the hubitat hub
$result = curl_exec($ch);
echo $result;
