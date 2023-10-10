// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function() {
	var top = window.scroll;
	if(top >=100) {
		header.classList.add('navbarDark');
	}
	else {
		header.classList.remove('navbarDark');
	}
}