// get the calculator display element
const display = document.querySelector(".display");
let operator = "";
let numBase10 = 0;

// get all the number and operator buttons
const numBtns = document.querySelectorAll(".num");
const symBtns = document.querySelectorAll(".symbol");

// get the reset, delete, and equals buttons
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector(".equal");

//theme slider 
const body = document.querySelector('body');
const slider = document.getElementById("slider");
const row2 = document.getElementById("row-2");
const displayStyle = document.getElementById("display");
const row3 = document.getElementById("row-3");

slider.addEventListener("input", () => {
  const value = slider.value;
  if (value == 1) {
    document.querySelector("h1").style.color = "#fefffd";
    document.querySelector("label").style.color = "#fefffd";
    document.querySelector("p").style.color = "#fefffd";
    document.getElementById("span1").style.color = "#fefffd";
    document.getElementById("span2").style.color = "#fefffd";
    body.style.backgroundColor = "#3a4764";
    row2.style.backgroundColor = "#181f32"; // set the background color of row-2 to light grey
    displayStyle.style.backgroundColor = "#181f32"; // set the background color of the display to light grey
    row3.style.backgroundColor = "#252d44"; // set the background color of row-3 to medium grey
  } else if (value == 2) {
    body.style.backgroundColor = "#e6e6e6";
    document.querySelector("h1").style.color = "#000000";
    document.querySelector("label").style.color = "#000000";
    document.querySelector("p").style.color = "#000000";
    document.getElementById("span1").style.color = "#000000";
    document.getElementById("span2").style.color = "#000000";
    row2.style.backgroundColor = "#ededed"; // set the background color of row-2 to medium grey
    displayStyle.style.backgroundColor = "#ededed"; // set the background color of the display to medium grey
    row3.style.backgroundColor = "#d1cccc"; // set the background color of row-3 to dark grey
  } else {
    document.querySelector("h1").style.color = "#fefffd";
    document.querySelector("label").style.color = "#fefffd";
    document.querySelector("p").style.color = "#fefffd";
    document.getElementById("span1").style.color = "#fefffd";
    document.getElementById("span2").style.color = "#fefffd";
    body.style.backgroundColor = "#160628";
    row2.style.backgroundColor = "#1d0934"; // set the background color of row-2 to dark grey
    displayStyle.style.backgroundColor = "#1d0934"; // set the background color of the display to dark grey
    row3.style.backgroundColor = "#1d0934"; // set the background color of row-3 to a lighter shade of dark grey
  }
});

// slider.addEventListener("input", () => {
//   const value = slider.value;
//   const body = document.querySelector("body");
//   if (value == 1) {
//     body.style.background = '#3a4764';
//     document.querySelector('row-2').style.background = '#181f32';
//     document.querySelector('display').style.background = '#181f32';
//     document.querySelector('row-3').style.background = '#252d44'; // set the background color to light grey
//   } else if (value == 2) {
//     body.style.background = '#3a4764';
//     document.querySelector('row-2').style.background = '#e6e6e6';
//     document.querySelector('display').style.background = '#181f32';
//     document.querySelector('row-3').style.background = '#252d44'; // set the background color to medium grey
//   } else {
//     body.style.background = '#3a4764';
//     document.getElementById('row-2').style.background = '#181f32';
//     document.getElementById('display').style.background = '#181f32';
//     document.getElementById('row-3').style.background = '#252d44'; // set the background color to dark grey
//   }
// });

// add event listeners to each button to update the display
symBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    operator = btn.value;
    // octToInt(display.value);
    console.log(operator);
    switch (operator) {
        case "+":
            display.value += operator;
            break;
        case "-":
            display.value += operator;
            break;
        case "*":
            display.value += operator;
            break;
        case "/":
            display.value += operator;
            break;
        case ".":
            display.value += operator;
            break;
    }
  });
});

numBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    operator = btn.value;
    display.value += operator;
    console.log(operator);
  });
});

resetBtn.addEventListener("click", () => {
  display.value = "";
});

deleteBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

equalsBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});





