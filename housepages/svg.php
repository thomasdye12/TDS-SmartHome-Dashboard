<?php
// this will retun a svg image 

$file = $_GET["name"];

// add .svg to the end of the file name if it is not there
if (substr($file, -4) != ".svg") {
    $file = $file . ".svg";
}
// if the name is he-hour-glass, load the hour glass icon
if ($file == "he-hour-glass.svg") {
    $file = "rays.svg";
}

$svg = file_get_contents("../icons/sf/".$file);



$setcolour = $_GET["colour"];
// if not defined set to rgb(255,255,255)
if ($setcolour == "undefined") {
    $setcolour = "rgb(255,255,255)";
}

// convert rgb(255,255,255)  to hex 


$svg = preg_replace('/#000000/', rgbToHex($setcolour), $svg);


header('Content-Type: image/svg+xml');
ob_start("ob_gzhandler");


echo $svg;
ob_end_flush();
function rgbToHex($rgb) {
    $rgb = explode(',', str_replace('rgb(', '', str_replace(')', '', $rgb)));
    $hex = "#";
    $hex .= str_pad(dechex($rgb[0]), 2, "0", STR_PAD_LEFT);
    $hex .= str_pad(dechex($rgb[1]), 2, "0", STR_PAD_LEFT);
    $hex .= str_pad(dechex($rgb[2]), 2, "0", STR_PAD_LEFT);
   // echo $hex;
    return $hex;
  }