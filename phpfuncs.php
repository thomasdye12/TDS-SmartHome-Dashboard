<?php
// $redis_Storage = new Redis();
// $redis_Storage->connect('127.0.0.1', 6120);
$version = "10.0.0:1";
// function loadroomsidebar()
// {
//     global $version;
//     $retunval = "";
//     // get content from the json file
//     $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

//     // decode the json file
//     $json_data = json_decode($json, true);
//     $currentroom = getcurrentroom();

//     // loop through the json data
//     // usort mutliple arrays
//     usort($json_data, function ($a, $b) {
//         if (isset($a["bottom"]) && $a["bottom"] === true) {
//             return 1;
//         }
//         if (isset($b["bottom"]) && $b["bottom"] === true) {
//             return -1;
//         }
//         if ($a["Name"] == "Home") {
//             return -1;
//         }
//         if ($b["Name"] == "Home") {
//             return 1;
//         }
//         return strcmp($a["Name"], $b["Name"]);
//     });

//     // and display the data in the sidebar

//     $retunval .= '<div class="SidebarHeader">';
//     $weatherinfo = getWeatherData();
//     $retunval .= '<div class="Sidebarweather">';
//     $retunval .= '<div class="SidebarHeaderImage">';
//     $retunval .= '<img  id="Weathericon"src="' . $weatherinfo["weather_icon-url"] . '" alt="" class="SidebarHeaderImage">';
//     $retunval .= '</div>';
//     // add the temprature to the header
//     $retunval .= '<div class="SidebarHeaderTemp">';
//     // set text coliur to white 
//     $retunval .= '<p id="Weathertemp" style="color:white; margin:0 ">' . $weatherinfo["temperature"] . '°C</p>';
//     $retunval .= '</div>';
//     $retunval .= '</div>';
//     $retunval .= '<div  id="Sidebarclocks" class="Sidebarclocks">';
//     $retunval .= '<div id="MyClockDisplay" class="clock"></div>';
//     $retunval .= '<div id="MyClockDisplay-date" class="clock"></div>';
//     $retunval .= '</div>';


//     $retunval .= '</div>';



//     $retunval .= '<div class="sidebar-container">';
//     $retunval .= ' <div class="side-menu">';
//     foreach ($json_data as $key => $value) {
//         // add image to the sidebar
//         // icons from https://icons8.com/icons/set/room
//         // give current room a different color

//         // $retunval .= '<div class="sidebar-link" data-href="index.php?room=' . $value["ID"] . '>';
//         $retunval .= '<a class="sidebar-link ' . ($value["ID"] == $currentroom["ID"] ?  "is-active" : "") . '" data-href="index.php?room=' . $value["ID"] . '" data-id="' . $value["ID"] . '">';

//         $retunval .= '<svg object-fit:cover;>';
//         $svg = file_get_contents((dirname(__FILE__) . "/icons/sf/" . (isset($value["iconsvg"]) ? $value["iconsvg"] : "house") . ".svg"));
//         $setcolour = "rgb(255,255,255)";
//         // if there is an iconColor then set the colour to that
//         if (isset($value["iconColor"])) {
//             $setcolour = $value["iconColor"];
//         }
//         $svg = preg_replace('/#000000/', rgbToHex($setcolour), $svg);
//         $retunval .=  $svg;
//         $retunval .= ' </svg>';
//         $retunval .= '<span class="sidebar-link-text">';
//         $retunval .= $value['Name'];
//         $retunval .= '</span>';
//         $retunval .= '</a>';
//         //    $retunval .= '</div>';
//     }

//     $retunval .= '<div class="version-id">ID: ' . $version . '</div>'; // Add this line to display the version ID
//     $retunval .= '</div>';
//     $retunval .= '</div>';



//     return $retunval;
// }

// create rooms for room grid 

function RoomGrid()
{
    // get content from the json file
    $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

    // decode the json file
    $json_data = json_decode($json, true);
    $currentroom = getcurrentroom();
    $output = [];
    // loop through the json data

    foreach ($json_data as $key => $value) {
        $room = [];
        $room["ID"] = $value["ID"];
        $room["Name"] = $value["Name"];
        $room["iconsvg"] = $value["iconsvg"] ?? "house";
        $room["iconColor"] = $value["iconColor"] ?? "rgb(255,255,255)";
        $room["bottom"] = $value["bottom"] ?? false;
        $room["current"] = $value["ID"] == $currentroom["ID"] ?  true : false;
        $output[] = $room;
    }
    return $output;
}

// get current room based on url get request
function getcurrentroom($room = null)
{
    if (isset($room)) {
        // look for the room in the json file
        $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

        $json_data = json_decode($json, true);
        foreach ($json_data as $key => $value) {
            if ($value['ID'] == $room) {
                return $value;
            }
        }
    }


    if (isset($_GET['room'])) {
        // look for the room in the json file
        $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

        $json_data = json_decode($json, true);
        foreach ($json_data as $key => $value) {
            if ($value['ID'] == $_GET['room']) {
                return $value;
            }
        }
    }
    if (isset($_COOKIE['room'])) {
        // look for the room in the json file
        $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

        $json_data = json_decode($json, true);
        foreach ($json_data as $key => $value) {
            if ($value['ID'] == $_COOKIE['room']) {
                return $value;
            }
        }
    }
    $json = file_get_contents(dirname(__FILE__) . '/Newrooms.json');

    $json_data = json_decode($json, true);
    return $json_data[0];
}
function getcurrentroomfromdashboardid()
{
    if (isset($_GET['room'])) {
        // look for the room in the json file
        $json = file_get_contents(dirname(__FILE__) . '/rooms.json');

        $json_data = json_decode($json, true);
        foreach ($json_data as $key => $value) {
            if ($value['dashboard-id'] == $_GET['room']) {
                return $value;
            }
        }
    }
    return "home";
}
function add_defult_items($room)
{
    //$room = addweatherdata($room);
    if (isset($room["Centralheating"]) && $room["Centralheating"] == true) {
        $centralheating = array();
        $centralheating["template"] = "thermostat";
        $centralheating["device"] = "1274";
        $centralheating["startx"] = 0;
        $centralheating["starty"] = 0;
        $centralheating["width"] = 4;
        $centralheating["height"] = 2;
        $room["tiles"][] = $centralheating;
    }


    return $room;
}

function getScreenFromIP()
{
    // get the ip of the client
    $ip = $_SERVER['REMOTE_ADDR'];

    // switch the ip to the screen id
    switch ($ip) {
        case '10.0.1.40':
            return "1115";
            break;
        case '40.0.3.40':
            return "1115";
            break;
        case '70.0.1.17': // thomas room
            return "1115";
            break;
        case '70.0.1.16': // hall
            return "1114";
            break;
        case '70.0.1.18': // backdoor
            return "1112";
            break;
        case '70.0.1.22': // aidans room
            return "1363";
            break;
        case '70.0.1.31':
            return "1406";
            break;
        default:
            return null;
            break;
    }
}

function GetRoom($room = null)
{
    $room = getcurrentroom($room);
    $room = add_defult_items($room);
    return $room;
}
function getlayout($room = null)
{
    $defaultlayout = file_get_contents(dirname(__FILE__) . "/defaultlayout.json");
    $defaultlayout = json_decode($defaultlayout, true);
    $defaultlayoutcustomcolours = file_get_contents(dirname(__FILE__) . "/customlayout.json");
    $defaultlayoutcustomcolours = json_decode($defaultlayoutcustomcolours, true);
    // loop thought defaultlayoutcustomcolours and remove any that have a state of default
    // foreach ($defaultlayoutcustomcolours as $key => $value) {
    //     if ($value["state"] == "default") {
    //         unset($defaultlayoutcustomcolours[$key]);
    //     }
    // }
    // load the current room from the url
    $room = getcurrentroom($room);
    $room = add_defult_items($room);
    $defaultlayout["customColors"] = $defaultlayoutcustomcolours;
    foreach ($room["tiles"] as &$value) {
        // if hide is set and true then skip this tile
        if (isset($value["hide"]) && $value["hide"] == true) {
            continue;
        }

        $value["col"] = $value["startx"] + 1;
        $value["row"] = $value["starty"] + 1;
        // // if col is 0 then set it to 1
        // if ($value["col"] == 0) {
        //     $value["col"] = 1;
        // }
        // // if row is 0 then set it to 1

        // if ($value["row"] == 0) {
        //     $value["row"] = 1;
        // }
        $value["colSpan"] = $value["width"] * 10;
        $value["rowSpan"] = $value["height"] * 10;

        if (!isset($value["templateExtra"])) {
            $value["templateExtra"] = null;
        }

        // unset($value["height"]);
        // unset($value["startx"]);
        // unset($value["width"]);
        // unset($value["starty"]);
        // if the id is not set then set it to the name
        if (!isset($value["id"])) {
            $value["id"] = $value["device"] ?? "";
        }
    }



    $defaultlayout["tiles"] = $room["tiles"];

    //

    // json encode the layout
    //$layout = json_encode($defaultlayout, JSON_PRETTY_PRINT);
    // echo the layout
    return $defaultlayout;
}

function getDevicesforroomwithformatting($room = null)
{
    global $redis_Storage;
    $room = getcurrentroom($room);

    // loop over devices in the array that are in the room and add them to return array

    $room = add_defult_items($room);


    // loop over the tiles in the room 
    $returnarray = array();
    foreach ($room["tiles"] as $roomdevice) {
        $Device = array();
        $atts = array();
        $Device["id"] = $roomdevice["device"] ?? "";
        // {
        //     "id": "1139",
        //     "label": "Garage door",
        //     "name": "Garage Door",
        //     "type": "Virtual Simple Garage Door Controller",
        //     "attr": [{
        //         "door": "open",
        //         "unit": ""
        //     }, {
        //         "deviceConfigured": false,
        //         "unit": ""
        //     }]
        // }

        // get state from homeserverapi
        if (isset($roomdevice["device"])) {
            $state = file_get_contents("http://homeserverapiinternal.local.thomasdye.net/Brain/api/devices/" . $roomdevice["device"]);
            $state = json_decode($state, true);
            $Device["name"] = $state["name"];
            $Device["label"] = $state["label"];
            $Device["type"] = $state["type"];
            // loop over the items in the attributes 
            foreach ($state["attributes"] as $key => $value) {
                $atts[] = array(
                    $key => $value,
                    "unit" => ""
                );
            }
            $Device["attr"] = $atts;
        }
        //if roomdevice has a name then use that 
        if (isset($roomdevice["name"])) {
            $Device["name"] = $roomdevice["name"];
            $Device["label"] = $roomdevice["name"];
        }

        // trim out the room name from the device name, lowercase
        $Device["label"] = str_replace(strtolower($room["Name"] . " "), "", strtolower($Device["label"] ?? ""));
        // if the room is Conservatory remove con from the name 
        if ($room["Name"] == "Conservatory") {
            $Device["label"] = str_replace("con ", "", strtolower($Device["label"] ?? ""));
        }
        // add first letter capitalised
        $Device["label"] = ucfirst($Device["label"] ?? "");
        $returnarray[] = $Device;
    }
    return $returnarray;
}


function getWeatherData()
{
    $device = "526";
    $state = file_get_contents("http://homeserverapiinternal.local.thomasdye.net/Brain/api/devices/" . $device);
    $state = json_decode($state, true);
    $weatherarry = array();
    $weatherarry = $state["attributes"];

    //     $weatherarry["weather_icon-url"] = json_decode($redis_Storage->get('DeviceState:Hubitat:'.$device.":weather_icon-url"),true)["value"];
    //     $weatherarry["temperature"] = json_decode($redis_Storage->get('DeviceState:Hubitat:'.$device.":temperature"),true)["value"];
    // // in the weather icon url replace weatherapi.server.thomasdye.net with weatherapi1.server.thomasdye.net
    $weatherarry["weather_icon-url"] = str_replace("weatherapi.server.thomasdye.net", "weatherapitds.server.thomasdye.net", $weatherarry["weather_icon-url"]);
    return $weatherarry;
}


function cors()
{

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    //  echo "You have CORS!";
}
cors();

function rgbToHex($rgb)
{
    // if its already a hex then return it
    if (strpos($rgb, '#') !== false) {
        return $rgb;
    }
    $rgb = explode(',', str_replace('rgb(', '', str_replace(')', '', $rgb)));
    $hex = "#";
    $hex .= str_pad(dechex($rgb[0]), 2, "0", STR_PAD_LEFT);
    $hex .= str_pad(dechex($rgb[1]), 2, "0", STR_PAD_LEFT);
    $hex .= str_pad(dechex($rgb[2]), 2, "0", STR_PAD_LEFT);
    // echo $hex;
    return $hex;
}


// V5



// home button code 


function Create_homeButton()
{
    $retunval = '<div class="HomeButton" id="HomeButton">';
    $retunval .= '<a>';
    // img 
    $retunval .= '<img src="housepages/svg.php?name=house&colour=rgb(255,255,255)" alt="" style="width:100%">';
    $retunval .= '</a>';
    $retunval .= '</div>';
    return $retunval;
}
// clock bottom right 
function Create_clock()
{
    $weatherinfo = getWeatherData();
    $retunval = '<div class="ClockAndWeather">';
    $retunval .= '<div class="clock" id="clock">';
    $retunval .= '<div id="MyClockDisplay" class="clock">00:00</div>';
    $retunval .= '</div>';

    $retunval .= '<div class="weathericon" >';
    $retunval .= '<img id="weathericon" src="' . $weatherinfo["weather_icon-url"] . '" alt="" style="width:100%">';
    $retunval .= '</div>';
    $retunval .= '<div class="weatherTemp">';
    $retunval .= '<p id="Weathertemp">' . $weatherinfo["temperature"] . '°C</p>';
    $retunval .= '</div>';

    $retunval .= '</div>';
    return $retunval;
}
// room name top middle
function Create_roomName($room)
{
    $retunval = '<div class="RoomName">';
    $retunval .= '<p id="RoomName">' . $room["Name"] . '</p>';
    $retunval .= '</div>';
    return $retunval;
}

//  room grid fill here we will create this in js later
function Create_RoomGrid()
{
    $retunval = '<div class="RoomGrid hidden " id="RoomGrid">';
    $retunval .= '</div>';
    return $retunval;
}
