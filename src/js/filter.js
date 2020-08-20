((btn)=>{

	"use strict";

	if(!btn.length) {

		return;

	}

	Array.prototype.forEach.call(btn, (el) =>
		el.addEventListener('click', () =>
			document.body.classList.add('is-open')));

	Array.prototype.forEach.call(document.querySelectorAll('.filter-close'), (el) =>
		el.addEventListener('click', () =>
			document.body.classList.remove('is-open')));

})(document.querySelectorAll('.filter-open'));