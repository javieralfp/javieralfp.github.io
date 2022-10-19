
let square = document.getElementById('square');
square.addEventListener('mouseover', changeSquareColorIn)
square.addEventListener('mouseout', changeSquareColorOut)

let ul = document.getElementById('ul');
ul.addEventListener('mouseover', changeUlColorIn => {
    ul.style.backgroundColor = "yellow";
});
ul.addEventListener('mouseout', () => {
    ul.style.backgroundColor = "rgba(1, 1, 1, 0)";
});


function changeSquareColorIn(){
    document.getElementById('square').style.backgroundColor = "purple";
    //alert("hi");
}

function changeSquareColorOut(){
    document.getElementById('square').style.backgroundColor = "blue";
    //alert("hi");
}

/*
function changeUlColorIn(){
    ul.style.backgroundColor = "yellow";
}

function changeUlColorOut(){
    ul.style.backgroundColor = "rgba(1, 1, 1, 0)";
}
*/

//label
let label = document.createElement("label")
label.innerHTML = "Convert f to c"
document.body.appendChild(label)

let br = document.createElement("br")
document.body.appendChild(br)

//input
let input = document.createElement("input")
input.type = "text"
//input.value = "Enter f";
document.body.appendChild(input);

document.body.appendChild(br)

//button
/*let butt = document.createElement("button")
butt.innerText = "convert"
document.body.appendChild(butt)

document.body.appendChild(br)*/
let butt = document.createElement("input")
butt.type = "button"
//butt.innerText = "convert"
butt.value = "convert"
document.body.appendChild(butt)

document.body.appendChild(br)

//output
let out = document.createElement("input")
out.type = "text"
out.disabled = "true"
//out.class = "id_out"
document.body.appendChild(out)

butt.addEventListener('click', e => {
    out.value = (input.value - 32) * 5 / 9;
    //alert(input.value)
})