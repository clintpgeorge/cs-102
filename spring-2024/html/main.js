/**
 * CS102: Software Tools 
 * 
 * Javscript source file
 * 
 * Created on: June 20, 2022 
 * 
 */

// Declare all variables 

let aText = "JavaScript alert"; 
let h2Text; 

alert('This is an ' + aText + ' displayed on page load!');

// alert(document.URL);

// Variable initialization  
h2Text = 'Header text set by JavaScript!';


const myHeading2 = document.querySelector('h2'); 
myHeading2.textContent = h2Text; // property: textContent
