// ==UserScript==
// @name				R34 Img Resiz
// @author				Nano
// @version				0.0.002.3
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

	const media = document.querySelector(`video#gelcomVideoPlayer`) || document.querySelector('img#image')

	media.onloadeddata = () => {
		const aspect = media.localName === "video" ? media.videoWidth / media.videoHeight : media.clientWidth / media.clientHeight

		const body = document.body;
		const rc = document.querySelector('#right-col')
		const parent = rc.parentElement
		
		const	tb = document.createElement('table')
		// const	tbv = document.createElement('td')	// vertical table
		
		// let		tr = []
		// for(var i = 0; i < ROWS; i++) {
		// 	tr.push(document.createElement('tr'))
		// }

		const	content = document.createElement('td')
		const	layout = document.createElement('td')
		const	tags = document.createElement('td')

		layout.append(document.querySelector('#long-notice'), document.querySelector('#notice'), document.querySelector('#content'))
		tb.append(tags, content, layout)
		// tb.append(tags, tbv)
		// tbv.append(content, layout)
		document.querySelector('#header').insertAdjacentElement("afterend", tb)

		content.append(media)
		tags.append(document.querySelector('div.sidebar'))

		const calc = new Object()

		calc.v = `min(100vh, 100vw)`
		calc.c = `(${calc.v} - ${16 + tb.offsetTop}px)`
		calc.vh = `calc(${calc.c})`
		calc.w = `calc(${calc.c} * ${16 / 9})`
		calc.a =  [`auto`, `100%`]

		// Object.assign(media.style,  {
		// 	height		: ["auto", "100%"][(aspect < 0.5)],
		// 	width		: ["100%", "auto"][(aspect < 0.5)],
		// })
		Object.assign(media.style,  {
			width		: '-webkit-fill-available',
			objectFit	: "contain"
		})
		Object.assign(content.style, (aspect < 0.5) ? {
			width		: calc.vh
		} : {
			maxWidth	: calc.w,
			height		: calc.vh
		});
	}

	// const video = document.querySelector('div.content#right-col video')

	// Something random. L += dL = (1 - 300 / (300 + n_0 ... n_m)) // This is a leveling idea for gained XP after a game. It's based on 100 points per performant result, with 100 being the expected 'good' value, with an average of 200 points per session. The curve flattens as n approaches infinity. The maximum XP gained is always < 1. Based on the average, a score of 200 will yield an average of +0.4 XP gained per level. This remains constant, forever. Likely until some upper level cap exists. There the net gain will be L + min(dL, 1 - L), where L is the current level represented as a float and dL is the pending change in level.

})();