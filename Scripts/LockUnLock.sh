#!/bin/bash

# Define the function
runfunction() {
    local choice=$1  # Local variable to store the function argument

    # Decide the command based on the choice
    local cmd=""
    if [ "$choice" == "lock" ]; then
        cmd="enableLockedMode"
    elif [ "$choice" == "unlock" ]; then
        cmd="disableLockedMode"
    fi

    # URL for the POST request
    local url="http://10.0.1.2:9900/api/V1/input"

    # JSON payload for the POST request
    local json='{
        "content": {
            "name": "DashboardCmd",
            "value": "'$cmd'",
            "displayName": "",
            "deviceId": "DashboardCmd",
            "descriptionText": null,
            "unit": null,
            "type": null,
            "data": null
        }
    }'

    # Make POST request and display only the status code
    curl -X POST -H "Content-Type: application/json" -d "$json" "$url" -o /dev/null -w '%{http_code}'
}

# Ask the user for their choice
echo "Do you want to lock or unlock? Type 'L' or 'U' and then press ENTER:"
read choice

# Use a case statement to handle the choice
case $choice in
    L)
        runfunction "lock"
        ;;
    U)
        runfunction "unlock"
        ;;
    l)
        runfunction "lock"
        ;;
    u)
        runfunction "unlock"
        ;;
        
    *)
        echo "Invalid choice. Please type 'L' or 'U'."
        ;;
esac
