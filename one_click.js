// ==UserScript==
// @name			Image One Clicker
// @namespace		http://nanosoft.net/
// @version				1.1.6.1
// @description		AI domination!
// @author			Nano
// @match			*://*/*
// @icon			https://github.com/nanojin/tampermonkey/raw/main/palette.svg
// @updateURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
// @downloadURL		https://github.com/nanojin/tampermonkey/raw/main/one_click.js
//// @require			https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/md5.js
//// @require			https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core.js
// @run-at			document-start
// @run-at			document-idle
// @grant			none
// ==/UserScript==

(function () {
	'use strict';

	var history_map = new Map()

	const image_click = new AbortController()
	// const form = document.createElement('form')
	const check_map = key => {
		if (
			history_map[key]
		)	return (0);

		history_map[key] = true
		console.log(key)
		return (1)
	}
	const download_image = img => {
		const a = document.createElement('a')
		Object.assign(a, {
			href: img.src,
			rel: 'opener',
			target: 'i1c_popup',
			download: img.filename
		})
		const pop = window.open("", 'i1c_popup')
		a.click()
		pop.close()
	}
	const clickReport = (event) => {
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
				if (check_map(img.src)) {
					download_image(img)
				}
			}
		)
	}
	// Object.assign(form, {
	// 	method: "GET",
	// 	rel: "noopener",
	// 	target: "_blank"
	// })

	async function image_blob(node) {
		if (!node.manualset && node.nodeName.toLowerCase() === 'img') {
			node.filename = node.src.split('/').at(-1).split('?').at(0)
			node.src = await fetch(node.src)
			.then(response => response.blob())
			.then(blob => URL.createObjectURL(blob))
			node.manualset = true
		}
		return node
	}

	// function src_blob() {
		document.querySelectorAll('img').forEach(
			img => {
				img.onload = (image_blob(img))()
			}
		)
	// }	// src_blob(); // Run on existing img elements

	const observer = new MutationObserver(
		mutations_list => mutations_list.forEach(
			mutation => mutation.addedNodes.forEach(
				node => node.onload = (image_blob(node))()
			)
		)
	)

	observer.observe(document.body, {
		subtree: true,
		childList: true
	})
	// document.body.append(form)
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
		https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
	}
	Icons:	{
		https://brandeps.com/icon/Design
	}
}*/