webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(2);


//const doAjax = require('./ajax').doAjax;

document.querySelector('#requete')
    .addEventListener('click', function() {
        Object(__WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* doAjax */])({
            url: 'fichier.txt',
            callback: function(reponse) {
                document.querySelector('#para')
                    .innerHTML = reponse;
            }
        });
    });
document.querySelector('#requete2')
    .addEventListener('click', function() {
        Object(__WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* doAjax */])({
            url: 'README.md',
            callback: function(reponse) {
                let div = document.createElement('div');
                div.innerHTML = reponse;
                document.querySelector('#para2')
                    .appendChild(div);
            }
        });
    });
let button = document.querySelector('#requeteEvil');
button.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'evil.js');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                eval(xhr.responseText);
            } else {
                console.error('unexpected status code:', this.status);
            }
        }
    };
    xhr.send(null);
});
button = document.querySelector("#yo-button");
button.addEventListener("click", function(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'yo.php');
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("success: " + xhr.responseText);
            } else {
                console.error("unexpected status code:" + xhr.status);
                console.error(xhr.responseText);
            }
        }
    };
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send('text=toto');
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = doAjax;
//module.exports.doAjax = doAjax;
function doAjax(options) {
    //On définit les paramètres par défaut de notre requete
    let defaults = {
        url: '',
        method: 'GET',
        async: true,
        args: '',
        callback: function() {},
        callbackError: function() {}
    };
    //On assigne les arguments de options à defaults
    assignArgs(options, defaults);

    //On crée une nouvelle instance d'objet AJAX
    let ajax = new XMLHttpRequest();
    //AJAX étant une service asynchrone, il va falloir
    //lui dire via des évènements comment se comporter
    //au moment où il aura terminé sa requête et que 
    //sa réponse sera disponible
    ajax.onreadystatechange = function() {
        /*Le readystatechange sera appelé un certain
        nombre de fois selon où en est notre requête
        (codes dispo sur mozilla). Le seul code qui
        va nous intéresser nous sera celui indiquant que
        la requête est terminé et la réponse disponible : 4
        */
        if (ajax.readyState === 4) {
            //On ne voudra manipuler la réponse seulement si
            //la requête s'est couronnée de succès
            if (ajax.status === 200 || ajax.status === 304) {
                //La réponse de la requête se trouve alors dans
                //l'objet ajax dans sa propriété response.
                defaults.callback(ajax.response);
            } else {
                defaults.callbackError();
            }
        }
    };
    //On ouvre le requête en lui fournissant le type de
    //requête HTTP, l'url à requêter et si c'est synchrone ou non
    ajax.open(defaults.method, defaults.url, defaults.async);
    //On envoie la requête
    ajax.send(defaults.args);
}
/**
 * Fonction qui itère sur les propriétés d'un objet source,
 * vérifie si l'objet target possède une propriété correspondate
 * et si oui, assigne comme valeur de cette propriété target
 * la valeur de la propriété source.
 * @param {*} source 
 * @param {*} target 
 */
function assignArgs(source, target) {
    for (let clef in source) {
        if (target.hasOwnProperty(clef)) {
            target[clef] = source[clef];
        }
    }
}

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2V4ZW1wbGVfYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2FqYXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUMzREQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImV4ZW1wbGUtYWpheC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb0FqYXggfSBmcm9tICcuL2FqYXgnO1xuXG4vL2NvbnN0IGRvQWpheCA9IHJlcXVpcmUoJy4vYWpheCcpLmRvQWpheDtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcXVldGUnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb0FqYXgoe1xuICAgICAgICAgICAgdXJsOiAnZmljaGllci50eHQnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHJlcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFyYScpXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXF1ZXRlMicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvQWpheCh7XG4gICAgICAgICAgICB1cmw6ICdSRUFETUUubWQnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHJlcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcmEyJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xubGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXF1ZXRlRXZpbCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdHRVQnLCAnZXZpbC5qcycpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZXZhbCh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5leHBlY3RlZCBzdGF0dXMgY29kZTonLCB0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKG51bGwpO1xufSk7XG5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3lvLWJ1dHRvblwiKTtcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCAneW8ucGhwJyk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVhZHlTdGF0ZSk7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzczogXCIgKyB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVuZXhwZWN0ZWQgc3RhdHVzIGNvZGU6XCIgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2VuZCgndGV4dD10b3RvJyk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjcmlwdHMvZXhlbXBsZV9hamF4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vbW9kdWxlLmV4cG9ydHMuZG9BamF4ID0gZG9BamF4O1xuZXhwb3J0IGZ1bmN0aW9uIGRvQWpheChvcHRpb25zKSB7XG4gICAgLy9PbiBkw6lmaW5pdCBsZXMgcGFyYW3DqHRyZXMgcGFyIGTDqWZhdXQgZGUgbm90cmUgcmVxdWV0ZVxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGFyZ3M6ICcnLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgY2FsbGJhY2tFcnJvcjogZnVuY3Rpb24oKSB7fVxuICAgIH07XG4gICAgLy9PbiBhc3NpZ25lIGxlcyBhcmd1bWVudHMgZGUgb3B0aW9ucyDDoCBkZWZhdWx0c1xuICAgIGFzc2lnbkFyZ3Mob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgLy9PbiBjcsOpZSB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZCdvYmpldCBBSkFYXG4gICAgbGV0IGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL0FKQVggw6l0YW50IHVuZSBzZXJ2aWNlIGFzeW5jaHJvbmUsIGlsIHZhIGZhbGxvaXJcbiAgICAvL2x1aSBkaXJlIHZpYSBkZXMgw6l2w6huZW1lbnRzIGNvbW1lbnQgc2UgY29tcG9ydGVyXG4gICAgLy9hdSBtb21lbnQgb8O5IGlsIGF1cmEgdGVybWluw6kgc2EgcmVxdcOqdGUgZXQgcXVlIFxuICAgIC8vc2EgcsOpcG9uc2Ugc2VyYSBkaXNwb25pYmxlXG4gICAgYWpheC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLypMZSByZWFkeXN0YXRlY2hhbmdlIHNlcmEgYXBwZWzDqSB1biBjZXJ0YWluXG4gICAgICAgIG5vbWJyZSBkZSBmb2lzIHNlbG9uIG/DuSBlbiBlc3Qgbm90cmUgcmVxdcOqdGVcbiAgICAgICAgKGNvZGVzIGRpc3BvIHN1ciBtb3ppbGxhKS4gTGUgc2V1bCBjb2RlIHF1aVxuICAgICAgICB2YSBub3VzIGludMOpcmVzc2VyIG5vdXMgc2VyYSBjZWx1aSBpbmRpcXVhbnQgcXVlXG4gICAgICAgIGxhIHJlcXXDqnRlIGVzdCB0ZXJtaW7DqSBldCBsYSByw6lwb25zZSBkaXNwb25pYmxlIDogNFxuICAgICAgICAqL1xuICAgICAgICBpZiAoYWpheC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAvL09uIG5lIHZvdWRyYSBtYW5pcHVsZXIgbGEgcsOpcG9uc2Ugc2V1bGVtZW50IHNpXG4gICAgICAgICAgICAvL2xhIHJlcXXDqnRlIHMnZXN0IGNvdXJvbm7DqWUgZGUgc3VjY8Ooc1xuICAgICAgICAgICAgaWYgKGFqYXguc3RhdHVzID09PSAyMDAgfHwgYWpheC5zdGF0dXMgPT09IDMwNCkge1xuICAgICAgICAgICAgICAgIC8vTGEgcsOpcG9uc2UgZGUgbGEgcmVxdcOqdGUgc2UgdHJvdXZlIGFsb3JzIGRhbnNcbiAgICAgICAgICAgICAgICAvL2wnb2JqZXQgYWpheCBkYW5zIHNhIHByb3ByacOpdMOpIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLmNhbGxiYWNrKGFqYXgucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5jYWxsYmFja0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vT24gb3V2cmUgbGUgcmVxdcOqdGUgZW4gbHVpIGZvdXJuaXNzYW50IGxlIHR5cGUgZGVcbiAgICAvL3JlcXXDqnRlIEhUVFAsIGwndXJsIMOgIHJlcXXDqnRlciBldCBzaSBjJ2VzdCBzeW5jaHJvbmUgb3Ugbm9uXG4gICAgYWpheC5vcGVuKGRlZmF1bHRzLm1ldGhvZCwgZGVmYXVsdHMudXJsLCBkZWZhdWx0cy5hc3luYyk7XG4gICAgLy9PbiBlbnZvaWUgbGEgcmVxdcOqdGVcbiAgICBhamF4LnNlbmQoZGVmYXVsdHMuYXJncyk7XG59XG4vKipcbiAqIEZvbmN0aW9uIHF1aSBpdMOocmUgc3VyIGxlcyBwcm9wcmnDqXTDqXMgZCd1biBvYmpldCBzb3VyY2UsXG4gKiB2w6lyaWZpZSBzaSBsJ29iamV0IHRhcmdldCBwb3Nzw6hkZSB1bmUgcHJvcHJpw6l0w6kgY29ycmVzcG9uZGF0ZVxuICogZXQgc2kgb3VpLCBhc3NpZ25lIGNvbW1lIHZhbGV1ciBkZSBjZXR0ZSBwcm9wcmnDqXTDqSB0YXJnZXRcbiAqIGxhIHZhbGV1ciBkZSBsYSBwcm9wcmnDqXTDqSBzb3VyY2UuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFxuICovXG5mdW5jdGlvbiBhc3NpZ25BcmdzKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgZm9yIChsZXQgY2xlZiBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShjbGVmKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2NsZWZdID0gc291cmNlW2NsZWZdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2NyaXB0cy9hamF4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=