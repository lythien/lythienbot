// ==UserScript==
// @name         Hack Diep.io v2 -LyThientop
// @description  Hack Diep.io v2 -LyThientop Choi Cung Nhau
// @version      2.0
// @author       Lý Thiện
// @match        http://diep.io/
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      http://lythien.top/lythiendiep-ver2/
// @connect      diep.io
// @namespace http://lythien.top/lythiendiep-ver2/diep.js

// ==/UserScript==

window.stop();

GM_xmlhttpRequest({
    method: "GET",
    url: "http://lythien.top/lythiendiep-ver2/diep.html",
    onload: function(e) {
         document.open(), document.write(e.responseText), document.close();
    }
});
