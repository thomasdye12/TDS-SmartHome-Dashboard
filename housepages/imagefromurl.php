<?php

// get the url passed in in the $_GET variable
$url = $_GET["url"];

// get the image from the url
$image = file_get_contents($url);

// set the content type to image
header('Content-Type: image/png');

// output the image
echo $image;
