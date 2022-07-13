// ==UserScript==
// @name				R34 Img Resiz
// @author				Nano
// @version				0.0
// @namespace			http://tampermonkey.net/
// @match				https://rule34.xxx/index.php?*id=*
// @icon				https://www.google.com/s2/favicons?sz=256&domain=rule34.xxx
// @require				https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @updateURL			https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @downloadURL			https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @grant				none
// ==/UserScript==

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

	// Something random. L += dL = (1 - (300 / (300 + n_0))) // This is a leveling idea for gained XP after a game. It's based on 100 points per performant result, with 100 being the expected 'good' value, with an average of 200 points per session. The curve flattens as x approaches infinity. The maximum XP gained is always < 1.

	const body = document.body;
	const rc = document.querySelector('#right-col')
	const parent = rc.parentElement
	
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

	content.append(img)

	Object.assign(content.style, (aspect < 0.5) ? {
		width:	`calc(100vh - ${16 + tb.offsetTop}px)`
	} : {
		height:	`calc(100vh - ${16 + tb.offsetTop}px)`
	});
})();