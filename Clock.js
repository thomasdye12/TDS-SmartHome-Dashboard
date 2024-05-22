var clockInterval;
var timeout = 120; // number of seconds before clock appears
var clockShowing = false;
var supportingclock = true;

var HideClock = false;

// Clock on timeout 
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

if (params.get('Clockontimeout') != null) {
  timeout = params.get('Clockontimeout');
} else {
  timeout = 120;
}

// hide the clock if the parameter is set
if (params.get('HideClock') != null) {
  HideClock = true;
}




if (supportingclock) {
  clockInterval = setInterval(checkClock, 2000);
  console.log("Clockontimeout is set to " + timeout);

  // document.body.addEventListener("mousemove", resetClock);
  document.body.addEventListener("keypress", resetClock);
  document.body.addEventListener("touchend", resetClock);

}


function checkClock() {
  if (!clockShowing) {
    timeout -= 1;
    if (timeout <= 0) {
      showClock();
    }
  }
}

function resetClock() {
  setTimeout(function () {
    if (params.get('Clockontimeout') != null) {
      timeout = params.get('Clockontimeout');
    } else {
      timeout = 120;
    }

    if (clockShowing) {

      hideClock();

    }
  }, 2);
}

function showClock() {
  clockShowing = true;
  document.getElementById('BigClockScreen').style.display = 'block';
  if (HideClock) {
    document.getElementById('BigClockLocation').style.display = 'none';
    SetScreenLevel(0);
  }

}



function hideClock() {
  clockShowing = false;
  document.getElementById('BigClockScreen').style.display = 'none';
  ShowRoomPage({ "ID": hub["Room"] });
  if (HideClock) {
    SetScreenLevel(255);
  }
}

function updateClock(data) {
  var time = data.hours + ":" + data.minutes;
  var todaydate = data.day + '/' + data.month;

  if (document.getElementById("MyClockDisplay") != null) {
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    // document.getElementById("MyClockDisplay-date").innerText = todaydate;
    // document.getElementById("MyClockDisplay-date").textContent = todaydate;
  }

  if (clockShowing) {
    document.getElementById("BigClock").innerText = time;
    document.getElementById("BigClock").textContent = time;

    if (data.Loc != undefined) {
      // small screen then we need to not move the clock
      if (smallScreen) {
        return
      }


      document.getElementById("BigClockLocation").style.top = data.Loc.top;
      document.getElementById("BigClockLocation").style.left = data.Loc.left;
    } else {
      document.getElementById("BigClockLocation").style.top = "0px";
      document.getElementById("BigClockLocation").style.left = "0px";
    }
  }
}



function BigClockForSmallScreen() {

  if (smallScreen) {
    // BigClockScreen set font size to 10vw
    document.getElementById("BigClockScreen").style.fontSize = "10vw";
    document.getElementById("BigClockLocation").style.top = "60px";
    document.getElementById("BigClockLocation").style.left = "60px";
    return
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

// control itsself 


function SetScreenLevel(leve) {
  const url = "http://127.0.0.1:2323/?type=json&password=thomas&cmd=setStringSetting&key=screenBrightness&value=" + leve;
  // make a request to the server
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });


}

// send any command to local server
function SendCommand(command) {
  const url = "http://127.0.0.1:2323/?type=json&password=thomas&cmd=" + command;
  // make a request to the server
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

}