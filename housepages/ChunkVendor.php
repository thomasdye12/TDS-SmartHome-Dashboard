<?php

// load the app.js file 
// set javascrtip header content type
header('Content-Type: application/javascript');
// set compression
ob_start("ob_gzhandler");
// load the app.js file
$file = "chunk-vendors.js";
if (file_exists($file)) {
    readfile($file);
}
// end compression
ob_end_flush();
?>