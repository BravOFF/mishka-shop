/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

(()=>{

	"use strict";

	window.DR = window.DR || {};
	DR.resizeTimeout = null;
	DR.windowWidthOLd = window.innerWidth;

	window.addEventListener("resize",()=>{

		window.requestAnimationFrame(()=>{

			if (!DR.resizeTimeout) {

				DR.resizeTimeout = setTimeout(()=>{

					DR.resizeTimeout = null;

					if(DR.windowWidthOLd !== window.innerWidth) {

						DR.windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("scroll",()=>{

		window.requestAnimationFrame(()=>{

			PubSub.publish('windowScroll');

		});

	});

	window.addEventListener("DOMContentLoaded",()=>{

		PubSub.publish('DOMContentLoaded');

	});

	window.addEventListener("load",()=>{

		PubSub.publish('pageLoad');

	});

	// обработчик анимаций
	DR.cssAnimation = (a)=>{var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]};

	// Determine if an element is in the visible viewport
	DR.isInViewport = (element) => {
		var rect = element.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	};

})();