/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(1);


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
/* 1 */
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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzFiY2Q0MTU3NzA2NGE5ZjA1ZjkiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9leGVtcGxlX2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUMzREQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcxYmNkNDE1NzcwNjRhOWYwNWY5IiwiaW1wb3J0IHsgZG9BamF4IH0gZnJvbSAnLi9hamF4JztcblxuLy9jb25zdCBkb0FqYXggPSByZXF1aXJlKCcuL2FqYXgnKS5kb0FqYXg7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXF1ZXRlJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9BamF4KHtcbiAgICAgICAgICAgIHVybDogJ2ZpY2hpZXIudHh0JyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihyZXBvbnNlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcmEnKVxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVxdWV0ZTInKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb0FqYXgoe1xuICAgICAgICAgICAgdXJsOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihyZXBvbnNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJhMicpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbmxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVxdWV0ZUV2aWwnKTtcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgJ2V2aWwuanMnKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGV2YWwoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuZXhwZWN0ZWQgc3RhdHVzIGNvZGU6JywgdGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIuc2VuZChudWxsKTtcbn0pO1xuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5by1idXR0b25cIik7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdQT1NUJywgJ3lvLnBocCcpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coeGhyLnJlYWR5U3RhdGUpO1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3M6IFwiICsgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmV4cGVjdGVkIHN0YXR1cyBjb2RlOlwiICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLnNlbmQoJ3RleHQ9dG90bycpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3JpcHRzL2V4ZW1wbGVfYWpheC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL21vZHVsZS5leHBvcnRzLmRvQWpheCA9IGRvQWpheDtcbmV4cG9ydCBmdW5jdGlvbiBkb0FqYXgob3B0aW9ucykge1xuICAgIC8vT24gZMOpZmluaXQgbGVzIHBhcmFtw6h0cmVzIHBhciBkw6lmYXV0IGRlIG5vdHJlIHJlcXVldGVcbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBhcmdzOiAnJyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGNhbGxiYWNrRXJyb3I6IGZ1bmN0aW9uKCkge31cbiAgICB9O1xuICAgIC8vT24gYXNzaWduZSBsZXMgYXJndW1lbnRzIGRlIG9wdGlvbnMgw6AgZGVmYXVsdHNcbiAgICBhc3NpZ25BcmdzKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIC8vT24gY3LDqWUgdW5lIG5vdXZlbGxlIGluc3RhbmNlIGQnb2JqZXQgQUpBWFxuICAgIGxldCBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy9BSkFYIMOpdGFudCB1bmUgc2VydmljZSBhc3luY2hyb25lLCBpbCB2YSBmYWxsb2lyXG4gICAgLy9sdWkgZGlyZSB2aWEgZGVzIMOpdsOobmVtZW50cyBjb21tZW50IHNlIGNvbXBvcnRlclxuICAgIC8vYXUgbW9tZW50IG/DuSBpbCBhdXJhIHRlcm1pbsOpIHNhIHJlcXXDqnRlIGV0IHF1ZSBcbiAgICAvL3NhIHLDqXBvbnNlIHNlcmEgZGlzcG9uaWJsZVxuICAgIGFqYXgub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8qTGUgcmVhZHlzdGF0ZWNoYW5nZSBzZXJhIGFwcGVsw6kgdW4gY2VydGFpblxuICAgICAgICBub21icmUgZGUgZm9pcyBzZWxvbiBvw7kgZW4gZXN0IG5vdHJlIHJlcXXDqnRlXG4gICAgICAgIChjb2RlcyBkaXNwbyBzdXIgbW96aWxsYSkuIExlIHNldWwgY29kZSBxdWlcbiAgICAgICAgdmEgbm91cyBpbnTDqXJlc3NlciBub3VzIHNlcmEgY2VsdWkgaW5kaXF1YW50IHF1ZVxuICAgICAgICBsYSByZXF1w6p0ZSBlc3QgdGVybWluw6kgZXQgbGEgcsOpcG9uc2UgZGlzcG9uaWJsZSA6IDRcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKGFqYXgucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgLy9PbiBuZSB2b3VkcmEgbWFuaXB1bGVyIGxhIHLDqXBvbnNlIHNldWxlbWVudCBzaVxuICAgICAgICAgICAgLy9sYSByZXF1w6p0ZSBzJ2VzdCBjb3Vyb25uw6llIGRlIHN1Y2PDqHNcbiAgICAgICAgICAgIGlmIChhamF4LnN0YXR1cyA9PT0gMjAwIHx8IGFqYXguc3RhdHVzID09PSAzMDQpIHtcbiAgICAgICAgICAgICAgICAvL0xhIHLDqXBvbnNlIGRlIGxhIHJlcXXDqnRlIHNlIHRyb3V2ZSBhbG9ycyBkYW5zXG4gICAgICAgICAgICAgICAgLy9sJ29iamV0IGFqYXggZGFucyBzYSBwcm9wcmnDqXTDqSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5jYWxsYmFjayhhamF4LnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuY2FsbGJhY2tFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvL09uIG91dnJlIGxlIHJlcXXDqnRlIGVuIGx1aSBmb3Vybmlzc2FudCBsZSB0eXBlIGRlXG4gICAgLy9yZXF1w6p0ZSBIVFRQLCBsJ3VybCDDoCByZXF1w6p0ZXIgZXQgc2kgYydlc3Qgc3luY2hyb25lIG91IG5vblxuICAgIGFqYXgub3BlbihkZWZhdWx0cy5tZXRob2QsIGRlZmF1bHRzLnVybCwgZGVmYXVsdHMuYXN5bmMpO1xuICAgIC8vT24gZW52b2llIGxhIHJlcXXDqnRlXG4gICAgYWpheC5zZW5kKGRlZmF1bHRzLmFyZ3MpO1xufVxuLyoqXG4gKiBGb25jdGlvbiBxdWkgaXTDqHJlIHN1ciBsZXMgcHJvcHJpw6l0w6lzIGQndW4gb2JqZXQgc291cmNlLFxuICogdsOpcmlmaWUgc2kgbCdvYmpldCB0YXJnZXQgcG9zc8OoZGUgdW5lIHByb3ByacOpdMOpIGNvcnJlc3BvbmRhdGVcbiAqIGV0IHNpIG91aSwgYXNzaWduZSBjb21tZSB2YWxldXIgZGUgY2V0dGUgcHJvcHJpw6l0w6kgdGFyZ2V0XG4gKiBsYSB2YWxldXIgZGUgbGEgcHJvcHJpw6l0w6kgc291cmNlLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgXG4gKiBAcGFyYW0geyp9IHRhcmdldCBcbiAqL1xuZnVuY3Rpb24gYXNzaWduQXJncyhzb3VyY2UsIHRhcmdldCkge1xuICAgIGZvciAobGV0IGNsZWYgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoY2xlZikpIHtcbiAgICAgICAgICAgIHRhcmdldFtjbGVmXSA9IHNvdXJjZVtjbGVmXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjcmlwdHMvYWpheC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9