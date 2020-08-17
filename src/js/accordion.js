((accordion)=>{

	"use strict";


	if(!accordion.length) {

		return;

	}

	Array.prototype.forEach.call(accordion, function(elem){

		var active = null,
			btns = elem.querySelectorAll('.accordion__btn'),
			head = elem.querySelectorAll('.accordion__head'),
			body = elem.querySelectorAll('.accordion__body');

		Array.prototype.forEach.call(btns, function(btn,index){

			btn.addEventListener('click', function(){

				btn.closest('.accordion__head').classList.toggle('is-open');

				if(index === active){

					active = null;

				}
				else {

					active = index;

					Array.prototype.forEach.call(head, function(el,_index){

						if(active !== _index) {

							el.classList.remove('is-open');

						}

					});

					// Menu off

					MI.menuOFF = true;

					setTimeout(()=>{

						if(!MI.isInViewport(head[active])){

							head[active].scrollIntoView({ behavior: 'smooth' });

						}

						setTimeout(()=>{

							MI.menuOFF = false;

						},3000);

					},100);

				}

			});

		});

	});

})(document.querySelectorAll('.accordion'));