//create a grid of 16 divs. 4 x 4. 
//add a button which will clear the grid and ask the user how many
//squares PER SIDE the new grid should contain.

//NEW BRANCH TEST: need to have a variable to cast current state into? Don't really know what I'm doing. 
//I think it might be best to branch and restart TBH. It feels like it's a lot of patching
//the current script and finding convoluted work arounds to current stuff to "make" it work

var slider = document.getElementById("slider");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var box = document.getElementById('wrapper');
var rainbowButton = document.getElementById("rainbow");
var rainbow = '';
var eraser = ''; //the button should stay 'clicked' for this. 'Unclicking' reverts to colouring
var userNumber = slider.value;
output1.textContent = slider.value;
output2.textContent = slider.value;

//Using a class for 'output' returns an array which was overly complicated to add the slider value to
//so just went with 2 id instead.
slider.oninput = function () { 
    output1.textContent = this.value; 
    output2.textContent = this.value;   
}

slider.onchange = function () {
    userNumber = this.value;//SO the grid needs to be adjustable, needs to work with changing user input.
    //A function that squares the number and creates that amount of divs.
    //THE SIZE OF THE OVERALL GRID NEEDS TO REMAIN THE SAME, eg: ALWAYS 800px WIDE
    
    // **remember to give the divs a small border just to see what's being made :) **
    
    //create a function that takes in the user input and creates a grid of divs heights & width of input
    
    //var userNumber = prompt('How many squares?');
    //var squareNumber = userNumber * userNumber;
    createGrid();
}
function rainbowClick() {
    rainbow = 'true';
    createGrid();
}
function rainbowDiv() {
  
   var redDiv = document.createElement('div');
   redDiv.className = 'square';
   redDiv.addEventListener("mouseover", function(event) {
       event.target.style.backgroundColor = "red";
   });   
   return redDiv;
};

function createDiv() {   
    var squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    return squareDiv;
};

//only 'resizing' grid should reset? Changing colour should keep current drawing
function createGrid() {
    box.innerHTML = ``;
    let myDivs = [];
    let i = 0;
    wrapper.style.gridTemplateColumns = `repeat(${userNumber}, 1fr)`
    wrapper.style.gridTemplateRows = `repeat(${userNumber}, 1fr)`

    if (rainbow === 'true') {
        console.log('getting there');
        for (i; i <= userNumber * userNumber; i++) {
            myDivs.push(rainbowDiv());
            box.appendChild(myDivs[i]);
        }
    } else {
    for (i; i <= userNumber * userNumber; i++) {
        myDivs.push(createDiv());
        box.appendChild(myDivs[i]);
    }
    }
}

function resetFunction() {
    box.innerHTML = ``;
    createGrid();
}

createGrid();
console.log(userNumber);