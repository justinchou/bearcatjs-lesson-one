/**
 * Created by BearcatLessonOne.
 * File: EngineHorse.js
 * User: justin
 * Date: 21/2/2018
 * Time: 08:14
 */

'use strict';


let Bearcat = require('bearcat');

let EngineHorse = function EngineHorse() {
    this.$id = "engineHorse";
    this.$scope = "prototype";
    this.$parent = "engine";

    this.$factoryBean = "simpleEngineFactory";
    this.$factoryMethod = "createEngine";
    this.$factoryArgs = [{"name":"type","value":"H"}];
};

EngineHorse.prototype.run = function () {
    console.log('run horse engine...');
};

Bearcat.module(EngineHorse, typeof module !== 'undefined' ? module : {});
// module.exports = EngineHorse;