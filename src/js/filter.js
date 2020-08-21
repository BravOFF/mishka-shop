((filter)=>{

	"use strict";

	if(!filter) {

		return;

	}

	const btnOpen = document.querySelectorAll('.filter-open'),
		  btnClose = filter.querySelectorAll('.filter-close'),
		  btnRange = filter.querySelectorAll('.filter__range-item');

	Array.prototype.forEach.call(btnOpen, (el) =>
		el.addEventListener('click', () =>
			document.body.classList.add('filter-show')));


	Array.prototype.forEach.call(btnClose, (el) =>
		el.addEventListener('click', () =>
			document.body.classList.remove('filter-show')));


	Array.prototype.forEach.call(btnRange, (el) => {

		const btn = el.querySelector('.filter__range-reset'),
			  input = el.querySelector('.input');

		btn.addEventListener('click', () => {

			input.value = '';
			input.focus();
			btn.classList.add('hide');

		});

		input.addEventListener('input', () => btn.classList.toggle('hide', !input.value));

		if(!input.value) {

			btn.classList.add('hide');

		}

	});


})(document.querySelector('.filter'));