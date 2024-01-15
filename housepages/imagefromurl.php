<?php

$redis_Storage = new Redis();
$redis_Storage->connect('127.0.0.1', 6120);
// get the url passed in in the $_GET variable
$url = $_GET["url"];
// check if the url is in the cache

// if it is, return the image
$cashname = "HomeServerDashboard:" .str_replace("/", "_", base64_encode($url));
if ($redis_Storage->exists($cashname)) {
    $image = $redis_Storage->get($cashname);
    header('Content-Type: image/png');
    echo $image;
    exit();
}

// get the image from the url
$image = file_get_contents($url);

// set the content type to image
header('Content-Type: image/png');
// add the image to the cache
$redis_Storage->set($cashname, $image);
$redis_Storage->expire($cashname, 3600);
// output the image
echo $image;
