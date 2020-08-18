((menu) => {

	"use strict";

	if(!menu) {

		return;

	}

	const wrapper = document.querySelector('.wrapper');


	// открыть|закрыть меню

	document.addEventListener('click', (e) => {

		if(e.target.closest('.btn-menu-toggle') || e.target.classList.contains('.menu')) {

			if(document.body.classList.contains('menu-open')){

				setTimeout( () => {

					window.scrollTo(0,MI.windowScrollOld);
					wrapper.style.top = 0;

				});

			}
			else {

				MI.windowScrollOld = window.pageYOffset;
				window.scrollTo(0,0);
				wrapper.style.top = -MI.windowScrollOld + 'px';

			}

			document.body.classList.toggle('menu-open');
			menu.classList.toggle('visuallyhidden');

		}

	});

})(document.querySelector('.menu'));


// меню каталога

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