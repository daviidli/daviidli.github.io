# Darts

`Electron` `React` `Redux` `TypeScript` `Arduino`

## Inspiration
I was introduced to the world of darts when I was on vacation in Seoul. A few friends and I frequented an arcade near our stay and the main game we played was arcade darts. Since coming back home, I have looked for places to play darts in Vancouver. Finding only a few and wanting to save some money, I decided to buy a used dartboard and hook it up to my Arduino and create my own version of arcade darts.

I initially wanted to just follow this [tutorial](https://www.hackster.io/ricardo-alves/opendarts-homemade-dartboard-machine-2a2914) and use [OpenDarts](https://www.microsoft.com/en-us/p/opendarts/9nblggh42l8n?activetab=pivot:overviewtab), but that was only for Windows. Having never used Electron before, I decided to give it a try and make an open source version of OpenDarts that is cross-platform.

## Implementation
My goal was to be able to run this app on Linux, Windows and Mac. I have a lot of experience with React, but had only recently learned Redux. Taking all these into account, I decided to use the [Electron-React-Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate). I really liked the abstraction of `create-react-app`, wherein it hides most of the configuration details. Electron-react-boilerplate was the closest I found that was similar to `create-react-app` but for Electron.

The code on the Arduino is simple and treats the dartboard as a matrix keyboard. All the Arduino code was adapted from the [OpenDarts tutorial](https://www.hackster.io/ricardo-alves/opendarts-homemade-dartboard-machine-2a2914). On the Electron side, the [SerialPort package](https://github.com/serialport/node-serialport) was used to receive the Arduino's outputs.
