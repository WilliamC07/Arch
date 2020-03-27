
# Calendar

## Project status
Not completed, currently working on it.

## Description
### Why was this created:
This is a personal project, not a school assignment.

I need a program that will help me stay organize by keeping track of dates, events
money, todos, and more. I originally came up with this idea in 2015/2016 and tried 
making it in JavaFX. I had to learn Java at the same time without little programming 
or UI design experience, hence why it is taking me 3+ years. I made two projects to 
show my progress in learning Java, each one attempting to create this program. I am now 
trying to recreate it, for the third time, using react, electron, javascript, html, 
and css. I chose not to use JavaFX because I need to become familiar with web tools
and it is a lot easier to make UI on react than JavaFX.

I learned Javascript through Eloquent Javascript and TheNewBoston.

## How to run

### Prereq
Works on:
* MacOS (Tested on MacOS mojave)  
I don't have a Windows machine and I removed my linux partition on my laptop, so I 
can't say it works on them. I have screenshots below of the program (TODO).

### How to run
Prereq: npm, nodeJS (tested on 11.6)
There is 909 MB of node_modules, so it will take some time to install.

To develop:
1. Clone repository and change directory into it
2. Run `npm install`
3. Run ```./node_modules/.bin/electron-rebuild  -f -w better-sqlite3 && ./node_modules/.bin/electron-rebuild  -f -w node-sass``` (this is very slow)
4. Run `npm start` to start React
5. Run `npm run electron` to start electron. You have to wait until react finish starting up the local server.

To run as as an executable (.dmg for mac):
1. Clone repository and change directory into it
2. Run `npm install`
3. Run ```./node_modules/.bin/electron-rebuild  -f -w better-sqlite3 && ./node_modules/.bin/electron-rebuild  -f -w node-sass``` (this is very slow)
4. Run `npm run electron-pack`
5. Type in `cd dist/mac`
6. Run the .dmg file

## Tools used in this project
* Git
* WebStorm
* React
* Electron

## Improvements that can be made:
- Getting events for a certain day is O(n) (n = amount of events user created)
- All events are read from database into memory