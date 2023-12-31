<?php
// include_once "/Server/app/support/Apikeyserver.php";
// $authtoken = Getapikeyforpath("/Homeserver/dashboard/CommandToken");
// $posturl = "http://40.0.1.5/apps/api/950/dashboard/951/command";


// the raw incoming data looks like this: 
// {"id":1018,"cmd":"setVolume","secondary":50}
// we just need to forward it to the hubitat hub at the post url
// we need to set the content type to application/json

//then return the response from the hubitat hub

// get the raw data from the post
$data = file_get_contents('php://input');
$data1 = json_decode($data, true);
// set the content type to application/json
header('Content-Type: application/json');

// send code to the new api 
$url = "http://homeserverapiinternal.local.thomasdye.net/Brain/api/devices/".$data1["id"];
// add the command to the url
$url = $url."/".$data1["cmd"];
// add the secondary command to the url if not ""
if ($data1["secondary"] != "") {
    $url = $url."/".$data1["secondary"];
}

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
));
$result = curl_exec($ch);
// echo $result;
// close 
curl_close($ch);
echo $result;
