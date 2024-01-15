var ws;
var roomDevices;
// WebSocket connection function
function connect() {
  ws = new WebSocket('wss://dashboardcomstds-net.local.thomasdye.net:10000/?Access_main=1');

  ws.onopen = function () {
    console.log('WebSocket connection established');
    // Send a message to the server
    // const devices = hub["devices"] 
    //  map the dvices from deviceID to just the deviceid in an array
    const deviceIds = hub["devices"].map(device => device.id);
    console.log("Sending deviceIds to server: ", deviceIds);
    SendDeviceToWebSocket(deviceIds);
  };

  ws.onmessage = function (evt) {
    DeviceEventMessage(evt);
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
      // reload the page 
      location.reload();
    }, 90000);

  };
}

// Start the initial WebSocket connection
connect();
//  run code on page load 

// auto refres if key set with time 

if (params.get('autorefresh') != null) {
  autorefresh = params.get('autorefresh');
  console.log("autorefresh is set to " + autorefresh);
  setInterval(function () {
    location.reload();
  }

    , autorefresh * 1000);
}



function SendDeviceToWebSocket(SubDevices) {
  var RootDevices = ["526", "clock", "SideGateBellImage", "Lockout", "BigClock", "PageReload", "Sidegatebellimageupdate"];
  // combine the two arrays
  roomDevices = RootDevices.concat(SubDevices);

  ws.send(JSON.stringify({
    "name": "subscribe",
    "devices": roomDevices
  }));
}

function DeviceEventMessage(event) {
  json = JSON.parse(event.data);

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
  } else {
    // sending the device to the system

    var o = hub.DeviceConnect.devices.find((function (t) {
      return t.id == json.deviceId
    }
    ));
    if (void 0 != o) {
      var a = o.attr.find((function (t) {
        return Object.keys(t).indexOf(json.name) > -1
      }
      ));
      // console.log(e);
      void 0 != a && void 0 != json.value && (a[json.name] = json.value)
    }

  }
}






// Helper functions

function updateWeatherIcon(value) {
  if (document.getElementById("Weathericon") != null) {
    var newvalue = value.replace("weatherapi.server.thomasdye.net", "weatherapitds.server.thomasdye.net");
    document.getElementById("Weathericon").src = newvalue;
    document.getElementById("BigWeathericon").src =  newvalue;
  }
}

function updateWeatherTemp(value) {
  if (document.getElementById("Weathertemp") != null) {
    document.getElementById("Weathertemp").innerHTML = value;
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
      // Loop through the <style> elements and remove them
      // styleTags.forEach(function (styleTag) {
      //   styleTag.parentNode.removeChild(styleTag);
      // });


      // security check is set then, ask for a PIN, and there will be a device ID too 
      if (json.security == true) {
        ShowKeypad("Access " + json.Name,function (code) {
          validatePIN(code, json.security_keypad, function (isValid) {
            if (isValid) {
              window.DevicesPageStore.getData();
              SendDeviceToWebSocket(json.devices.map(device => device.id));
              // alert("PIN accepted. Access granted!");
              CancelKeypad();
            } else {
              CancelKeypad();
              // alert("Incorrect PIN. Access denied!");
            }
          });
        });


      } else {
        // // if no security, then just load the screen
        // LoadDeviceScreen();
        // DevicesPageStore.commit("SET_LAYOUT",json.layout)
        // DevicesPageStore.commit("SET_DEVICES",json.devices)
        window.DevicesPageStore.getData();
        SendDeviceToWebSocket(json.devices.map(device => device.id));
        // window.DevicesPageStore.pollLayout();
        // window.DevicesPageStore.pollDevices();
        // window.DevicesPageStore.pollGlobalVariables();
      }


    });

  var current = document.getElementsByClassName("is-active");
  current[0].className = current[0].className.replace(" is-active", "");
  var sidebarLink = document.querySelector(`[data-id="${roomId}"]`);
  sidebarLink.className += " is-active";

  // var iframe = document.getElementById("MainIframe");
  // if (json.security == false) {
  var currentUrl = window.location.href;
  var currentParams = new URLSearchParams(window.location.search);
  currentParams.set("room", roomId);
  var newUrl = currentUrl.split("?")[0] + "?" + currentParams.toString();
  history.pushState({}, "", newUrl);
  // }



}


// Function to validate the PIN using an API (simulated)
function validatePIN(pin, keypad, callback) {
  // Make an API request to your server to validate the PIN
  fetch('https://dashboardcomstds-net.local.thomasdye.net/dashboard/housepages/KeypadPin.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // {"id":1115,"cmd":"setLevel","secondary":70}
    body: JSON.stringify({
      id: keypad,
      cmd: "testUnlockWithCode",
      secondary: pin
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('API request failed');
      }
    })
    .then(data => {
      callback(data.attributes.lock == "unlocked"); // Assuming the server responds with an 'isValid' property
    })
    .catch(error => {
      console.error('Error:', error);
      callback(false);
    });
}


// keypad code here 
var KeypadPin = "";
var keypadCallback;
// cancel function
function CancelKeypad() {
  KeypadPin = "";
  document.getElementById('keypadPopup').style.display = 'none';
  keypadCallback = null;
  var numberInputs = document.querySelectorAll('.numberinput');

  for (var i = 0; i < numberInputs.length; i++) {
    numberInputs[i].textContent = ''; // Clear the text content
    numberInputs[i].classList.remove('nocircle'); // Remove the 'nocircle' class
  }
}
// show keypad 
function ShowKeypad(name,callback) {
  document.getElementById('KeypadText').innerText = name;
  document.getElementById('keypadPopup').style.display = 'block';
  document.querySelectorAll(".content").forEach(function (element) {
    element.addEventListener("click", handleButtonClick);
  });
  // Store the callback function
  keypadCallback = callback;


}

// ketpad button click
function handleButtonClick(event) {
  var clickedElement = event.target;
  if (clickedElement.classList.contains('number')) {
    var number = clickedElement.textContent.trim();

    // Handle Close Button
    if (number.toLowerCase() === 'close') {
      CancelKeypad();
      return;
    }
    console.log(event.target.textContent.replace(/^\s+|\s+$/g, ''));
    const buttonValue = event.target.textContent.replace(/^\s+|\s+$/g, '');
    // audioClick.play();
    if (buttonValue === "*") {
      keypadCallback(KeypadPin);
      // sendDataToServer(codeString, roomId, ws);
    } else {
      KeypadPin += buttonValue;
      var numberInputs = document.querySelectorAll('.numberinput');

      for (var i = 0; i < numberInputs.length; i++) {
        var element = numberInputs[i];
        var textContent = element.textContent || element.innerText;

        if (!textContent.trim()) {
          element.textContent = '*';
          element.classList.add('nocircle');
          break; // exit the loop once the first empty element is found and updated
        }
      }
      // sendCode(codeString, roomId);
    }
  }
}