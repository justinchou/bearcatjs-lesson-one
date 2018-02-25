/**
 * Created by BearcatLessonOne.
 * File: EngineOil.js
 * User: justin
 * Date: 21/2/2018
 * Time: 08:13
 */

'use strict';


let Bearcat = require('bearcat');

let EngineOil = function EngineOil() {
    this.$id = "engineOil";
    this.$scope = "prototype";
    this.$parent = "engine";

    this.$factoryBean = "simpleEngineFactory";
    this.$factoryMethod = "createEngine";
    this.$factoryArgs = [{"name":"type","value":"O"}];
};

EngineOil.prototype.run = function () {
    console.log('run oil engine...');
};

Bearcat.module(EngineOil, typeof module !== 'undefined' ? module : {});
// module.exports = EngineOil;