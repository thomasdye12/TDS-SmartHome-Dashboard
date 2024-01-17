//  handle clicks on buttons 
var oldRoom = "";

document.getElementById("HomeButton").addEventListener('touchstart', function () {
    ShowRoomPicker()
});
// on page load
// window.addEventListener('load', function () {
//     //RoomToLoad
//     ShowRoomPage(RoomToLoad)
// });


function smallScreen() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
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
    hub["rooms"].forEach(item => {
        // Create the grid item container
        const gridItem = document.createElement('div');
        gridItem.classList.add('RoomGridRoom');

        // Create the name element at the top
        // const nameElement = document.createElement('div');
        // nameElement.classList.add('item-name');
        // nameElement.textContent = item.Name;
        // gridItem.appendChild(nameElement);

        // Create the image element with circular border and shadow
        const imageElement = document.createElement('div');
        imageElement.classList.add('item-image');
        const img = document.createElement('img');
        img.style.width = "50px";
        img.src = "housepages/svg.php?name=" + item.iconsvg + "&colour=rgb(255,255,255)"
        imageElement.appendChild(img);
        imageElement.addEventListener('touchend', function (event) {


            setTimeout(function () {
                ShowRoomPage(item);
            }, 50);
        });
        gridItem.appendChild(imageElement);

        // Create the text element at the bottom
        const textElement = document.createElement('div');
        textElement.classList.add('name');
        textElement.textContent = item.Name;
        gridItem.appendChild(textElement);
        //  appone item click

        let startX, startY, endX, endY;
        let touchStartTimestamp;

        // gridItem.addEventListener('touchstart', function (event) {
        //     const touch = event.touches[0];
        //     startX = touch.clientX;
        //     startY = touch.clientY;
        //     touchStartTimestamp = event.timeStamp;
        // });
        // gridItem.addEventListener('touchend', function (event) {
        //     const touch = event.changedTouches[0];
        //     endX = touch.clientX;
        //     endY = touch.clientY;
        //     const touchEndTimestamp = event.timeStamp;

        //     const distanceX = Math.abs(endX - startX);
        //     const distanceY = Math.abs(endY - startY);
        //     const timeElapsed = touchEndTimestamp - touchStartTimestamp;

        //     // If the touch event has a small distance and a short duration, consider it a tap
        //     if (distanceX < 5 && distanceY < 5 && timeElapsed < 200) {
        //         setTimeout(function () {
        //             ShowRoomPage(item);
        //         }, 50);
        //     }
        // });



        // Append the grid item to the container
        gridContainer.appendChild(gridItem);
    });
}


// function to show the room page
function ShowRoomPage(room) {
    const isSmallScreen = smallScreen();

    fetch("housepages/roominfo.php?room=" + room["ID"]  + "&small=" + isSmallScreen)
        .then(response => response.json())
        .then(json => {
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
                    ChangeName(room.Name);
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