<?php
// include_once "/Server/app/support/Apikeyserver.php";
// $authtoken = Getapikeyforpath("/Homeserver/dashboard/CommandToken");
// $posturl = "http://40.0.1.5/apps/api/950/dashboard/951/command";


// the raw incoming data looks like this: 
// {"id":1018,"cmd":"setVolume","secondary":50}
// we just need to forward it to the hubitat hub at the post url
// we need to set the content type to application/json

//then return the response from the hubitat hub

// get the raw data from the post
$data = file_get_contents('php://input');
$data1 = json_decode($data, true);
// set the content type to application/json
header('Content-Type: application/json');

// send code to the new api 
$url = "http://homeserverapiinternal.local.thomasdye.net/Brain/api/devices/".$data1["id"];
// add the command to the url
$url = $url."/".$data1["cmd"];
// add the secondary command to the url if not ""
if ($data1["secondary"] != "") {
    $url = $url."/".$data1["secondary"];
}

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
));
$result = curl_exec($ch);
// echo $result;
// close 
curl_close($ch);

// {
//     "result": "command sent",
//     "poll": [
//         {
//             "id": 216,
//             "label": "Thomas 11",
//             "attr": [
//                 {
//                     "switch": "off",
//                     "unit": "null"
//                 }
//             ]
//         }
//     ]
// }
sleep(1);
$state = file_get_contents("http://homeserverapiinternal.local.thomasdye.net/Brain/api/devices/".$data1["id"]);
$state = json_decode($state,true);
$atts = array();
foreach ($state["attributes"] as $key => $value) {
    $atts[] = array(
        $key => $value,
        "unit" => ""
    );
 }



$output = [
    "result" => "command sent",
    "poll" =>[
        [
            "id" => $data1["id"],
            "label" => "",
            "attr" => $atts
        ]
    ]
];
echo json_encode($output, JSON_PRETTY_PRINT);





// // use curl to post the data to the hubitat hub
// $ch = curl_init($posturl);
// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
// curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//     'Content-Type: application/json',
//     'Content-Length: ' . strlen($data),
//     'Authorization: Bearer ' . $authtoken 
// ));

// // return the response from the hubitat hub
// $result = curl_exec($ch);
// echo $result;
