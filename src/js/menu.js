((menu) => {

	"use strict";

	if(!menu) {

		return;

	}

	const level1 = menu.querySelectorAll('.menu-catalog__head'),
		  level2 = menu.querySelectorAll('.nav__level2-item--parent');


	// первый уровень

	Array.prototype.forEach.call(level1, (el) => {

		el.addEventListener('click', (e) => {

			e.preventDefault();

			el.classList.toggle('is-open');

		});

	});

	// второй уровень

	Array.prototype.forEach.call(level2, (el) => {

		el.querySelector('.nav__level2-link').addEventListener('click', (e) => {

			e.preventDefault();

			el.classList.toggle('is-open');

		});

	});

})(document.querySelector('.menu-catalog'));