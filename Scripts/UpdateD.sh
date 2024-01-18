#!/bin/bash

# URL for the POST request
url="http://10.0.1.2:9900/api/V1/input"

# JSON payload for the POST request
json='{
  "content": {
    "name": "DashboardCmd",
    "value": "loadStartURL",
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
