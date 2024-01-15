<?php
// this will retun a svg image 
header('Cache-Control: max-age=3600');
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
// if (isset($_GET["size"])) {

// $size = $_GET["size"];
// // trim the px off the end of the size if it is there
// if (substr($size, -2) == "px") {
//     $size = substr($size, 0, -2);
// }
// // chang the size of the svg
// // $svg = str_replace("width=\"100px\"", "width=\"".$size."\"", $svg);
// // $svg = str_replace("height=\"100px\"", "height=\"".$size."\"", $svg);
// //  the current size is diffent for all all icons we need to use regex to find the size and replace it
// // width="19.9219" height="19.9316"
// // $svg = preg_replace('/width="(\d+)"/', 'width="'.$size.'"', $svg);
// // $svg = preg_replace('/height="(\d+)"/', 'height="'.$size.'"', $svg);
// $svg = preg_replace('/width="(\d+.\d+)"/', 'width="'.$size.'"', $svg);
// $svg = preg_replace('/height="(\d+.\d+)"/', 'height="'.$size.'"', $svg);





// }

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