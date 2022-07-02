// ==UserScript==
// @name				 R34 Img Resiz
// @namespace			http://tampermonkey.net/
// @updateURL			
// @version				0.1
// @description			try to take over the world!
// @author				You
// @match				https://rule34.xxx/index.php?page=post&s=view&id=*
// @include				https://rule34.xxx/index.php?page=post&s=view&id=*
// @icon				https://www.google.com/s2/favicons?sz=256&domain=rule34.xxx
// @grant				none
// ==/UserScript==

(function() {
	'use strict';

	const FRAME_WIDTH = 1200;
	const FRAME_HEIGHT = 1200 * 9 / 16;

	const body = document.body;
	const frame = {x: body.clientWidth, y: body.clientHeight};
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

	const img = document.querySelector(`img#image`);
	const aspect = img.width / img.height;
	Object.assign(img.style, (aspect < 0.5) ? {
		height:	`calc(calc(100vh - 127px) * ${1 / aspect})`,
		width:	`calc(100vh - 127px)`
	} : {
		width:	`calc(calc(100vh - 127px) * ${aspect})`,
		height:	`calc(100vh - 127px)`
	});

	// while (img.previousElementSibling) img.previousElementSibling.remove();
	while (img.previousElementSibling) img.parentElement.insertBefore(img, img.previousElementSibling);
	// Object.assign(img.style, {
	// 	width:	`min(calc(calc(100vh - 127px) * ${aspect}), max(calc(100vw * 0.70710678118), 1200))`,
	// 	height:	`min(calc(100vh - 127px)), max(calc(100vw * 0.70710678118), 1200) * ${1 / aspect}))`
	// });

	
	// Object.assign(img.style, style)
})();