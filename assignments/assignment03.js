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
    */