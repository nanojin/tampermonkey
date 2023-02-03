// ==UserScript==
// @name			Image Clicker Saver
// @namespace		http://nanosoft.net/
// @version	  		1.1.2.1
// @description		AI domination!
// @author			Nano
// @match			*://*/*
// @icon			https://github.com/nanojin/tampermonkey/raw/main/palette.svg
// @grant			none
// ==/UserScript==

(function() {
	'use strict';

	const image_click = new AbortController()
	const clickReport = (event) => {
		//console.log(event.type)

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