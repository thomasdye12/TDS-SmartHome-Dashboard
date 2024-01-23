<?php
// this will retun a svg image 
header('Cache-Control: max-age=3600');
$file = $_GET["name"];

// if it starts URL: load the file from the URL
if (substr($file, 0, 4) == "URL:") {
    $redis_Storage = new Redis();
    $redis_Storage->connect('127.0.0.1', 6121);
    $cashname = "HomeServerDashboard:" .str_replace("/", "_", base64_encode($file));
    if ($redis_Storage->exists($cashname)) {
        $image = $redis_Storage->get($cashname);
        header('Content-Type: image/png');
        echo $image;
        exit();
    }


    $svg = file_get_contents(substr($file, 4));
    header('Content-Type: image/png');
    ob_start("ob_gzhandler");
    $redis_Storage->set($cashname, $svg, 3600);
    echo $svg;
    ob_end_flush();
    exit;
}



// if the file has a .png or .jpg extension, load the file from the icons folder
if (substr($file, -4) == ".png" || substr($file, -4) == ".jpg") {
    $svg = file_get_contents("../icons/img/".$file);
    header('Content-Type: image/png');
    ob_start("ob_gzhandler");
    echo $svg;
    ob_end_flush();
    exit;
}




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
// if colour1 is defined replace the colour in the svg
if (isset($_GET["colour1"])) {
    $colour1 = $_GET["colour1"];
    $setcolour = $colour1;
}



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