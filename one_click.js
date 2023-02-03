// ==UserScript==
// @name			Image One Clicker
// @namespace		http://nanosoft.net/
// @version	  		1.1.4
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

	var history_map = new Map()

	const image_click = new AbortController()
	const form = document.createElement('form')
	const clickReport = (event) => {
		// if(MouseEvent.altKey === false){
		// 	return;
		// }	//	Check for modifier key combo

		// var a = document.createElement('a')
		// Object.assign(a, {download: ''})
		// //document.querySelectorAll(":hover img"
		// //).forEach(
		// //  (img, index) => {
		// //  Object.assign(a, {href: img.src})
		// //  console.log(a)
		// //  a.click()
		// //})
		// Array.from(
		// 	document.elementsFromPoint(
		// 		event.clientX,
		// 		event.clientY
		// 	)
		// ).filter(
		// 	e => {return e.localName == 'img'}
		// ).forEach(
		// 	img => {
		// 		Object.assign(a, {href: img.src})
		// 		console.log(a)
		// 		a.click()
		// 	}
		// )

		//	Attempting download using the Form element
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
			e => {
				return e.localName == 'img'	}
		).forEach(
			img => {
				if(history_map[img.src])
					return;
				history_map[img.src] = true;
				Object.assign(form, {
					action: img.src
				})
				console.log(form)
				form.submit()
			}
		)
	}
	Object.assign(form, {
		target: "_blank"
	})

	document.body.append(form)
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
		https://www.google.com/search?q=Form+submission+canceled+because+the+form+is+not+connected
	}
	Stack Overflow:	{
		https://stackoverflow.com/questions/4727919/get-selected-element-type
		https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
		https://stackoverflow.com/q/11620698/8499999 ← js download a link
		https://stackoverflow.com/a/42081856/8499999 ← document.body.appendChild(form)
	}
	Links:	{
		https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
		https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
		https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey
		https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers
		https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
		https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	}
	Icons:	{
		https://brandeps.com/icon/Design
	}
}*/