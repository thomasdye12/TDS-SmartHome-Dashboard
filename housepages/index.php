<?php
 // setcookie("room", $_GET["Room"], time() + (86400 * 120)); // 86400 = 1 day

include_once "../phpfuncs.php";
// set a cookie for the room
$Room = $_SERVER['HTTP_REFERER'];
// Parse the URL and get the query string
$parsed_url = parse_url($Room);
$query = $parsed_url['query'];

// Parse the query string to get the "room" parameter
parse_str($query, $parameters);
$Room = $parameters['room'];


// break down the url and get the room get parameter
?>

<!DOCTYPE html>
<html lang=en>
<!-- version 2.3.3 -->

<head>
<link rel=stylesheet href=material.min.css>
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
            src: url("/40015/ui2/dashboard2/fonts/hubitat.eot?roox2j#iefix") format("embedded-opentype"),
                url("hubitat.woff2?roox2j") format("woff2"),
                url("/40015/ui2/dashboard2/fonts/hubitat.ttf?roox2j") format("truetype"),
                url("/40015/ui2/dashboard2/fonts/hubitat.woff?roox2j") format("woff"),
                url("/40015/ui2/dashboard2/fonts/hubitat.svg?roox2j#hubitat") format("svg");
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
            dashboardId: "<?php echo $_GET["id"]; ?>",
            Room: "<?php echo $Room; ?>",
            layout:<?php echo json_encode(getlayout($Room)); ?>,
            devices:<?php echo json_encode(getDevicesforroomwithformatting($Room)); ?>
        }
        var url = "/40015/ui2/dashboard2"
        var isLocal = true
        var allowGoBack = true
        var parentToken = "1"
        var parentId = "950"
        var version = "2.3.3"
    </script>

</head>

<body>
    <div id=app></div>
    <!-- <script src=chunk-vendors.js></script>
    <script src=app.js></script> -->
</body>

</html>