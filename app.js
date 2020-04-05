window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#FF28FC',
        '#28FF2B',
        '#2891FF',
        '#FCFF28',
        'B028FF',
        '#28E2FF'
    ];
   

    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            //.currentTime = 0; makes it it plays and restarts right away everytime you click it instead of it taking 3 seconds to make a sound everytime you click.
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
            

        });
    });

    //Create a function that makes the bubbles when you click
    const createBubbles = (index) => {
        const bubbles = document.createElement('div');
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 1s ease';
        bubbles.addEventListener('animationend', function() {
            visual.removeChild(this);
   
        });

    };

});

