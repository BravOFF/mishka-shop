((modal)=>{

	"use strict";

	if(!modal) {

		return;

	}

	var items = modal.querySelectorAll('.modal__item'),
		btns = document.querySelectorAll('[data-modal]'),
		box = modal.querySelector('.modal__box'),
		wrapper = document.querySelector('.wrapper'),
		windowScroll = window.pageYOffset;

	modal.addEventListener('click', (e) => {

		if(e.target.classList.contains('modal') || e.target.closest('.modal__close')){

			MI.hideModal();

		}

	});

	MI.hideModal = () => {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		MI.activeModal = false;

	};

	MI.modalShow = (selector)=>{

		if(!MI.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		box.classList.toggle('is-narrow', selector === 'photo');

		MI.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items,(el)=>{

			el.classList.toggle('visuallyhidden', el !== MI.activeModal);

		});

		modal.classList.remove('visuallyhidden');

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		MI.activeModal.focus();

	};

	Array.prototype.forEach.call(btns,(el)=>{

		el.addEventListener('click',(e)=>{

			e.preventDefault();

			MI.modalShow(el.getAttribute('data-modal'));

		});

	});

})(document.querySelector('.modal'));