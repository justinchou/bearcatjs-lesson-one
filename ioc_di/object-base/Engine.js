/**
 * Created by BearGame.
 * File: Engine.js
 * User: justin
 * Date: 20/2/2018
 * Time: 13:08
 */

'use strict';

let Bearcat = require('bearcat');

let Engine = function Engine() {
    this.$id = "engine";
    this.$scope = "prototype";
};

Engine.prototype.run = function () {
    console.log('run engine...');
};

Bearcat.module(Engine, typeof module !== 'undefined' ? module : {});