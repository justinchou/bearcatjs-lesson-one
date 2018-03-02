/**
 * Created by bearcatjs-lession-one.
 * File: EngineOilFactory.js
 * User: justin
 * Date: 25/2/2018
 * Time: 10:20
 */

'use strict';


const Bearcat = require('bearcatjs');
let EngineOil = require('../Engines/EngineOil');

let EngineOilFactory = function EngineOilFactory() {
    this.$id = "engineOilFactory";
    this.$parent = "engineFactory";
};

EngineOilFactory.prototype.createEngine = function () {
    return new EngineOil();
};

Bearcat.module(EngineOilFactory, typeof module !== 'undefined' ? module : {});