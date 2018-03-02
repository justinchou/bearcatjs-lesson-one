/**
 * Created by bearcatjs-lession-one.
 * File: EngineFactory.js
 * User: justin
 * Date: 25/2/2018
 * Time: 10:14
 */

'use strict';


const Bearcat = require('bearcatjs');

let EngineFactory = function EngineFactory() {
    this.$id = "engineFactory";
    this.$abstract = true;
};

EngineFactory.prototype.createEngine = function () {
    throw new Error('EngineFactory createEngine Function Is Abstract');
};

Bearcat.module(EngineFactory, typeof module !== 'undefined' ? module : {});