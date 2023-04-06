"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login2";
exports.ids = ["pages/login2"];
exports.modules = {

/***/ "./src/pages/login2.jsx":
/*!******************************!*\
  !*** ./src/pages/login2.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//////////////////////////////////\nlet easing = [\n    0.6,\n    -0.05,\n    0.01,\n    0.99\n];\nconst fadeInUp = {\n    initial: {\n        y: 60,\n        opacity: 0,\n        transition: {\n            duration: 0.6,\n            ease: easing\n        }\n    },\n    animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n            duration: 0.6,\n            ease: easing\n        }\n    }\n};\nconst Login = ({ setAuth  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxWidth: \"sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadingStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        sx: {\n                            color: \"text.secondary\",\n                            mb: 5\n                        },\n                        children: \"Login to your account\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                sx: {\n                    my: 3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                    variant: \"body2\",\n                    sx: {\n                        color: \"text.secondary\"\n                    },\n                    children: \"OR\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginForm, {\n                setAuth: setAuth\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                ...fadeInUp,\n                variant: \"body2\",\n                align: \"center\",\n                sx: {\n                    mt: 3\n                },\n                children: [\n                    \"Don’t have an account?\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        variant: \"subtitle2\",\n                        component: RouterLink,\n                        to: \"/signup\",\n                        children: \"Sign up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jennifer.omena\\\\Documents\\\\Faculdade\\\\Engenharia de Softwares Escal\\xe1veis - PB\\\\workspace-clubeempreenda\\\\front\\\\clubeempreenda-front\\\\src\\\\pages\\\\login2.jsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4yLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnRDtBQUUxRSxrQ0FBa0M7QUFHbEMsSUFBSU0sU0FBUztJQUFDO0lBQUssQ0FBQztJQUFNO0lBQU07Q0FBSztBQUNyQyxNQUFNQyxXQUFXO0lBQ2ZDLFNBQVM7UUFDUEMsR0FBRztRQUNIQyxTQUFTO1FBQ1RDLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxNQUFNUDtRQUFPO0lBQzVDO0lBQ0FRLFNBQVM7UUFDUEwsR0FBRztRQUNIQyxTQUFTO1FBQ1RDLFlBQVk7WUFDVkMsVUFBVTtZQUNWQyxNQUFNUDtRQUNSO0lBQ0Y7QUFDRjtBQUVBLE1BQU1TLFFBQVEsQ0FBQyxFQUFFQyxRQUFPLEVBQUUsR0FBSztJQUM3QixxQkFDSSw4REFBQ2Ysb0RBQVNBO1FBQUNnQixVQUFTOzswQkFDaEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDakIscURBQVVBO3dCQUFDa0IsSUFBSTs0QkFBRUMsT0FBTzs0QkFBa0JDLElBQUk7d0JBQUU7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFLdEQsOERBQUNqQixrREFBT0E7Z0JBQUNlLElBQUk7b0JBQUVHLElBQUk7Z0JBQUU7MEJBQ25CLDRFQUFDckIscURBQVVBO29CQUFDc0IsU0FBUTtvQkFBUUosSUFBSTt3QkFBRUMsT0FBTztvQkFBaUI7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUsvRCw4REFBQ0k7Z0JBQVVULFNBQVNBOzs7Ozs7MEJBRXBCLDhEQUFDZCxxREFBVUE7Z0JBQ1IsR0FBR0ssUUFBUTtnQkFDWmlCLFNBQVE7Z0JBQ1JFLE9BQU07Z0JBQ05OLElBQUk7b0JBQUVPLElBQUk7Z0JBQUU7O29CQUNiO29CQUN3QjtrQ0FDdkIsOERBQUN4QiwrQ0FBSUE7d0JBQUNxQixTQUFRO3dCQUFZSSxXQUFXQzt3QkFBWUMsSUFBRztrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFO0FBRUEsaUVBQWVmLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHViZWVtcHJlZW5kYS1mcm9udC8uL3NyYy9wYWdlcy9sb2dpbjIuanN4P2ZhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHksIExpbmssIEJveCwgRGl2aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxubGV0IGVhc2luZyA9IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XTtcclxuY29uc3QgZmFkZUluVXAgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgeTogNjAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC42LCBlYXNlOiBlYXNpbmcgfSxcclxuICB9LFxyXG4gIGFuaW1hdGU6IHtcclxuICAgIHk6IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC42LFxyXG4gICAgICBlYXNlOiBlYXNpbmcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7IHNldEF1dGggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgPEhlYWRpbmdTdHlsZT5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiwgbWI6IDUgfX0+XHJcbiAgICAgICAgICAgICAgTG9naW4gdG8geW91ciBhY2NvdW50XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGVhZGluZ1N0eWxlPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAzIH19PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH19PlxyXG4gICAgICAgICAgICAgIE9SXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuXHJcbiAgICAgICAgICA8TG9naW5Gb3JtIHNldEF1dGg9e3NldEF1dGh9IC8+XHJcblxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgey4uLmZhZGVJblVwfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIHN4PXt7IG10OiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiTGluayIsIkJveCIsIkRpdmlkZXIiLCJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhbmltYXRlIiwiTG9naW4iLCJzZXRBdXRoIiwibWF4V2lkdGgiLCJIZWFkaW5nU3R5bGUiLCJMb2dvIiwic3giLCJjb2xvciIsIm1iIiwibXkiLCJ2YXJpYW50IiwiTG9naW5Gb3JtIiwiYWxpZ24iLCJtdCIsImNvbXBvbmVudCIsIlJvdXRlckxpbmsiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login2.jsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login2.jsx"));
module.exports = __webpack_exports__;

})();