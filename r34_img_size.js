// ==UserScript==
// @name				R34 Img Resiz
// @author				Nano
// @version				0.0.002.8
// @namespace			http://tampermonkey.net/
// @match				https://rule34.xxx/index.php?*id=*
// @icon				https://www.google.com/s2/favicons?sz=256&domain=rule34.xxx
// // @require				https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @updateURL			https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @downloadURL			https://raw.githubusercontent.com/nanojin/tampermonkey/main/r34_img_size.js
// @grant				none
// ==/UserScript==


(function () {
	'use strict';

	const media = document.querySelector(`video#gelcomVideoPlayer`) || document.querySelector('img#image')
	const is_video = (media.id === "gelcomVideoPlayer")

	const tb = document.createElement('table')				//	Placeholder Table
	const content = document.createElement('td')			//	Media Divider
	const layout = document.createElement('td')				//	Leftover Content
	const tags = document.createElement('td')				//	Tags Divider
	const sidebar = document.querySelector('div.sidebar')	//	Sidebar Content

	const reformat = function (aspect) {
		//	Organize Layout
		{
			layout.append(document.querySelector('#long-notice'), document.querySelector('#notice'), document.querySelector('#content'))
			tb.append(tags, content, layout)
			document.querySelector('#header').insertAdjacentElement("afterend", tb)

			tags.append(sidebar)
			content.append(media)

			Object.assign(sidebar.style, {
				maxWidth: `${100 / 8}vw`,
				minWidth: `min-content`,
				width: "max-content"
			})
		}
		{
			const calc = new Object()

			{
				calc.v = 100
				calc.v = `min(${calc.v}vh, ${calc.v / Math.pow(2, 0.25)}vw)`
				calc.cv = `(${calc.v} - ${16 + tb.offsetTop}px)`
				calc.cw = `(${calc.v} - ${16 + content.offsetLeft * 3}px)`
				calc.vh = `calc(${calc.cv})`
				calc.w = `calc(${calc.cw} * ${16 / 9})`
				calc.a = [`auto`, `100%`]
			}

			// Object.assign(media.style,  {
			// 	height		: ["auto", "100%"][(aspect < 0.5)],
			// 	width		: ["100%", "auto"][(aspect < 0.5)],
			// })
			Object.assign(media.style, {
				width: '-webkit-fill-available',
				height: '100%',
				objectFit: "contain"
			});
			Object.assign(content.style,
				(aspect < 0.5) ? {
					width: calc.vh
				} : {
					height: calc.vh
				},
				{
					maxWidth: is_video ? calc.w : ""
				}
			// {
			// 	display: "flex",
			// 	flexDirection: "column"
			// }
			);
		}
	}

	// media

	if (is_video) {
		media.id = "nano-video"
		media.onloadeddata = reformat(media.videoWidth / media.videoHeight)
	} else {
		media.id = "nano-img"
		reformat(media.clientWidth / media.clientHeight)
	}

	// const video = document.querySelector('div.content#right-col video')

	// Something random. L += dL = (1 - 300 / (300 + n_0 ... n_m)) // This is a leveling idea for gained XP after a game. It's based on 100 points per performant result, with 100 being the expected 'good' value, with an average of 200 points per session. The curve flattens as n approaches infinity. The maximum XP gained is always < 1. Based on the average, a score of 200 will yield an average of +0.4 XP gained per level. This remains constant, forever. Likely until some upper level cap exists. There the net gain will be L + min(dL, 1 - L), where L is the current level represented as a float and dL is the pending change in level.

})();