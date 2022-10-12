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
document.getElementById('sum').value = sum;
    while(num != 0){
        sum += num % 10;
        num %= 10;
    }

    
}



