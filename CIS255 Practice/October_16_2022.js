
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