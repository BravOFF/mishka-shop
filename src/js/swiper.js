((swiperContainer)=>{

	"use strict";

	if(!swiperContainer.length) {

		return;

	}

	let swiperInit = window.Swiper;

	Array.prototype.forEach.call(swiperContainer, (swipe) => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  card = swipe.classList.contains('swiper-container--card'),
			  billboard = swipe.classList.contains('swiper-container--billboard');;

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.innerHTML = '<svg width="26" height="24" viewBox="0 0 26 24"><path d="M17.46 24l8.318-12.063L17.46 0h-3.174l7.174 10.667H0v2.603h21.46L14.286 24z"/></svg>';
		swipeNext.innerHTML = '<svg width="26" height="24" viewBox="0 0 26 24"><path d="M17.46 24l8.318-12.063L17.46 0h-3.174l7.174 10.667H0v2.603h21.46L14.286 24z"/></svg>';

		swipeBtns.appendChild(swipePrev);
		swipeBtns.appendChild(swipeNext);
		swipeControls.appendChild(swipeBtns);
		swipeControls.appendChild(swipeNav);
		swipe.parentNode.appendChild(swipeControls);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeControls.classList.add('hide');

		}

		resetSwipe();

		if (card) {

			toggleSwipe = () => {

				toggleSwipe = false;

				new Swiper(swipe, {
					loop: true,
					slidesPerView: 'auto'
				});

			}

		}

		if (billboard) {

			toggleSwipe = () => {

				toggleSwipe = false;

				new Swiper(swipe, {
					loop: true,
					autoplay: {
						delay: 5000
					}
				});

			}

		}

		PubSub.subscribe('windowWidthResize', function(){

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		if(window.Swiper && toggleSwipe) {

			toggleSwipe();

		}
		else {

			PubSub.subscribe('swiperJsLoad', toggleSwipe);

		}

		if(!swiperInit) {

			swiperInit = true;

			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = '/js/swiper.min.js';

			script.onload = () => PubSub.publish('swiperJsLoad');

			setTimeout(() => {

				document.head.appendChild(script);

			}, window.pageYOffset === 0 ? 5000 : 100);

		}

	});

})(document.querySelectorAll('.swiper-container'));