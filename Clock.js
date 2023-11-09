var clockInterval;
var timeout = 120; // number of seconds before clock appears
var timeoutId;
var clockShowing = false;
var supportingclock = false;
// Clock on timeout 
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

if (params.get('Clockontimeout') != null) {
  timeout = params.get('Clockontimeout');
} else {
  timeout = 120;
}

hub["WebSocketTimeout"] = timeout;

supportingclock = true;
clockInterval = setInterval(checkClock, 2000);
console.log("Clockontimeout is set to " + timeout);

document.body.addEventListener("mousemove", resetClock);
document.body.addEventListener("keypress", resetClock);
document.body.addEventListener("touchstart", resetClock);

function checkClock() {
  if (!clockShowing) {
    timeout -= 1;
    if (timeout <= 0) {
      showClock();
    }
  }
}

function resetClock() {
  if (params.get('Clockontimeout') != null) {
    timeout = params.get('Clockontimeout');
  } else {
    timeout = 120;
  }

  if (clockShowing) {
    hideClock();
  }
}

// function showClock() {
//   MainCurrentHTML = document.getElementById("main").innerHTML;
//   clockShowing = true;
//   console.log("show clock");
//   document.getElementById("main").innerHTML = '<div id="BigClock" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; font-size: 150px; text-align: center; line-height: 100vh; color: white;  font-family: sans-serif; font-weight: bold;">00:00</div>';
//   // send message down wss to say that it can drop all other connectiosn for this screenID 
//   const Joson = {
//     "name": "ShowClock",
//     "screenID": ScreenID
//   };
//   ws.send(JSON.stringify(Joson));
// }

function showClock() {
  // Store the current HTML content of the "main" element
  const mainElement = document.getElementById("main");
  MainCurrentHTML = mainElement.innerHTML;
  clockShowing = true;
  // Create a clock element and set its attributes
  const clockElement = document.createElement("div");
  clockElement.id = "BigClock";
  clockElement.style = "position: absolute; top: 0; left: 0; width: 100%; height: 80vh; font-size: 150px; text-align: center; line-height: 80vh; color: white; font-family: sans-serif; font-weight: bold;";
  clockElement.textContent = "00:00";

  // Replace the content of the "main" element with the clock element
  mainElement.innerHTML = '';

  mainElement.appendChild(clockElement);
  // add a tint as an overlay to make the screen gray 
  const tintElement = document.createElement("div");
  tintElement.id = "tint";
  tintElement.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: black; opacity: 0.7;";
  // document.getElementById("main").appendChild(tintElement);
  //  add to the hole body
  document.body.appendChild(tintElement);
  

  // Send a message over WebSocket to indicate showing the clock
  const message = {
      name: "ShowClock",
      screenID: ScreenID
  };
  ws.send(JSON.stringify(message));

}



function hideClock() {
  clockShowing = false;
  console.log("hide clock");
  document.getElementById("main").innerHTML = MainCurrentHTML;
  // remove the tint
  document.getElementById("tint").remove();
  LoadDeviceScreen();
}

function updateClock(data) {
    var time = data.hours + ":" + data.minutes;
    var todaydate = data.day + '/' + data.month;
    if (document.getElementById("MyClockDisplay") != null) {
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("MyClockDisplay-date").innerText = todaydate;
    document.getElementById("MyClockDisplay-date").textContent = todaydate;
    }
  
    if (document.getElementById("BigClock") != null) {
      document.getElementById("BigClock").innerText = time;
      document.getElementById("BigClock").textContent = time;
  
      if (data.Loc != undefined) {
        document.getElementById("BigClock").style.top = data.Loc.top;
        document.getElementById("BigClock").style.left = data.Loc.left;
      } else {
        document.getElementById("BigClock").style.top = "0px";
        document.getElementById("BigClock").style.left = "0px";
      }
    }
  }
  
  function handleBigClock(name) {
    if (name == "ShowClock") {
      ``
      clockShowing = true;
      supportingclock = true;
      showClock();
  
  
    }
    if (name == "StopClock") {
      clockShowing = false;
      supportingclock = false;
      hideClock();
      // need to reload the underlying page
  
    }
  }