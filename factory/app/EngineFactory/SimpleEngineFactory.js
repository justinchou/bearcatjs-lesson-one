/**
 * Created by BearGame.
 * File: SimpleEngineFactory.js
 * User: justin
 * Date: 20/2/2018
 * Time: 12:09
 */

'use strict';

const Bearcat = require('bearcatjs');

// let Engine = require('./Engines/Engine');
let EngineElectronic = require('../Engines/EngineElectronic');
let EngineHorse = require('../Engines/EngineHorse');
let EngineOil = require('../Engines/EngineOil');

let SimpleEngineFactory = function () {
    this.$id = 'simpleEngineFactory';
};

SimpleEngineFactory.prototype.createEngine = function (type) {
    console.log('Calling Simple Factory To Create Engine... [ %s ]', type);
    switch (type) {
        case "E":
            return new EngineElectronic();
        case "H":
            return new EngineHorse();
        case "O":
            return new EngineOil();
        default:
            return null;
    }
};

Bearcat.module(SimpleEngineFactory, typeof module !== 'undefined' ? module : {});
