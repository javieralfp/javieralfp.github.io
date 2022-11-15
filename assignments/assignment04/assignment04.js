//PART 1 -------------------------------------------------------------------------------------------

let arr1 = [101, 202, 303, 404, 505, 606, 707, 808, 909, 999]
let arr2 = [-200, -150, -100, -50, 0, 50, 100, 150, 175, 200]
let arr3 = [
    {fname: "Javier",
    lname: "Perez",
    title: "Mr.",
    suffix: "I",
    age: 10},
    {fname: "Javier",
    lname: "Perez",
    title: "Mr.",
    suffix: "II",
    age: 20},
    {fname: "Javier",
    lname: "Perez",
    title: "Mr.",
    suffix: "III",
    age: 30},
    {fname: "Javier",
    lname: "Perez",
    title: "Mr.",
    suffix: "IV",
    age: 40},
    {fname: "Javier",
    lname: "Perez",
    title: "Mr.",
    suffix: "V",
    age: 50}
  ]
let arr4 = [-100, 0, 100, 1900, 1904, 2000];
let arr5 = [1, 4, 5, 7]
let arr6 = [2, 4, 6, 8, 10]

//a. Length of hypotenuse given two sides of a right triangle
let hypotenuse = (a, b) => Math.sqrt(a*a + b*b)

//b. Roots of quadratic equation given a, b, c
let quadratic = (a, b, c) => {
    let s = ""
    let discriminant = b*b - 4*a*c

    if(discriminant < 0){
        s += "No real numbers"
    }
    else if(discriminant == 0){
        s += "Only one root: " + ((-b + Math.sqrt(discriminant)) / (2*a))
    }
    else{
        s += "Root 1: " + ((-b + Math.sqrt(discriminant)) / (2*a)) + "\n"
        s += "Root 2: " + ((-b - Math.sqrt(discriminant)) / (2*a)) + "\n"
    }

    return s
}

//c Volume of a sphere given radius
let volume = (radius) => 4/3 * Math.PI * radius* radius* radius

//d. Degrees Kelvin, given degrees Fahrenheit
let kelvin = (f) => (f-32) * 5 /9 + 273.15

//e. Arctan of “pi” plus another value (in radians)
let arctanFunction = (val) => Math.atan(Math.PI + val)

//f. The sum of a number and its square, i.e. n + n * n
let sum = (num) => num + num * num

//g. isleapyear(year) returns true if year is a leapyear
let leapYear = (year) => year % 4 == 0 && year > 0 //(year % 100 == 0)

/*
h. timeFallen(distance) returns time in seconds that an object
takes to fall a given distance (at sea level on planet Earth)
Google: Measure the distance the object will fall in feet with a ruler or measuring tape.
Divide the falling distance by 16. For example, if the object will fall 128 feet,
divide 128 by 16 to get 8. Calculate the square root of the Step 2 result
to find the time it takes the object to fall in seconds.
*/
let timeFallen = (distance) => Math.sqrt(distance / 16) + " seconds"

/*
a. Sum of all leapyears in Arr4, years 
b. Full names of all people in Arr3
c. Dot product of Arr1, Arr2
d. Sum of all even numbers in Arr2
e. Volumes of 4 spheres with 4 radii in Arr5
f. Time it takes or objects to fall the distances in Arr6
g. Sum of the arctans of values in r (Arr5)
*/

//a. Sum of all leapyears in Arr4, years
console.log(arr4)
console.log(
    arr4
        .filter(e => leapYear(e))
        .reduce((a, b) => a + b)
)

//b. Full names of all people in Arr3
console.log(
    arr3.map(e =>
        e.title + " " +
        e.fname + " " +
        e.lname + " " +
        e.suffix + " ")
)

//c. Dot product of Arr1, Arr2
//multiply and then add
console.log(
    //arr1.map(e => e + arr2)
    //arr1.filter(a => e + arr2)
    //HELPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
)

//d. Sum of all even numbers in Arr2
console.log(
    arr2
        .filter(e => e % 2 == 0)
        .reduce((a, b) => a + b)
)

//e. Volumes of 4 spheres with 4 radii in Arr5
console.log(
    arr5.map(e => volume(e))
)

//f. Time it takes or objects to fall the distances in Arr6
console.log(
    arr6.map(e => timeFallen(e))
)

//g. Sum of the arctans of values in r (Arr5)
console.log(
    arr2
        .map(e => arctanFunction(e))
        .reduce((a, b) => a + b)
)








