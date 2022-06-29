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

	const img = document.querySelector(`img#image`);
	console.log(img);

	if (img.height / img.width < 1) { const style = {} }
	else (img.height / img.width < 1) { const style = {} }
	
	Object.assign(img.style, style)
})();