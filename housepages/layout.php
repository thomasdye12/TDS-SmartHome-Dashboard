 <?php
    include_once "../phpfuncs.php";
    // set header to json
    header('Content-Type: application/json');
    echo json_encode(getlayout());



?>


