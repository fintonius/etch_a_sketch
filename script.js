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

    const defaultSize = '';
    const defaultColor = '';

    var currentColor = `var(--black)`;

    var slider = document.getElementById("slider");
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");
    var box = document.getElementById('wrapper');
    var rainbowButton = document.getElementById("rainbow");
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

    function createGrid() {   
        box.innerHTML = '';    
        wrapper.style.gridTemplateColumns = `repeat(${userNumber}, 1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${userNumber}, 1fr)`;

        let i = 0;
        for (i; i <= userNumber * userNumber; i++) {
            squareDiv = document.createElement('div');
            squareDiv.addEventListener("mouseover", function(event) {
                event.target.style.backgroundColor = currentColor;
            });
            box.appendChild(squareDiv);
        }
        };

    function rainbowClick() {
        
        //code from michalosman's etch-a-sketch
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        console.log(randomR, randomB, randomG);
        currentColor = `RGB(${randomR}, ${randomG}, ${randomB})`
    }
    createGrid();
