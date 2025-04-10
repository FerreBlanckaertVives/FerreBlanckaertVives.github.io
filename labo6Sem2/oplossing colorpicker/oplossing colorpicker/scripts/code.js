const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let savebtn = document.getElementById("btn");

	savebtn.addEventListener("click", addSwatch)
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const addSwatch = () =>
{
	let swatches = document.getElementById("swatches");

	let swatch = document.getElementById("swatch");

	let clone = swatch.cloneNode(true);

	swatches.appendChild(clone);
}

window.addEventListener("load", initialize);