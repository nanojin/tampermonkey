// ==UserScript==
// @name			Image One Clicker
// @namespace		http://nanosoft.net/
// @version				1.1.5.1
// @description		AI domination!
// @author			Nano
// @match			*://*/*
// @icon			https://github.com/nanojin/tampermonkey/raw/main/palette.svg
// @updateURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
// @downloadURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
// @run-at			document-start
// @run-at			document-idle
// @grant			none
// ==/UserScript==

(function () {
	'use strict';

	var history_map = new Map()

	const image_click = new AbortController()
	const form = document.createElement('form')
	const img_blob = img => {
		img.onload = function () {
			this.src = fetch_blobURL(this.src)
		}
	}
	const download_image = src => {
		const a = document.createElement('a')
		Object.assign(a, {
			href: url,
			rel: 'opener',
			target: 'popup',
			download: src.split('/').at(-1).split('?').at(0)
		})
		const pop = window.open("", 'popup')
		a.click()
		pop.close()
	}
	const fetch_blobURL = async src => {
		return await fetch(src)
			.then(
				response => response.blob()
			).then(
				blob => URL.createObjectURL(blob)
			)
		const blob = await img.blob()
		console.log(blob)
		const url = URL.createObjectURL(blob)
		console.log(url)

		return url
	}
	const clickReport = (event) => {
		// if(MouseEvent.altKey === false){
		// 	return;
		// }	//	Check for modifier key combo

		// var a = document.createElement('a')
		// Object.assign(a, {download: ''})
		// //document.querySelectorAll(":hover img"
		// //).forEach(
		// //	(img, index) => {
		// //	Object.assign(a, {href: img.src})
		// //	console.log(a)
		// //	a.click()
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
		//	(img, index) => {
		//	Object.assign(a, {href: img.src})
		//	console.log(a)
		//	a.click()
		//})
		Array.from(
			document.elementsFromPoint(
				event.clientX,
				event.clientY
			)
		).filter(
			e => {
				return e.localName == 'img'
			}
		).forEach(
			img => {
				if (!history_map[img.src] && (history_map[img.src] = true)) {


					fetch_blobURL(img.src)

					// var xhr = new XMLHttpRequest()
					// xhr.open("GET", img.src)
					// // xhr.onload = event => {
					// // 	console.log(`response: ${event.target.response}`)
					// // }
					// xhr.send()
					// Object.assign(form, {
					// 	// download: '',
					// 	action: img.src
					// })
					// console.log(form)
					// form.submit()
				}
			}
		)
	}
	Object.assign(form, {
		method: "GET",
		rel: "noopener",
		target: "_blank"
	})

	function src_blob() {
		document.querySelectorAll('img').forEach(
			img => {
				img.filename = img.src.split('/').at(-1).split('?').at(0)
				img.onload = async () => {
					if (!img.noreset) {
						img.src = await fetch(img.src).then(response => response.blob()).then(blob => URL.createObjectURL(blob))
						img.noreset = true;
					}
				}
			}
		)
	}

	src_blob(); // Run on existing img elements
	const observer = new MutationObserver(
	)
	//document.body.addEventListener("change", function(e) {				src_blob()		})

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
		https://developer.mozilla.org/en-US/docs/Glossary/Idempotent
	}
	Icons:	{
		https://brandeps.com/icon/Design
	}
}*/