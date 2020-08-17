((elems)=>{

	"use strict";

	if(!elems) {

		return;

	}

	if ('IntersectionObserver' in window) {

		Array.prototype.forEach.call(elems, (wrap) => {

			const callback = (entries, observer) => {

				Array.prototype.forEach.call(entries, (entry) => {

					wrap.classList.toggle('is-scroll', entry.intersectionRatio < 1);

				});

			};

			const observer = new IntersectionObserver(callback, {
				root: wrap,
				threshold: 1.0
			});

			observer.observe(wrap.querySelector('.scroll-observer__item'));

		});

	}


})(document.querySelectorAll('.scroll-observer'));