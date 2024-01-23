<?php

function sonosAPRecentlyPlayed($tile){
    $song = Sonos_getAPRecentlyPlayed()[$tile["TDS_Custom"]["value"]]["attributes"];
    $tile["template"] = "buttons";
    $tile["name"] = $song["name"];
    // song name can only be 5 characters long
    $tile["name"] = substr($tile["name"], 0, 10);
    // in the art work url we need to replace the {h} and {w} with the height and width of the tile
    $size = "200";
    $tile["id"] = 1020103;
    $tile["customIconarray"]["press"] = "URL:".str_replace("{h}", $size , str_replace("{w}", $size , $song["artwork"]["url"]));
    // url encode the url
    $tile["customIconarray"]["customicon"] = true;
    $tile["customIconarray"]["press"] = rawurlencode($tile["customIconarray"]["press"]);
    // playParams
    $tile["templateExtra"] = $song["playParams"]["kind"].":".$song["playParams"]["id"];
    $tile["buttonCommand"] = "AppleMusicNow";



return $tile;
}



function Sonos_getAPRecentlyPlayed(){
    // https://dashboardcomstds-net.local.thomasdye.net/APPLEMUSIC/api/User/thomas/recentlyPlayed
    $url = "https://dashboardcomstds-net.local.thomasdye.net/APPLEMUSIC/api/User/thomas/recentlyPlayed";
    $json = file_get_contents($url);
    $json = json_decode($json, true);
    return $json;
}
