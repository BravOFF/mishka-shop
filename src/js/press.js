/*((items)=>{

	"use strict";

	if(!items.length) {

		return;

	}

	Array.prototype.forEach.call(items, (el)=> {

		el.addEventListener('click', (e) => {

			e.preventDefault();

			var src = el.getAttribute('href');

			document.querySelector('#modal-photo').innerHTML = '<img src="' + src + '">';

			DR.modalShow('photo');

		});

	});

})(document.querySelectorAll('.press__link'));*/