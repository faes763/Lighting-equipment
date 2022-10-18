let firstbutton = document.querySelector('.testone');
let secondbutton = document.querySelector('.testtwo');
let onefon = document.querySelector('.onefon');
let twofon = document.querySelector('.twofon');
twofon.onclick = function() {
	onefon.classList.toggle('olimp');
}
onefon.onclick = function() {
	onefon.classList.toggle('olimp');
}
firstbutton.onclick = function() {
	onefon.classList.toggle('olimp');
}
secondbutton.onclick = function() {
	onefon.classList.toggle('olimp');
}
document.querySelector('.comp').onclick = function() {
	document.querySelector('.comp').classList.add('robe');
	document.querySelector('.roa').classList.remove('robe');

	// document.querySelector('.pro').classList.add('robe');
	document.querySelector('.pro').classList.remove('complute');
	document.querySelector('.project').classList.add('complute');
}
document.querySelector('.roa').onclick = function() {
	document.querySelector('.roa').classList.add('robe');
	document.querySelector('.comp').classList.remove('robe');
	
	// document.querySelector('.pro').classList.remove('robe');
	document.querySelector('.pro').classList.add('complute');
	document.querySelector('.project').classList.remove('complute');
	
}