/**
 * Created by bearcatjs-lession-one.
 * File: EngineElectronicFactory.js
 * User: justin
 * Date: 25/2/2018
 * Time: 10:19
 */

'use strict';


const Bearcat = require('bearcatjs');
let EngineElectronic = require('../Engines/EngineElectronic');

let EngineElectronicFactory = function EngineElectronicFactory() {
    this.$id = "engineElectronicFactory";
    this.$parent = "engineFactory";
};

EngineElectronicFactory.prototype.createEngine = function () {
    return new EngineElectronic();
};

Bearcat.module(EngineElectronicFactory, typeof module !== 'undefined' ? module : {});