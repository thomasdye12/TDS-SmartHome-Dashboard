
// create a DeviceID 
var ScreenID = "Screen" + Math.floor(Math.random() * 10000000);
hub["ScreenID"] = ScreenID;
console.log("ScreenID is " + ScreenID);

// Add a dividing line
document.getElementById("MyClockDisplay-date").style.fontSize = "15px";
document.getElementById("MyClockDisplay-date").style.fontWeight = "bold";
var MainCurrentHTML = document.getElementById("main").innerHTML;
var myBodyHTML = document.getElementById("myBody").innerHTML;
var ws;
var websocketfordashboard;
var roomDevices;
// WebSocket connection function
function connect() {
  ws = new WebSocket('wss://dashboardcomstds-net.local.thomasdye.net:10000/?devices=526,clock,SideGateBellImage,Lockout,BigClock,PageReload,Sidegatebellimageupdate&Access_main=1');

  ws.onopen = function () {
    console.log('WebSocket connection established');
  };

  ws.onmessage = function (evt) {
    json = JSON.parse(evt.data);

    if (json.deviceId == "526") {
      if (json.name == "weather_icon-url") {
        updateWeatherIcon(json.value);
      }
      if (json.name == "temperature") {
        updateWeatherTemp(json.value);
      }
    } else if (json.deviceId == "clock") {
      updateClock(json.data);
    } else if (json.deviceId == "PageReload") {
      location.assign(location.href);
    } else if (json.deviceId == "BigClock") {
      handleBigClock(json.name);
    } else if (json.deviceId == "Lockout") {
      handleLockout(json.name);
    }
  };

  ws.onclose = function (event) {
    console.log('WebSocket connection closed with code ', event.code, ' and reason ', event.reason);

    // Try to reconnect after a short delay
    setTimeout(function () {
      connect();
    }, 90000);
  };
  ws.onerror = function (err) {
    // reconnect on errors
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
    // reconnect after a short delay
    setTimeout(function () {
      connect();
    }, 90000);

  };
}

// Start the initial WebSocket connection
connect();



var sidebarLinks = document.getElementsByClassName("sidebar-link");

for (var i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener("click", function(e) {
    // Preventing the mouse event if it's a touch device
    // if (isTouchDevice) 
    // e.preventDefault();
    updateSidebar(this.getAttribute("data-id"));
  });
}


if (params.get('autorefresh') != null) {
  setInterval(function () {
    location.reload();
  }, 30000);
}


function LockOut() {
  MainCurrentHTML = document.getElementById("main").innerHTML;
  console.log("Locked out");
  document.body.innerHTML = '<div id="BigClock" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; font-size: 120px; text-align: center; line-height: 100vh; color: white;  font-family: sans-serif; font-weight: bold;">Locked Out</div>';
}

function Unlock() {
  clockShowing = false;
  location.assign(location.href);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper functions

function updateWeatherIcon(value) {
  if (document.getElementById("Weathericon") != null) {
    var newvalue = value.replace("weatherapi.server.thomasdye.net", "weatherapitds.server.thomasdye.net");
    document.getElementById("Weathericon").src = newvalue;
  }
}

function updateWeatherTemp(value) {
  if (document.getElementById("Weathertemp") != null) {
    document.getElementById("Weathertemp").innerHTML = value;
  }
}



function handleLockout(name) {
  if (name == "Lockout") {
    LockOut();
  }
  if (name == "Unlock") {
    Unlock();
  }
}



function updateSidebar(roomId) {
  var head = document.head;
      // Get all <style> elements within the <head>
      var styleTags = head.querySelectorAll('style[type="text/css"]');
  

  fetch("housepages/roominfo.php?room=" + roomId)
  .then(response => response.json())
  .then(json => {
    hub["Room"] = roomId;
    hub["dashboardId"] = json.Did;
    hub["layout"] = json.layout;
    hub["devices"] = json.devices;
    MainCurrentHTML = document.getElementById("main").innerHTML;
      // Loop through the <style> elements and remove them
      styleTags.forEach(function (styleTag) {
        styleTag.parentNode.removeChild(styleTag);
      });
      
    LoadDeviceScreen();
  });

  var current = document.getElementsByClassName("is-active");
  current[0].className = current[0].className.replace(" is-active", "");
  var sidebarLink = document.querySelector(`[data-id="${roomId}"]`);
  sidebarLink.className += " is-active";

  // var iframe = document.getElementById("MainIframe");
  var currentUrl = window.location.href;
  var currentParams = new URLSearchParams(window.location.search);
  currentParams.set("room", roomId);
  var newUrl = currentUrl.split("?")[0] + "?" + currentParams.toString();
  history.pushState({}, "", newUrl);



}
