// ==UserScript==
// @name			Image One Clicker
// @namespace		http://nanosoft.net/
// @version	  		1.1.3
// @description		AI domination!
// @author			Nano
// @match			*://*/*
// @icon			https://github.com/nanojin/tampermonkey/raw/main/palette.svg
// @updateURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
// @downloadURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
// @grant			none
// ==/UserScript==

(function() {
	'use strict';

	const image_click = new AbortController()
	const clickReport = (event) => {
		//console.log(event.type)
		if(MouseEvent.altKey === false){
			return;
		}

		var a = document.createElement('a')
		Object.assign(a, {download: ''})
		//document.querySelectorAll(":hover img"
		//).forEach(
		//  (img, index) => {
		//  Object.assign(a, {href: img.src})
		//  console.log(a)
		//  a.click()
		//})
		Array.from(
			document.elementsFromPoint(
				event.clientX,
				event.clientY
			)
		).filter(
			e => {return e.localName == 'img'}
		).forEach(
			img => {
				Object.assign(a, {href: img.src})
				console.log(a)
				a.click()
			}
		)
	}

	document.addEventListener("click", function (event) { clickReport(event) }, true, { signal: image_click.signal })
})();

/*{
	Research:

	Google:	{
		https://www.google.com/search?q=js+doiwnload+link
		https://www.google.com/search?q=js+get+mouse+position
		https://www.google.com/search?q=js+get+element+under+cursor
		https://www.google.com/search?q=js+filter+array+by+element+type
		https://www.google.com/search?q=js+filter+nodelist+by+element+type
		https://www.google.com/search?q=js+check+if+button+is+held
	}
	Stack Overflow:	{
		https://stackoverflow.com/questions/4727919/get-selected-element-type
		https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
		https://stackoverflow.com/q/11620698/8499999 ← js download a link
	}
	Links:	{
		https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
		https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey
		https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers
		https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
		https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	}
	Icons:	{
		https://brandeps.com/icon/Design
	}
}*/