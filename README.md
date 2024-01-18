---
runme:
  id: 01HMEHEWSZGW0H4VCSXCZQC8FA
  version: v2.2
---

# Smarthome-Dashboard

This is a smarthome Dashboard built using some of the code from the Hubitat dashboard, built to work with there API endpoints, but uses lots of customisation.

# Not Production ready

<!-- make text red -->

This is not production ready, and is still in development, so please use at your own risk.

This is not meant to be or intended to be compleate package, this is part of a larage, much larager system that controls our house, and is only here to show how we have done it, and to help others who are looking to do the same. There is usefull code in here as well as SF symbols that we are using to reference the icons.

## How it works

data is pushed in from the marketing api and then stored in redis, on page load this data is used to allow the page to load
then there is a websocket connection,well 2 in fact, one for the main page to update time and weather (we push the time every 1 min to check if the dashboard is still connected) and then the weather when there is a change

![Dashboard](https://github.com/thomasdye12/Smarthome-Dashboard/blob/main/images/Dashboard.png?raw=true)

## Backend

The backend is not part of this project as it is connected to our smart home system, it will try and connect to a websocket on port 1000 over wss, this can be changed by editing that file. The backend is written in nodejs it however is part of our smart home system so maybe will come out in the future but is much more complex than this. I would suggest looking at how it works and butilding your own backend as needed.

## Frontend

place the Dashboard folder in a dir that is within the web servers root folder making it public however you would like.

