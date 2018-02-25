/**
 * Created by bearcatjs-lession-one.
 * File: EngineHorseFactory.js
 * User: justin
 * Date: 25/2/2018
 * Time: 10:19
 */

'use strict';


let Bearcat = require('bearcat');
let EngineHorse = require('../Engines/EngineHorse');

let EngineHorseFactory = function EngineHorseFactory() {
    this.$id = "engineHorseFactory";
    this.$parent = "engineFactory";
};

EngineHorseFactory.prototype.createEngine = function () {
    return new EngineHorse();
};

Bearcat.module(EngineHorseFactory, typeof module !== 'undefined' ? module : {});