var clockInterval;
var timeout = 120; // number of seconds before clock appears
var clockShowing = false;
var supportingclock = true;


// Clock on timeout 
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

if (params.get('Clockontimeout') != null) {
  timeout = params.get('Clockontimeout');
} else {
  timeout = 120;
}



if (supportingclock) {
  clockInterval = setInterval(checkClock, 2000);
  console.log("Clockontimeout is set to " + timeout);
  
  document.body.addEventListener("mousemove", resetClock);
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
  if (params.get('Clockontimeout') != null) {
    timeout = params.get('Clockontimeout');
  } else {
    timeout = 120;
  }

  if (clockShowing) {
    setTimeout(function () {
      hideClock();
    }, 200);

  }
}

function showClock() {
  clockShowing = true;
  document.getElementById('BigClockScreen').style.display = 'block';

}



function hideClock() {
  clockShowing = false;
  document.getElementById('BigClockScreen').style.display = 'none';
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
        document.getElementById("BigClockLocation").style.top = data.Loc.top;
        document.getElementById("BigClockLocation").style.left = data.Loc.left;
      } else {
        document.getElementById("BigClockLocation").style.top = "0px";
        document.getElementById("BigClockLocation").style.left = "0px";
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