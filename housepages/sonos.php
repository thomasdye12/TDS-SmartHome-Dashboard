<?php

$redis_Storage = new Redis();
$redis_Storage->connect('127.0.0.1', 6120);


$code = $_GET["code"];
$sonos = "Top%20Of%20Stairs";


// if code is favorites, get the favarite list from sonos 

if ($code == "favorites") {
    $url = "http://10.0.1.2:5005/".$sonos."/favorites/detailed";
    $cashname = "HomeServerDashboard:" .str_replace("/", "_", base64_encode($url));
    if ($redis_Storage->exists($cashname)) {
        $image = $redis_Storage->get($cashname);
        header('Content-Type: application/json');
        echo $image;
        exit();
    }
    $image = file_get_contents($url);
    header('Content-Type: application/json');
    $redis_Storage->set($cashname, $image);
    $redis_Storage->expire($cashname, 3600);
    echo $image;
    exit();
}




