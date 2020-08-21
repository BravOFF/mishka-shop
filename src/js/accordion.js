((slide) => {

	"use strict";

	if(!slide.length) {

		return;

	}

	Array.prototype.forEach.call(slide, (elem) =>
		elem.querySelector('.slide__btn').addEventListener('click', () =>
			elem.classList.toggle('is-open')));

})(document.querySelectorAll('.slide'));


// accordion
((accordion) => {

	"use strict";

	if(!accordion.length) {

		return;

	}

	Array.prototype.forEach.call(accordion, (elem) => {

		var active = null,
			btns = elem.querySelectorAll('.accordion__btn'),
			items = elem.querySelectorAll('.accordion__item');

		Array.prototype.forEach.call(btns, (btn,index) => {

			btn.addEventListener('click', () => {

				btn.closest('.accordion__item').classList.toggle('is-open');

				if(index === active){

					active = null;

				}
				else if(items.length > 1) {

					active = index;

					Array.prototype.forEach.call(items, (el,_index) => {

						if(active !== _index) {

							el.classList.remove('is-open');

						}

					});

					setTimeout( () => {

						if(!MI.isInViewport(items[active])){

							items[active].scrollIntoView({ behavior: 'smooth' });

						}

					},100);

				}

			});

		});

	});

})(document.querySelectorAll('.accordion'));