"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function debounce(i,n){var r;return function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];r&&clearTimeout(r),r=setTimeout(function(){i.apply(void 0,t),r=null},n)}}var Slide=function(){function o(e,t){_classCallCheck(this,o),this.slide=document.querySelector(e),this.wrapper=document.querySelector(t),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="ativo",this.changeEvent=new Event("changeevent")}return _createClass(o,[{key:"transition",value:function(e){this.slide.style.transition=e?"transform .3s":""}},{key:"moveSlide",value:function(e){this.dist.movePosition=e,this.slide.style.transform="translate3d(".concat(e,"px, 0, 0)")}},{key:"updatePosition",value:function(e){return this.dist.movement=1.3*(this.dist.startX-e),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(e){var t;t="mousedown"===e.type?(e.preventDefault(),this.dist.startX=e.clientX,"mousemove"):(this.dist.startX=e.changedTouches[0].clientX,"touchmove"),this.wrapper.addEventListener(t,this.onMove),this.transition(!1)}},{key:"onMove",value:function(e){var t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX,o=this.updatePosition(t);this.moveSlide(o)}},{key:"onEnd",value:function(e){var t="mouseup"===e.type?"mousemove":"touchmove";this.wrapper.removeEventListener(t,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){120<this.dist.movement&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(e){var t=(this.wrapper.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=_toConsumableArray(this.slide.children).map(function(e){return{position:t.slidePosition(e),element:e}})}},{key:"slidesIndexNav",value:function(e){var t=this.slideArray.length-1;this.index={prev:e?e-1:void 0,active:e,next:e===t?void 0:e+1}}},{key:"changeSlide",value:function(e){var t=this.slideArray[e];this.moveSlide(t.position),this.slidesIndexNav(e),this.dist.finalPosition=t.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach(function(e){return e.element.classList.remove(t.activeClass)}),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var e=this;setTimeout(function(){e.slidesConfig(),e.changeSlide(e.index.active)},1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=debounce(this.onResize.bind(this),200),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.addSlideEvents(),this.slidesConfig(),this.transition(!0),this.addResizeEvent(),this.changeSlide(0),this}}]),o}(),SlideNav=function(){function i(e,t){var o;return _classCallCheck(this,i),(o=_possibleConstructorReturn(this,_getPrototypeOf(i).call(this,e,t))).bindControlEvents(),o}return _inherits(i,Slide),_createClass(i,[{key:"addArrow",value:function(e,t){this.prevElement=document.querySelector(e),this.nextElement=document.querySelector(t),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var o=document.createElement("ul");return o.dataset.control="slide",this.slideArray.forEach(function(e,t){o.innerHTML+='<li><a href="#slide'.concat(t+1,'">').concat(t+1,"</a></li>")}),this.wrapper.appendChild(o),o}},{key:"eventControl",value:function(e,t){var o=this;e.addEventListener("click",function(e){e.preventDefault(),o.changeSlide(t)}),this.wrapper.addEventListener("changeevent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach(function(e){return e.classList.remove(t.activeClass)}),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(e){this.control=document.querySelector(e)||this.createControl(),this.controlArray=_toConsumableArray(this.control.children),this.controlArray.forEach(this.eventControl),this.activeControlItem()}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),i}(),slide=new SlideNav(".slide",".wrapper");slide.init(),slide.addArrow(".prev",".next"),slide.addControl(".custom-controls");var timer=document.querySelectorAll(".custom-controls > li"),i=0;setInterval(function(){timer[i].click(),i<2?i++:i=0},5e3),function(){function e(){var a=window,c=document;if(!("scrollBehavior"in c.documentElement.style&&!0!==a.__forceSmoothScrollPolyfill__)){var e,t=a.HTMLElement||a.Element,d=468,u={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,elementScroll:t.prototype.scroll||v,scrollIntoView:t.prototype.scrollIntoView},h=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now,o=(e=a.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);a.scroll=a.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?s.call(a,c.body,void 0!==arguments[0].left?~~arguments[0].left:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:a.scrollY||a.pageYOffset):u.scroll.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=_typeof(arguments[0])?arguments[0]:a.scrollX||a.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:a.scrollY||a.pageYOffset))},a.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?u.scrollBy.call(a,void 0!==arguments[0].left?arguments[0].left:"object"!=_typeof(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):s.call(a,c.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;s.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=_typeof(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var e=function(e){for(;e!==c.body&&!1===(o=n(t=e,"Y")&&r(t,"Y"),i=n(t,"X")&&r(t,"X"),o||i);)e=e.parentNode||e.host;var t,o,i;return e}(this),t=e.getBoundingClientRect(),o=this.getBoundingClientRect();e!==c.body?(s.call(this,e,e.scrollLeft+o.left-t.left,e.scrollTop+o.top-t.top),"fixed"!==a.getComputedStyle(e).position&&a.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):a.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else u.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function v(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=_typeof(e)||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==_typeof(e)&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function n(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function r(e,t){var o=a.getComputedStyle(e,null)["overflow"+t];return"auto"===o||"scroll"===o}function s(e,t,o){var i,n,r,s,l=h();s=e===c.body?(n=(i=a).scrollX||a.pageXOffset,r=a.scrollY||a.pageYOffset,u.scroll):(n=(i=e).scrollLeft,r=e.scrollTop,v),function e(t){var o,i,n,r,s=(h()-t.startTime)/d;r=s=1<s?1:s,o=.5*(1-Math.cos(Math.PI*r)),i=t.startX+(t.x-t.startX)*o,n=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,i,n),i===t.x&&n===t.y||a.requestAnimationFrame(e.bind(a,t))}({scrollable:i,method:s,startTime:l,startX:n,startY:r,x:t,y:o})}}"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports={polyfill:e}:e()}();var abrirMenu=function e(){menuMobile.classList.add("active"),botaoMenu.removeEventListener("click",e),botaoMenu.addEventListener("click",fecharMenu)},fecharMenu=function e(){menuMobile.classList.remove("active"),botaoMenu.removeEventListener("click",e),botaoMenu.addEventListener("click",abrirMenu)},botaoMenu=document.querySelector("#botaoMenu"),menuMobile=document.querySelector(".header-menu"),linksInternos=document.querySelectorAll('.header-menu a[href^="#"]');botaoMenu.addEventListener("click",abrirMenu);var scrollSuave=function(e){e.preventDefault(),console.log(this);var t=this.getAttribute("href").slice(1);console.log(t);var o=document.getElementById(t);console.log(o),o.scrollIntoView({behavior:"smooth",block:"start"})},linkInternos=document.querySelectorAll('.header-menu a[href^="#"]');linkInternos.forEach(function(e){return e.addEventListener("click",scrollSuave)});