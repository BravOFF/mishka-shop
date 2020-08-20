((slide)=>{

	"use strict";

	if(!slide.length) {

		return;

	}

	Array.prototype.forEach.call(slide, (elem) =>
		elem.querySelector('.slide__btn').addEventListener('click', () =>
			elem.classList.toggle('is-open')));

})(document.querySelectorAll('.slide'));