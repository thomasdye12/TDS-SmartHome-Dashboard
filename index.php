<?php
// Preload of assets will take place
include_once "phpfuncs.php";

// Show all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

$room = getcurrentroom();
setcookie("room", $room["ID"], time() + (86400 * 30)); // 86400 = 1 day
?>

<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="Main.css" />
  <style>
    @font-face {
      font-family: MaterialIcons;
      src: url('MaterialIcons-Regular.woff2');
    }
  </style>
  <link rel="stylesheet" href="housepages/material.min.css">
  <style>
    @font-face {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: 400;
      src: url('/40015/ui2/dashboard2/fonts/MaterialIcons-Regular.eot');
      /* For IE6-8 */
      src: local('Material Icons'), local('MaterialIcons-Regular'), url('MaterialIcons-Regular.woff2') format('woff2'), url('/40015/ui2/dashboard2/fonts/MaterialIcons-Regular.woff') format('woff'), url('/40015/ui2/dashboard2/fonts/MaterialIcons-Regular.ttf') format('truetype');
      font-display: block;
    }

    @font-face {
      font-family: "hubitat";
      src: url("/40015/ui2/dashboard2/fonts/hubitat.eot?roox2j");
      src: url("/40015/ui2/dashboard2/fonts/hubitat.eot?roox2j#iefix") format("embedded-opentype"), url("hubitat.woff2?roox2j") format("woff2"), url("/40015/ui2/dashboard2/fonts/hubitat.ttf?roox2j") format("truetype"), url("/40015/ui2/dashboard2/fonts/hubitat.woff?roox2j") format("woff"), url("/40015/ui2/dashboard2/fonts/hubitat.svg?roox2j#hubitat") format("svg");
      font-weight: 400;
      font-style: normal;
      font-display: block;
    }

    html {
      -webkit-text-size-adjust: 100%;
      /* Prevent font scaling in landscape while allowing user zoom */
    }
  </style>
  <script>
    var hub = {
      hubId: "1",
      token: "1",
      hubURL: "<?php echo $_SERVER['HTTP_HOST']?>/40015",
      appId: "950",
      dashboardId: "<?php echo (isset($room["dashboard-id"]) ? $room["dashboard-id"] : "951"); ?>",
      Room: "<?php echo $room["ID"]; ?>",
      layout: <?php echo json_encode(getlayout($room["ID"])); ?>,
      devices: <?php echo json_encode(getDevicesforroomwithformatting($room["ID"])); ?>,
      Websocketurl: "wss://" + "dashboardcomstds-net.local.thomasdye.net" + ":10000",
      WebSocketTimeout: 300,
    };
    var isLocal = true;
    var allowGoBack = true;
    var parentToken = "1";
    var parentId = "950";
  </script>
</head>

<body id="myBody">
  <div class="main" id="main">
    <div id="app"></div>
    <?php
    // Create iframe to fill the main class with no border and no scrollbars and fills the height and width of the main class
    // echo "<iframe id='MainIframe' src='"."housepages/index.php?id=".(isset($room["dashboard-id"]) ? $room["dashboard-id"] : "951")."&Room=".$room["ID"]."' frameborder='0'  allowtransparency='true' class='mainiframe'></iframe>";
    ?>


  </div>

  <div class="sidebar">
    <?php
    // Add image to the top of the sidebar
    echo loadroomsidebar();
    ?>
  </div>
  <script src="Clock.js"></script>
  <script src="housepages/AppJS.php"></script>
  <script src="housepages/ChunkVendor.php"></script>
  <script src="Mainjs.js"></script>
</body>

</html>
