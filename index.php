<?php
// Preload of assets will take place
include_once "phpfuncs.php";

// Show all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

$room = getcurrentroom();
setcookie("room", $room["ID"], time() + (86400 * 900)); // 86400 = 1 day
$smallRoom = isset($_GET["small"]) ? $_GET["small"] : false;
?>

<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="index.css" />
  <!-- <link rel="stylesheet" href="housepages/material.min1.css"> -->
  <script>
    var DevicesPageStore = null;
    var TemplatePageStore = null;
    var RoomToLoad = <?php echo $room["ID"]; ?>;

    var hub = {
      Room:'<?php echo $room["ID"]; ?>',
      layout: <?php echo json_encode(getlayout($room["ID"],$smallRoom)); ?>,
      devices: <?php echo json_encode(getDevicesforroomwithformatting($room["ID"])); ?>,
      rooms:<?php echo json_encode(RoomGrid()); ?>,
    };
  </script>
</head>

<body id="MainBody" class="MainBody">
  <div class="Dashboard" id="Dashboard">
    <div id="app"></div>
  </div>

  <?php
  echo Create_roomName($room);
  echo Create_homeButton();
  echo Create_clock();
  echo Create_RoomGrid();
  ?>





  <!-- Keypad Popup -->
  <div id="keypadPopup" class="keypadwrapper" style="display:none;">
    <div class="diplaytxt">
      <p id="KeypadText">...</p>
    </div>
    <div class="inputwrapper">
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
      <span class="numberinput"></span>
    </div>
    <div class="keypad">
      <div class="unlockinganamtation">
        <div id="lineone" class="numberline">
          <div class="content">
            <div>
              <span class="number">1</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">2</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">3</span>
            </div>
          </div>
        </div>
        <div id="linetwo" class="numberline">
          <div class="content">
            <div>
              <span class="number">4</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">5</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">6</span>
            </div>
          </div>
        </div>
        <div id="linethree" class="numberline">
          <div class="content">
            <div>
              <span class="number">7</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">8</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">9</span>
            </div>
          </div>
        </div>

        <div id="linefour" class="numberline">
          <div class="content">
            <div>
              <span class="number">*</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">0</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">
                close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="BigClockScreen" class="BigClockScreen" style="display:none; position: fixed; width: 100%; height: 100vh; font-size: 150px; text-align: center; line-height: 80vh; color: white; font-family: sans-serif; font-weight: bold;">
    <div id="BigClockLocation" style="position:fixed; top:20px; left:400px; display:flex;align-items:center;">
    <img id="BigWeathericon" src="<?php echo $GLOBALS["weather"]["weather_icon-url"];?>" alt="" class="BigWeathericon">
      <div id="BigClock" class="BigClock">
        00:00
      </div>
    </div>
  </div>

  <script src="Clock.js"></script>
  <script src="Electron.js"></script>
  <script src="RoomPicker.js"></script>
  <script src="housepages/CustomTiles.js"></script>
  <script src="housepages/app.js"></script>
  <script src="housepages/chunk-vendors.js"></script>
  <script src="Mainjs.js"></script>
</body>

</html>