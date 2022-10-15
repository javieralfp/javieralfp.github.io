/*
Filename:    assignment03.html.html
Author:      Javier Perez (japerez1@svsu.edu)
Description: Convert Fahrenheit to Celsius
             Find GCD
             Compute sum of digits
             Generate new string from input fields
             tic tac toe
*/

/*
Write external JavaScript to convert find the greatest common divisor (GCD) of 2 integers. Observe: the 
GCD of 36 and 24 is 12. Create input boxes for users to enter integers, a button for users to click, and 
put the result in an output box.

03B. Find GCD
*/

function findGCD(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let gcd = 1;
    let i = gcd;

    //Find gcd
    while(i <= n1 || i <= n2){
        if(n1 % i == 0 && n2 % i == 0){
            //gcd++;
            gcd = i;
            i++;
        }
        else{
            i++;
        }
    }

    //Display gcd
    document.getElementById('gcd').value = gcd;
}

/*
Write external JavaScript to compute the sum of the digits of a positive integer. Observe: the sum of the 
digits of the number, 1234, is 10. Create an input box and a submit button. Put result in an output box.

03C. Compute sum of digits
*/

function sum(){
    //Get num from textbox
    let num = document.getElementById('num').value;
    let sum = 0;

    //Find sum
    while(num != 0){
        sum += num % 10;
        num = Math.floor(num/10);
    }

    //Display sum
    document.getElementById('sum').value = sum;
}

/*
Write external JavaScript to generate new string from input fields. Specifically, the user should enter 
TITLE, FIRST and LAST names, and SUFFIX. Your program should generate FULL NAME, for example, “Dr. 
Martin Luther King, Jr.” FIRST and LAST names must be REQUIRED fields. If TITLE or SUFFIX are entered 
by user then include necessary periods, spaces or comma.  If TITLE or SUFFIX are not entered by user 
then omit unnecessary periods, spaces or comma. You may want to use a drop-down list box (SELECT 
and OPTION tags).

03D. Generate new string from input fields
*/

function generateFullName(){
    let fullName = "";


    //let title = document.getElementsByName("title");
    let title = document.getElementById('title');
    //if(document.getElementsByName("title").)

    //Add title if selected
    if(document.getElementById('title').value != "No Title"){
        fullName += document.getElementById('title').value + " ";
    }

    //Add first name
    fullName += document.getElementById('fn').value + " ";

    //Add last name
    fullName += document.getElementById('ln').value;

    //Add suffix if selected
    if(document.getElementById('suffix').value != "No Suffix"){
        fullName += ", " + document.getElementById('suffix').value;
    }
    
    //Display full name if first name and last name are not empty
    if(document.getElementById('fn').value != "" && document.getElementById('ln').value != ""){
        document.getElementById('fullName').value = fullName;
    }
    //Inform user of emtpy fields
    if(document.getElementById('fn').value == "" && document.getElementById('ln').value == ""){
        alert("Please fill in first and last name.");
    }
    else if(document.getElementById('fn').value == ""){
        alert("Please fill in first name.");
    }
    else if(document.getElementById('ln').value == ""){
        alert("Please fill in last name.");
    }

}

    /*
    Write external JavaScript to implement the game, Tic-Tac-Toe. Use your 
    creativity to style the game with CSS. KEEP IT SIMPLE. The user always starts 
    first. The computer moves immediately after. If either user or computer wins, 
    game stops. The 3E section of your web page should look something like this:
    
    03E. Tic-Tac-Toe game

    I coded this following this video's tutorial:
    https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=1194s
    */

    var origBoard;
    const huPlayer = "O";
    const aiPlayer = "X";
    const winCombos = [
        //horizontals
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //verticals
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonals
        [0, 4, 8],
        [2, 4, 6]
    ]

//Array of all the board cells
const cells = document.querySelectorAll('.cell');
startGame();

function startGame(){
    //Get rid of display at the end of the game
    document.querySelector(".endgame").getElementsByClassName.display = "none";
    origBoard = Array.from(Array(9).keys());
    for(var i = 0; i < cells.length; i++){
        //Reset the board cells
        cells[i].innerText = "";
        cells[i].style.removeProperty("background-color");
        //Adds event for each square which calls turnClick function upon click event
        cells[i].addEventListener("click", turnClick, false);
    }
}

function turnClick(square){
    //Doesn't do anything if clicked cell has already been clicked
    if(typeof origBoard[square.target.id] == 'number'){
        turn(square.target.id, huPlayer);
        //If no tie then do ai turn
        if(!checkTie()){
            turn(bestSpot(), aiPlayer);
        }
    }
}

function turn(squareId, player){
    //Set X or O on the board
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    if(gameWon){
        gameOver(gameWon);
    }
}

function checkWin(board, player){
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for(let [index, win] of winCombos.entries()){
        //index of possible wins
        //win = current element of index
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for(let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor =
        gameWon.player == huPlayer ? "blue" : "red";
    }
    //Remove ability to click on cells once game has finished
    for(var i = 0; i < cells.length; i++){
        cells[i].removeEventListener("click", turnClick, false);
    }

    declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose!");
}

//Display win or lose message
function declareWinner(who){
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

//Returns first empty square for ai turn
function bestSpot(){
    return emptySquares()[0];
}

function emptySquares(){
    return origBoard.filter(s => typeof s == 'number');
}

function checkTie(){
    //If there are no empty squares then...
    if(emptySquares().length == 0){
        //Set all squares to green
        for(var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener("click", turnClick, false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}