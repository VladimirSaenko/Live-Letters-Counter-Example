
"use strict"

const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
    const textWithoutSpace = textarea.value.replace(/\s/g, '');
    const textLength = textWithoutSpace.length;
    count.innerHTML = textLength;
}