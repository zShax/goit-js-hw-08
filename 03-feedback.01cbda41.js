!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),s?b(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?b(e):(r=i=void 0,u)}function q(){var e=g(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),q.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},q.flush=function(){return void 0===f?u:h(g())},q}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(){var e={email:j.querySelector('[name="email"]').value,message:j.querySelector('[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(j.querySelector('[name="email"]').value=e.email||"",j.querySelector('[name="message"]').value=e.message||"")})),j.addEventListener("submit",(function(e){e.preventDefault();var t=j.querySelector('[name="email"]').value,n=j.querySelector('[name="message"]').value;console.log("Form data submitted:",{email:t,message:n}),localStorage.removeItem("feedback-form-state"),j.querySelector('[name="email"]').value="",j.querySelector('[name="message"]').value=""}))}();
//# sourceMappingURL=03-feedback.01cbda41.js.map
