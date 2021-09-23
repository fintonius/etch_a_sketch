//create a grid of 16 divs. 4 x 4. 
//add a button which will clear the grid and ask the user how many
//squares PER SIDE the new grid should contain.

//SO the grid needs to be adjustable, needs to work with changing user input.
//A function that squares the number and creates that amount of divs.
//THE SIZE OF THE OVERALL GRID NEEDS TO REMAIN THE SAME, eg: ALWAYS 800px WIDE

// **remember to give the divs a small border just to see what's being made :) **

//create a function that takes in the user input and creates a grid of divs heights & width of input

var userNumber = prompt('How many squares?');
//var squareNumber = userNumber * userNumber;

function createDiv() {
    var squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    return squareDiv;
};

function createGrid() {
    var box = document.getElementById('wrapper')
    let myDivs = [];
    let i = 0;
    wrapper.style.gridTemplateColumns = `repeat(${userNumber}, 1fr)`
    wrapper.style.gridTemplateRows = `repeat(${userNumber}, 1fr)`

    for (i; i <= userNumber * userNumber; i++) {
        myDivs.push(createDiv());
        box.appendChild(myDivs[i]);
    }

}

createGrid();

//console.log(squareNumber);