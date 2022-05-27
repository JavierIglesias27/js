function funMouseClick(event) {
	console.log(event.clientX + ":" + event.clientY);
	alert(event.clientX + ":" + event.clientY);
}
window.addEventListener("click", funMouseClick);
