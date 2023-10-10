var slideIndex = 1;
showslide(slideIndex);

//next/previous controlss
function plusslide(n){
	showslide(slideIndex +=n);
}

//thumbnil images control
function currentslide(n){
	showslide(slideIndex = n);
}
function showslide(n){
	var i;
	var slide = document.getElementByClassName("myslides");
	var dots = document.getElementByClassName("dot");
	if (n>slide.length) {slideIndex = 1}
		if (n<1) {slideIndex = slide.length}
			for (var i = 0; i < slide.length; i++) {
			 slide[i].style.display = none		}
}.style
