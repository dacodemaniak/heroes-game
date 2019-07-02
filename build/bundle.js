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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/characters-module/bad.ts":
/*!**************************************!*\
  !*** ./src/characters-module/bad.ts ***!
  \**************************************/
/*! exports provided: Bad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bad", function() { return Bad; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/characters-module/character.ts");

class Bad extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(nom) {
        super(nom);
    }
}


/***/ }),

/***/ "./src/characters-module/character.ts":
/*!********************************************!*\
  !*** ./src/characters-module/character.ts ***!
  \********************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/characters-module/hero.ts");

class Character {
    constructor(nom) {
        console.log('Hi there, i am the parent constructor');
        this.nom = nom;
    }
    getNom() {
        return this.nom;
    }
    setStrength(strength) {
        this.strength = strength;
        return this;
    }
    getStrength() {
        return this.strength;
    }
    setLifePoints(lifePoints) {
        this.lifePoints = lifePoints;
        return this;
    }
    getLifePoints() {
        return this.lifePoints;
    }
    toString() {
        return this instanceof _hero__WEBPACK_IMPORTED_MODULE_0__["Hero"] ?
            `Hero's ready : ${this.nom} 
        - Force : ${this.getStrength()} 
        - Points de vie : ${this.getLifePoints()}` :
            `Bad's ready : ${this.nom} 
        - Force : ${this.getStrength()} 
        - Points de vie : ${this.getLifePoints()}`;
    }
}


/***/ }),

/***/ "./src/characters-module/hero.ts":
/*!***************************************!*\
  !*** ./src/characters-module/hero.ts ***!
  \***************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/characters-module/character.ts");

class Hero extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(nom) {
        console.log('Hello, i am the hero constructor');
        super(nom);
    }
    escape() {
        if (this.strength <= 25) {
            this.strength = 0;
            return;
        }
        this.strength = this.strength - 25;
    }
}


/***/ }),

/***/ "./src/characters-module/meet.ts":
/*!***************************************!*\
  !*** ./src/characters-module/meet.ts ***!
  \***************************************/
/*! exports provided: Meet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meet", function() { return Meet; });
class Meet {
    constructor(hero, bad) {
        this.hero = hero;
        this.bad = bad;
        console.log(this.hero.getNom(), ' rencontre ', this.bad.getNom());
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./src/person.ts");
/* harmony import */ var _characters_module_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters-module/hero */ "./src/characters-module/hero.ts");
/* harmony import */ var _characters_module_bad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters-module/bad */ "./src/characters-module/bad.ts");
/* harmony import */ var _characters_module_meet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-module/meet */ "./src/characters-module/meet.ts");
/**
 * @name Main
 * @abstract C'est ici le monde extérieur
 * @author Aélion
 * @version 1.0.0
 */




class Main {
    run() {
        const jl = new _person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
        const kevin = new _person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
        jl.forname = 'Jean-Luc';
        kevin.forname = 'Kevin';
        jl.setBirthDate(new Date('1968-04-30'));
        kevin.setBirthDate(new Date('1981-12-06'));
        const batman = new _person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
        batman.forname = 'Batman';
        console.log('Bonjour ' + jl.forname + '(' + jl.getAge() + ')');
        console.log('Salut ' + kevin.forname + '(' + kevin.getAge() + ')');
        console.log('Hola ' + batman.forname + '(' + batman.getAge() + ')');
    }
    game() {
        const superman = new _characters_module_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"]('Superman');
        superman
            .setLifePoints(100)
            .setStrength(100);
        console.log(superman.toString());
        const lexLuthor = new _characters_module_bad__WEBPACK_IMPORTED_MODULE_2__["Bad"]('Lex Luthor');
        lexLuthor
            .setLifePoints(150)
            .setStrength(200);
        console.log(lexLuthor.toString());
        // Initiate a meet
        const meet = new _characters_module_meet__WEBPACK_IMPORTED_MODULE_3__["Meet"](superman, lexLuthor);
        const joker = new _characters_module_bad__WEBPACK_IMPORTED_MODULE_2__["Bad"]('Joker');
    }
}
const app = new Main();
app.game();


/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/**
 * @name Person
 * @author Aélion
 * @version 1.0.0
 * @abstract Définit la classe Person
 */
class Person {
    constructor() {
        /**
         * @var number
         */
        this.age = 99;
    }
    /**
     * Définit la date de naissance de l'instance courante de la classe
     * @param birthDate
     * @return Person
     */
    setBirthDate(birthDate) {
        this.birthDate = birthDate;
        this._calculAge();
        return this;
    }
    /**
     * Returns age (in year) of this instance
     * @return number
     */
    getAge() {
        return this.age;
    }
    /**
     * Difference in year between today and the birthDate
     * Store that value in age attribute
     * @return void
     */
    _calculAge() {
        const today = new Date();
        this.age = today.getFullYear() - this.birthDate.getFullYear();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map