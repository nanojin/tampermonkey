// ==UserScript==
// @name				 R34 Img Resiz
// @namespace			http://tampermonkey.net/
// @updateURL			
// @version				0.1
// @description			try to take over the world!
// @author				You
// @match				https://rule34.xxx/index.php?*id=*
// @include				https://rule34.xxx/index.php?page=post&s=view&id=*
// @icon				https://www.google.com/s2/favicons?sz=256&domain=rule34.xxx
// @grant				none
// ==/UserScript==

/* // ==UserScript==
// @name         R34 Img Resiz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rule34.xxx/index.php?*id=*
// @icon         https://www.google.com/s2/favicons?sz=256&domain=rule34.xxx
// @grant        none
// ==/UserScript== */


(function() {
	'use strict';

	const FRAME_WIDTH = 1200;
	const FRAME_HEIGHT = 1200 * 9 / 16;
	const ROWS = 2

	const img = document.querySelector(`img#image`);
	const aspect = img.width / img.height;
	Object.assign(img.style, (aspect < 0.5) ? {
		height: `auto`,
		width: `100%`
	} : {
		height: `100%`,
		width: `auto`
	})

	// Something random. L += dL = (1 - (300 / (300 + n_0)))

	const body = document.body;
	// const frame = {x: body.clientWidth, y: body.clientHeight};
	const rc = document.querySelector('#right-col')
	const parent = rc.parentElement
	// const frame = {x: parent.offsetLeft, y: parent.offsetTop};
	
	const	tb = document.createElement('table')
	
	// let		tr = []
	// for(var i = 0; i < ROWS; i++) {
	// 	tr.push(document.createElement('tr'))
	// }

	const	content = document.createElement('td')
	const	layout = document.createElement('td')
	const	tags = document.createElement('td')

	layout.append(document.querySelector('#long-notice'), document.querySelector('#notice'), document.querySelector('#content'))
	tb.append(content, layout, tags)
	document.querySelector('#header').insertAdjacentElement("afterend", tb)

	//	IDs
	content.id = "td-1"
	layout.id = "td-2"

	//	Position elements in the DOM

	// document.querySelector('#content').append(tb, rc)

	
	// const img = document.querySelector(`img#image`);
	// console.log(img);

	// const maxWidth = img.width * Math.min(1, FRAME_WIDTH / img.width);
	// const maxHeight = img.height * Math.min(1, FRAME_HEIGHT / img.height);

	// const style = (img.height / img.width < 1) ? {
	// 	height: "auto",
	// 	// width: "calc(100vh - 113px)"
	// 	width: "min(calc(100vh - 127px), 1200px)"
	// } : {
	// 	width: "auto",
	// 	height: "min(calc(100vh - 127px))"
	// };

	content.append(img)

	// while (img.previousElementSibling) img.previousElementSibling.remove();
	// while (img.previousElementSibling)
	// 	img.parentElement.insertBefore(img, img.previousElementSibling);

	Object.assign(content.style, (aspect < 0.5) ? {
		// height:	`calc(calc(100vh - ${16 + tb.offsetTop}px) * ${1 / aspect})`,
		width:	`calc(100vh - ${16 + tb.offsetTop}px)`
	} : {
		// width:	`calc(calc(100vh - ${16 + tb.offsetTop}px) * ${aspect})`,
		height:	`calc(100vh - ${16 + tb.offsetTop}px)`
	});
	// Object.assign(img.style, {
	// 	width:	`min(calc(calc(100vh - 127px) * ${aspect}), max(calc(100vw * 0.70710678118), 1200))`,
	// 	height:	`min(calc(100vh - 127px)), max(calc(100vw * 0.70710678118), 1200) * ${1 / aspect}))`
	// });

	
	// Object.assign(img.style, style)
})();