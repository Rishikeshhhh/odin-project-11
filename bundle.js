/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n\r\n\r\n\r\n\r\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  ui.render();\r\n\r\n  document.getElementById('add-project-btn').addEventListener('click', () => {\r\n    const projectName = document.getElementById('project-name').value;\r\n    if (projectName) {\r\n      const project = new _modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\r\n      ui.addProject(project);\r\n      ui.render();\r\n      document.getElementById('project-name').value = '';\r\n    }\r\n  });\r\n\r\n  document.getElementById('add-todo-btn').addEventListener('click', () => {\r\n    const title = document.getElementById('todo-title').value;\r\n    const description = document.getElementById('todo-description').value;\r\n    const dueDate = document.getElementById('todo-due-date').value;\r\n    const priority = document.getElementById('todo-priority').value;\r\n    const notes = document.getElementById('todo-notes').value;\r\n    const checklist = document.getElementById('todo-checklist').value.split(',').map(item => item.trim());\r\n    const projectName = document.getElementById('project-select').value;\r\n\r\n    if (title && projectName) {\r\n      const todo = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n        notes,\r\n        checklist\r\n      );\r\n      ui.addTodoToProject(projectName, todo);\r\n      ui.render();\r\n      document.getElementById('todo-title').value = '';\r\n      document.getElementById('todo-description').value = '';\r\n      document.getElementById('todo-due-date').value = '';\r\n      document.getElementById('todo-priority').value = '';\r\n      document.getElementById('todo-notes').value = '';\r\n      document.getElementById('todo-checklist').value = '';\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://odin-project-11/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  removeTodo(title) {\r\n    this.todos = this.todos.filter(todo => todo.title !== title);\r\n  }\r\n\r\n  getTodos() {\r\n    return this.todos;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://odin-project-11/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nconst saveToLocalStorage = (key, data) => {\r\n    localStorage.setItem(key, JSON.stringify(data));\r\n  };\r\n  \r\n  const loadFromLocalStorage = (key) => {\r\n    const data = localStorage.getItem(key);\r\n    return data ? JSON.parse(data) : null;\r\n  };\r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://odin-project-11/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, description, dueDate, priority, notes = '', checklist = []) {\r\n      this.title = title;\r\n      this.description = description;\r\n      this.dueDate = dueDate;\r\n      this.priority = priority;\r\n      this.notes = notes;\r\n      this.checklist = checklist;\r\n      this.completed = false;\r\n    }\r\n  \r\n    toggleComplete() {\r\n      this.completed = !this.completed;\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n  \n\n//# sourceURL=webpack://odin-project-11/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\n\r\n\r\n\r\nclass UI {\r\n  constructor() {\r\n    this.projects = [];\r\n    this.loadProjects();\r\n    this.defaultProject = this.projects[0] || new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default');\r\n    if (!this.projects.length) {\r\n      this.projects.push(this.defaultProject);\r\n    }\r\n  }\r\n\r\n  loadProjects() {\r\n    const projectsData = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)('projects');\r\n    if (projectsData) {\r\n      this.projects = projectsData.map(projData => {\r\n        const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projData.name);\r\n        projData.todos.forEach(todoData => {\r\n          const todo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n            todoData.title,\r\n            todoData.description,\r\n            todoData.dueDate,\r\n            todoData.priority,\r\n            todoData.notes,\r\n            todoData.checklist\r\n          );\r\n          todo.completed = todoData.completed;\r\n          project.addTodo(todo);\r\n        });\r\n        return project;\r\n      });\r\n    }\r\n  }\r\n\r\n  saveProjects() {\r\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)('projects', this.projects);\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects.push(project);\r\n    this.saveProjects();\r\n  }\r\n\r\n  addTodoToProject(projectName, todo) {\r\n    const project = this.projects.find(proj => proj.name === projectName);\r\n    if (project) {\r\n      project.addTodo(todo);\r\n      this.saveProjects();\r\n    }\r\n  }\r\n\r\n  deleteTodoFromProject(projectName, todoTitle) {\r\n    const project = this.projects.find(proj => proj.name === projectName);\r\n    if (project) {\r\n      project.removeTodo(todoTitle);\r\n      this.saveProjects();\r\n    }\r\n  }\r\n\r\n  render() {\r\n    const app = document.getElementById('app');\r\n    const projectListDiv = document.getElementById('project-list');\r\n    projectListDiv.innerHTML = '';\r\n    \r\n    this.projects.forEach(project => {\r\n      const projectDiv = document.createElement('div');\r\n      projectDiv.innerHTML = `<h2>${project.name}</h2>`;\r\n      project.getTodos().forEach(todo => {\r\n        const todoDiv = document.createElement('div');\r\n        todoDiv.innerHTML = `<p>${todo.title} - ${todo.dueDate}</p>`;\r\n        projectDiv.appendChild(todoDiv);\r\n      });\r\n      projectListDiv.appendChild(projectDiv);\r\n    });\r\n    \r\n    this.populateProjectSelect();\r\n  }\r\n\r\n  populateProjectSelect() {\r\n    const projectSelect = document.getElementById('project-select');\r\n    projectSelect.innerHTML = '<option value=\"\">Select Project</option>';\r\n    this.projects.forEach(project => {\r\n      const option = document.createElement('option');\r\n      option.value = project.name;\r\n      option.textContent = project.name;\r\n      projectSelect.appendChild(option);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\r\n\n\n//# sourceURL=webpack://odin-project-11/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;