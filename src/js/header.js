((header) => {

	"use strict";

	if(!header) {

		return;

	}

	const headerTop = header.querySelector('.header__top');

	PubSub.subscribe('windowScroll', () => headerTop.classList.toggle('is-scroll', window.pageYOffset > 0));

})(document.querySelector('.header'));