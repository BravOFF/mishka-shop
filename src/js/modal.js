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

			DR.hideModal();

		}

	});

	DR.hideModal = () => {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		DR.activeModal = false;

	};

	DR.modalShow = (selector)=>{

		if(!DR.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		box.classList.toggle('is-narrow', selector === 'photo');

		DR.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items,(el)=>{

			el.classList.toggle('visuallyhidden', el !== DR.activeModal);

		});

		modal.classList.remove('visuallyhidden');

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		DR.activeModal.focus();

	};

	Array.prototype.forEach.call(btns,(el)=>{

		el.addEventListener('click',(e)=>{

			e.preventDefault();

			DR.modalShow(el.getAttribute('data-modal'));

		});

	});

})(document.querySelector('.modal'));