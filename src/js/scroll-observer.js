((footer) => {

	"use strict";

	if ('IntersectionObserver' in window) {

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [.1]
		};

		const headerTop = document.querySelector('.header__top'),
			  headerBottom = document.querySelector('.header__bottom');

		const callback = (entries, observer) =>

			Array.prototype.forEach.call(entries, (entry) => {

				document.body.classList.toggle('bg-footer', entry.intersectionRatio > 0.1 && window.pageYOffset > 0);

				headerBottom.classList.toggle('is-hidden', entry.intersectionRatio > 0.1);

			});

		const observer = new IntersectionObserver(callback, options);

		observer.observe(footer);

	}

})(document.querySelector('.footer'));