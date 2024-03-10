"use strict"
console.log("hello js");

function sqrt(i) {return i*i}

let toggle = true

function change(i) {
	if (toggle) {
    	document.getElementById("theOne").innerHTML = `sqrt (${i}) = ${sqrt(i)}`
	} else {
		document.getElementById("theOne").innerHTML = `some other text`
	}
	console.log("toggle:" + toggle);
	toggle = !toggle
}
