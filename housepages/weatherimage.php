<?php
include_once "/Server/app/support/FastURlcall.php";
include_once "/Server/app/support/Apikeyserver.php";
// set header to image 
 header('Content-Type: image/png');
// get contents from remote server and save it to cash file
$url = "http://hubitat.local.thomasdye.net/apps/api/42/dashboard/" . "888". "/devices2?access_token=".Getapikeyforpath("/Homeserver/dashboard/token");

    $html = file_get_contents($url);
// json decode
    $json = json_decode($html, true);
    // find device 526
    foreach ($json as $device) {
        if ($device["id"] == "526") {
            // loo  over the attributes
            foreach ($device["attr"] as $attribute) {
                // if the attribute is weatherIcon
              //  echo  isset($attribute["weather_icon-url"]);
                if (isset($attribute["weather_icon-url"])) {
                    // get the value
             
                    echo file_get_contents($attribute["weather_icon-url"]);
                }
            }
        
            break;
        }
    }
   
?>