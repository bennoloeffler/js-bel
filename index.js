"use strict"
console.log("hello js");

function sqrt(i) {return i*i}

function change(i) {
    document.getElementById("theOne").innerHTML= `sqrt (${i}) = ${sqrt(i)}`
}
