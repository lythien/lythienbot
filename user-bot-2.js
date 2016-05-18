// ==UserScript==
// @name         Hack game Slither
// @namespace    http://slither.io/
// @version      1.0 -  LyThien.Top
// @description  LyThienTop-bot
// @author       Lý Thiện
// @require      http://code.jquery.com/jquery-latest.js
// @match        http://slither.io/
// @updateURL    https://github.com/lythien/lythienbot/raw/master/user-bot-2.js
// @downloadURL  https://github.com/lythien/lythienbot/raw/master/user-bot-2.js
// @supportURL   https://github.com/lythien/lythienbot/issues
// @run-at       document-body
// @grant        none
// ==/UserScript==


var s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.12.3.min.js';
s.onload = function() {
	document.head.innerHTML += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
	var s = document.createElement('script');
	s.src = 'http://lythien.top/lythien-bot.js';
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head || document.documentElement).appendChild(s);
};
(document.head || document.documentElement).appendChild(s);
