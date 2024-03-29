//  handle clicks on buttons 
var oldRoom = "";

document.getElementById("HomeButton").addEventListener('touchstart', function () {
    ShowRoomPicker()
},{ passive: true });
// mousedown
document.getElementById("HomeButton").addEventListener('mousedown', function () {
    ShowRoomPicker()
},{ passive: true });

document.getElementById("SleepButton").addEventListener('touchend', function () {
    // wait 5 seconds then hide the clock
    setTimeout(function () {
        showClock();
    }, 1000);
});
// mousedown
document.getElementById("SleepButton").addEventListener('mousedown', function () {
    // wait 5 seconds then hide the clock
    setTimeout(function () {
        showClock();
    }, 1000);
});

// on page load
// window.addEventListener('load', function () {
//     //RoomToLoad
//     ShowRoomPage(RoomToLoad)
// });


function smallScreen() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        return true;
    } else {
        return false;
    }
    
}


function ChangeName(Name) {
    oldRoom = document.getElementById('RoomName').innerText;
    document.getElementById('RoomName').innerText = Name;

}
// hide and show the home button
function ChangeHomeButton(Show) {
    // classList.toggle("hidden");
    if (Show) {
        document.getElementById('HomeButton').classList.remove('hidden');
    } else {
        document.getElementById('HomeButton').classList.add('hidden');
    }
}
//  hide and show the room picker
function ChangeRoomPicker(Show) {
    if (Show) {
        document.getElementById('RoomPicker').classList.remove('hidden');
    } else {
        document.getElementById('RoomPicker').classList.add('hidden');
    }
}
// hide an show the room page
function ChangeRoomPage(Show) {
    if (Show) {
        document.getElementById('Dashboard').classList.remove('hidden');
    } else {
        document.getElementById('Dashboard').classList.add('hidden');
    }
}
//  hide and show room picker
function ChangeRoomPicker(Show) {
    if (Show) {
        document.getElementById('RoomGrid').classList.remove('hidden');
    } else {
        document.getElementById('RoomGrid').classList.add('hidden');
    }
}





BigClockForSmallScreen();


function ShowRoomPicker() {
    ChangeName("Select Room");
    ChangeHomeButton(false);
    ChangeRoomPage(false);
    ChangeRoomPicker(true);
    const gridContainer = document.getElementById('RoomGrid');
    // Clear existing grid
    gridContainer.innerHTML = '';
    // hub["rooms"].forEach(item => {
    //     // Create the grid item container
    //     const gridItem = document.createElement('div');
    //     gridItem.classList.add('RoomGridRoom');

    //     // Create the name element at the top
    //     // const nameElement = document.createElement('div');
    //     // nameElement.classList.add('item-name');
    //     // nameElement.textContent = item.Name;
    //     // gridItem.appendChild(nameElement);

    //     // Create the image element with circular border and shadow
    //     const imageElement = document.createElement('div');
    //     imageElement.classList.add('item-image');
    //     const img = document.createElement('img');
    //     img.style.width = "50px";
    //     img.src = "housepages/svg.php?name=" + item.iconsvg + "&colour=rgb(255,255,255)"
    //     imageElement.appendChild(img);
        // imageElement.addEventListener('touchend', function (event) {
        // imageElement.style.animation = "spin 1s infinite linear";


        //     setTimeout(function () {
        //         ShowRoomPage(item);
        //     }, 50);
        // });
        // imageElement.addEventListener('mousedown', function (event) {
        //     imageElement.style.animation = "spin 1s infinite linear";
    
    
        //         setTimeout(function () {
        //             ShowRoomPage(item);
        //         }, 50);
        //     });
    //     gridItem.appendChild(imageElement);

    //     // Create the text element at the bottom
    //     const textElement = document.createElement('div');
    //     textElement.classList.add('name');
    //     textElement.textContent = item.Name;
    //     gridItem.appendChild(textElement);
    //     //  appone item click

        // let startX, startY, endX, endY;
        // let touchStartTimestamp;

        // // gridItem.addEventListener('touchstart', function (event) {
        // //     const touch = event.touches[0];
        // //     startX = touch.clientX;
        // //     startY = touch.clientY;
        // //     touchStartTimestamp = event.timeStamp;
        // // });
        // // gridItem.addEventListener('touchend', function (event) {
        // //     const touch = event.changedTouches[0];
        // //     endX = touch.clientX;
        // //     endY = touch.clientY;
        // //     const touchEndTimestamp = event.timeStamp;

        // //     const distanceX = Math.abs(endX - startX);
        // //     const distanceY = Math.abs(endY - startY);
        // //     const timeElapsed = touchEndTimestamp - touchStartTimestamp;

        // //     // If the touch event has a small distance and a short duration, consider it a tap
        // //     if (distanceX < 5 && distanceY < 5 && timeElapsed < 200) {
        // //         setTimeout(function () {
        // //             ShowRoomPage(item);
        // //         }, 50);
        // //     }
        // // });



    //     // Append the grid item to the container
    //     gridContainer.appendChild(gridItem);
    // });


    hub["rooms"].forEach(zone => {
        // Create and append the zone title
        const zoneTitle = document.createElement('div');
        zoneTitle.classList.add('zone-title');
        zoneTitle.textContent = zone.name;
        gridContainer.appendChild(zoneTitle);

        zone.rooms.forEach(item => {
            // Create the grid item container
            const gridItem = document.createElement('div');
            gridItem.classList.add('RoomGridRoom');

            // Create and append the image element
            const imageElement = document.createElement('div');
            imageElement.classList.add('item-image');
            const img = document.createElement('img');
            img.style.width = "50px";
            img.src = "housepages/svg.php?name=" + item.iconsvg + "&colour=" + item.iconColor;
            imageElement.appendChild(img);

            imageElement.addEventListener('touchend', function (event) {
                imageElement.style.animation = "spin 1s infinite linear";
        
        
                    setTimeout(function () {
                        ShowRoomPage(item);
                    }, 50);
                },{ passive: true });
                imageElement.addEventListener('mousedown', function (event) {
                    imageElement.style.animation = "spin 1s infinite linear";
            
            
                        setTimeout(function () {
                            ShowRoomPage(item);
                        }, 50);
                    },{ passive: true });

            gridItem.appendChild(imageElement);

            // Create and append the text element
            const textElement = document.createElement('div');
            textElement.classList.add('name');
            textElement.textContent = item.Name;
            gridItem.appendChild(textElement);

            // Append the grid item to the container
            gridContainer.appendChild(gridItem);
        });
    });

}


// function to show the room page
function ShowRoomPage(room) {
    const isSmallScreen = smallScreen();

    fetch("housepages/roominfo.php?room=" + room["ID"]  + "&small=" + isSmallScreen)
        .then(response => response.json())
        .then(json => {
            hub.DeviceConnect.devices = [];
            hub["Room"] = json.ID;
            hub["dashboardId"] = json.Did;
            hub["layout"] = json.layout;
            hub["devices"] = json.devices;
            // Loop through the <style> elements and remove them
            // styleTags.forEach(function (styleTag) {
            //   styleTag.parentNode.removeChild(styleTag);
            // });

            KeypadCheckForroom(json, function (isValid) {
                if (isValid) {
                    ChangeName(json.Name);
                    ChangeHomeButton(true);
                    ChangeRoomPage(true);
                    ChangeRoomPicker(false);

                    window.DevicesPageStore.getData();
                    SendDeviceToWebSocket(json.devices.map(device => device.id));
                }
            });
        });



}

function KeypadCheckForroom(room, callback) {
    if (room.security == true) {
        ShowKeypad("Access " + room.Name, function (code) {
            validatePIN(code, room.security_keypad, function (isValid) {
                if (isValid) {
                    window.DevicesPageStore.getData();
                    SendDeviceToWebSocket(room.devices.map(device => device.id));
                    // alert("PIN accepted. Access granted!");
                    CancelKeypad();
                    callback(true)
                } else {
                    CancelKeypad();
                    // alert("Incorrect PIN. Access denied!");
                    callback(false)
                }
            });
        });
    } else {
        callback(true)
    }


}