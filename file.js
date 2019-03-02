// ==UserScript==
// @name        Update and Download URL Metadata Test
// @version     1
// @updateURL   
// @downloadURL 
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("videooverlay").click();
    var src = document.getElementById('olvideo_html5_api').src;

    var downloadBTN = document.getElementById('btnDl');
    var newDL = document.createElement('A');
    newDL.className = "main-button";
    newDL.id = "btnDl";
    newDL.innerHTML = "Download";
    newDL.style.marginLeft = "-4px";
    downloadBTN.remove();
    newDL.href = src;
    document.getElementsByClassName("file-details")[0].appendChild(newDL);
})();