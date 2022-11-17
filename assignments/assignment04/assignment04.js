/*
Filename:    assignment04.js
Author:      Javier Perez (japerez1@svsu.edu)
Description: Arrow funtion practice & Scroll through covid data
*/

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
for(let i = 0; i < arr1.length; i++){
    arr1.map(e => e * arr2[i])
}
for(let i = 0; i < arr1.length; i++){
    //console.log(arr1.reduce((a, b) => a + b))
}
let n = 0
for(let i = 0; i < arr1.length; i++){
    n += arr1[i] * arr2[i]
}
for(let i = 0; i < arr1.length; i++){
    n += arr1[i] + arr2[i]
}
console.log(n)
//console.log(arr1.reduce((a, b) => a + b))

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

//PART 2 -------------------------------------------------------------------------------------------

//Create the click events for the three buttons
document.getElementById("loadjson").addEventListener("click", loadJSON);
document.getElementById("prior").addEventListener("click", prior);
document.getElementById("next").addEventListener("click", next);

let country = 0
let json
function loadJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("JSON data loaded :)")

            //Update information
            document.getElementById("ID").setAttribute("value", "---")
            document.getElementById("Country").setAttribute("value", "---")
            document.getElementById("CountryCode").setAttribute("value", "---")
            document.getElementById("Slug").setAttribute("value", "---")
            document.getElementById("NewConfirmed").setAttribute("value", "---")
            document.getElementById("TotalConfirmed").setAttribute("value", "---")
            document.getElementById("NewDeaths").setAttribute("value", "---")
            document.getElementById("TotalDeaths").setAttribute("value", "---")
            document.getElementById("NewRecovered").setAttribute("value", "---")
            document.getElementById("TotalRecovered").setAttribute("value", "---")
            document.getElementById("Date").setAttribute("value", "---")

          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

function prior () {
  country--
  if (country < 0) 
    country = 0
  
    //Update information
    document.getElementById("ID").setAttribute("value", json.Countries[country].ID)
    document.getElementById("Country").setAttribute("value", json.Countries[country].Country)
    document.getElementById("CountryCode").setAttribute("value", json.Countries[country].CountryCode)
    document.getElementById("Slug").setAttribute("value", json.Countries[country].Slug)
    document.getElementById("NewConfirmed").setAttribute("value", json.Countries[country].NewConfirmed)
    document.getElementById("TotalConfirmed").setAttribute("value", json.Countries[country].TotalConfirmed)
    document.getElementById("NewDeaths").setAttribute("value", json.Countries[country].NewDeaths)
    document.getElementById("TotalDeaths").setAttribute("value", json.Countries[country].TotalDeaths)
    document.getElementById("NewRecovered").setAttribute("value", json.Countries[country].NewRecovered)
    document.getElementById("TotalRecovered").setAttribute("value", json.Countries[country].TotalRecovered)
    document.getElementById("Date").setAttribute("value", json.Countries[country].Date)
}

function next () {
  country++
  if (country > json.Countries.length - 1)
    country = json.Countries.length - 1

    //Update information
    document.getElementById("ID").setAttribute("value", json.Countries[country].ID)
    document.getElementById("Country").setAttribute("value", json.Countries[country].Country)
    document.getElementById("CountryCode").setAttribute("value", json.Countries[country].CountryCode)
    document.getElementById("Slug").setAttribute("value", json.Countries[country].Slug)
    document.getElementById("NewConfirmed").setAttribute("value", json.Countries[country].NewConfirmed)
    document.getElementById("TotalConfirmed").setAttribute("value", json.Countries[country].TotalConfirmed)
    document.getElementById("NewDeaths").setAttribute("value", json.Countries[country].NewDeaths)
    document.getElementById("TotalDeaths").setAttribute("value", json.Countries[country].TotalDeaths)
    document.getElementById("NewRecovered").setAttribute("value", json.Countries[country].NewRecovered)
    document.getElementById("TotalRecovered").setAttribute("value", json.Countries[country].TotalRecovered)
    document.getElementById("Date").setAttribute("value", json.Countries[country].Date)
}
