function round(number, places) {
	var multiplier = Math.pow(10, places);
	return Math.round(number * multiplier) / multiplier;
};

// alert(round(6.175, 2));

document.getElementById('Circumference_Radius').onchange = function() {
	var circum_circ_rad = document.getElementById('Circumference_Radius').value;
	var cCrResult = 2 * Math.PI * circum_circ_rad;
	var roundCCrResult = round(cCrResult, 3);
	var circumDiv = document.getElementById("circumferenceDiv");
	var circumferenceTextNode = document.createTextNode("The circumference is " + roundCCrResult + ". ");
	circumDiv.appendChild(circumferenceTextNode);
};

document.getElementById("calcPT").onclick = function() {
	var side1 = document.getElementById('triSide1').value;
	var side2 = document.getElementById('triSide2').value;
	var side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
	var roundSide3 = round(side3, 3);
	var PTDiv = document.getElementById("pythagorianTheoremDiv");
	var PTTextNode = document.createTextNode("The length of side three is " + roundSide3 + ". ");
	PTDiv.appendChild(PTTextNode);

}