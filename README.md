##This repository is only for @capacitor team runs @capacitor/geolocation bug ticket #2165
###Este repositório é apenas para o time do capacitor simular o bug do ticket #2165

The error occurs sometimes, usually when the phone has been idle for a while. It might be related to a power-saving feature of the GPS. 
When the error happens, if we open Google Maps, we will see the pointer (position dot) in gray. 
In this case, the application that uses the plugin doesn’t work. 
If we keep Maps open for just a few seconds, the dot turns BLUE, indicating that the GPS is using the current location, and then the plugin works normally. 
It seems to be some kind of hibernation or power-saving feature of the device’s GPS that Maps can return to normal, but the plugin cannot.

As we can see, the plugin cannot catch the error (the message is not showing). But the plugin itself gives an error and can be seen on chrome inspect

##
##
##


<img src='/assets/a54_screen.jpg'> 



##
##
##

<img src='/assets/chrome_screen.png'>
