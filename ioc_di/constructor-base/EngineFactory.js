/**
 * Created by BearGame.
 * File: EngineFactory.js
 * User: justin
 * Date: 20/2/2018
 * Time: 12:09
 */

'use strict';

let Bearcat = require('bearcat');

let Engine = require('./Engine');

let EngineFactory = function() {
    this.$id = 'engineFactory';
};

EngineFactory.prototype.createEngine = function (type) {

};

Bearcat.module(EngineFactory, typeof module !== 'undefined' ? module : {});
