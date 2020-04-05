# Drum Machine App

#### Tutorial from Dev_Ed: [Tutorial link](https://www.youtube.com/watch?v=2VJlzeEVL8A)
------------

## Building Steps 
#### *My notes notes on the process*

------------

1. Build HTML
    + nest al pads (pads 1-6) under a div called pads.
    + nest a src link for every pad.
2. Create CSS style sheet.
    + create general format H1, p tags... etc.
    + add temporary background to the .pads section to see your working space.
    + give each pad a hex color #
        + note: To assign a style to all the divs nest in a div use the following: 
``` .pads > div {}```
3. Create JS file.
4. Bring over the sounds and the pads from the HTML file by using querySelectorALL.
    + for the pads, use .pads div to crab all of them.
    ```const pads = document.querySelectorAll('.pads div');```
5. Set up sound for all pads using an eventlistener in a for each function.
    + Reset current time of track to fix 3 second sound interval.
    ```sounds[index].currentTime = 0;```
6. Add visual bubbles/player by creating an array with all the hex #s.
7. Create function that makes bubbles move.
    + Attatch bubble to visual.
    + In same function create bubble animation function.
8. Style animation in CSS file by using ```@keyframes jump {}```
    + use z-index: -1 to hide bubbles behind pads.
9. Write functions to remove bubble when animation ends.