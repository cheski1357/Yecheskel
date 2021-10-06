
messageBox = (function () {
    'use strict'

    function showMessageBox(msg) {
       const div = document.createElement('div');
       const span = document.createElement('span');
       span.innerHTML = msg;
       div.appendChild(span);
       document.body.appendChild(div);
    }
    return {
        showMessageBox: showMessageBox
    }
}())

messageBox.showMessageBox('hello world');
