//PSEUDO CODE:
//window on load create box containing default 16 x 16 grid of divs
//mouse-over divs change-color to black
//slider input to change div grid: n x n amount
//button to reset grid to default size
//button to change color from black to random
//button to activate eraser option
//button to allow color picker option

//funtion to create div with classname & id if needed

//function to create div grid by multiplying above div. Has a default setting: 16 x 16. 
    //Take user input through slider to change amount of columns & rows

//function to allow random-color change for mouse-over action
    //when the grid is created are the divs stored in a way that is accessible by this function?
    //add eventlistener to the div when it's created - if (rainbowClick === 'true') {}  else {} ?
    const defaultSize = 50;
    window.onload = () => {
        slider.value = defaultSize; //Can't get the other values to reset to defaultSize even though
        //they all take their value from slider.value. 
        output1.textContent = defaultSize;
        output2.textContent = defaultSize;
        userNumber = defaultSize;
        createGrid();
    };

    var currentColor = `var(--black)`;
    var randomColor = '';
    var slider = document.getElementById("slider");
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");
    var box = document.getElementById('wrapper');
    var rainbow = '';
    var eraser = ''; //the button should stay 'clicked' for this. 'Unclicking' reverts to colouring
    var userNumber = slider.value;
    var squareDiv = '';
    output1.textContent = slider.value;
    output2.textContent = slider.value;

    slider.oninput = function () { 
        output1.textContent = this.value; 
        output2.textContent = this.value;   
    }
    
    slider.onchange = function () {
        userNumber = this.value;
        createGrid();
    }
    16
    function createGrid() {   
        box.innerHTML = '';    
        wrapper.style.gridTemplateColumns = `repeat(${userNumber}, 1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${userNumber}, 1fr)`;

        let i = 0;
        for (i; i <= userNumber * userNumber; i++) {
            squareDiv = document.createElement('div');
            squareDiv.addEventListener("mouseover", function(event) {
                if (rainbow === 'true') {
                    //code from michalosman's etch-a-sketch  
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    console.log(randomR, randomB, randomG);
                    currentColor = `RGB(${randomR}, ${randomG}, ${randomB})`
                    event.target.style.backgroundColor = currentColor;
                } else if (colour === 'true') {
                    event.target.style.backgroundColor = currentColor;
                } else if (randomColor === 'true') {
                    event.target.style.backgroundColor = currentColor;
                } else {
                    event.target.style.backgroundColor = currentColor;
                }16
            });
            box.appendChild(squareDiv);
        }
        };

    //IS THERE A WAY TO CHANGE THE BUTTON COLOUR TO = THE RANDOM COLOURS AS GENERATED?!
    function rainbowClick() {
        rainbow = 'true';
        randomColor = 'false';
        colour = 'false';16
    }

    function colourPicker() {
        colour = 'true';
        rainbow = 'false';        
        currentColor = `var(--black)`;
    }

    //IS THERE A WAY TO CHANGE THE BUTTON COLOUR TO = THE RANDOM COLOUR?
    function randomColour() {
        randomColor = 'true';
        colour = 'false';
        rainbow = 'false';
        //code from michalosman's etch-a-sketch 
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        console.log(randomR, randomB, randomG);
        currentColor = `RGB(${randomR}, ${randomG}, ${randomB})`
    }

    function reset() {
        createGrid();
    }

    
