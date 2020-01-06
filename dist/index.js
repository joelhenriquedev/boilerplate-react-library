"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function styleInject(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var css=".test {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n\n.buttonExample {\n  background: red;\n}";styleInject(css);var css$1=".card {\n  background: #ffffff;\n  border: 1px solid #ebebeb;\n  width: 250px;\n  padding: 10px; }\n  .card__header {\n    height: 160px; }\n    .card__header img {\n      height: 100%;\n      width: 100%;\n      background-size: cover; }\n  .card__description {\n    font-size: 18px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 10px 0px;\n    text-align: justify; }\n  .card__action {\n    display: flex;\n    justify-content: flex-end; }\n    .card__action button {\n      border: none;\n      background: #065fd4;\n      color: #fff;\n      height: 35px;\n      padding: 0px 20px;\n      border-radius: 3px;\n      cursor: pointer;\n      font-family: Arial, Helvetica, sans-serif;\n      text-transform: uppercase;\n      font-weight: bold; }\n";styleInject(css$1);var ExampleComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props.text;return React__default.createElement("div",{className:"card"},React__default.createElement("header",{className:"card__header"},React__default.createElement("img",{src:"https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"})),React__default.createElement("main",{className:"card__description"},e),React__default.createElement("footer",{className:"card__action"},React__default.createElement("button",null,"read")))}}]),t}();_defineProperty(ExampleComponent,"propTypes",{text:PropTypes.string}),module.exports=ExampleComponent;
//# sourceMappingURL=index.js.map