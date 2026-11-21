'use strict';


const btn = document.querySelector('#btn');
const textInput = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const range = document.querySelector('#range');
const eBtn = document.querySelector('#e_btn');
const rangeSpan = document.querySelector('#range-span');

//1
btn.addEventListener('click', function () {
    square.style.backgroundColor = textInput.value;
});

//2
eBtn.style.display = 'none';

//3 
range.addEventListener('input', function () {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
    rangeSpan.textContent = range.value;
});




