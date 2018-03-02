/**
 * Created by BearGame.
 * File: Engine.js
 * User: justin
 * Date: 20/2/2018
 * Time: 11:56
 */

'use strict';

const Bearcat = require('bearcatjs');

let Engine = function Engine() {
    this.$id = "engine";
    this.$scope = "prototype";
    this.$abstract = true;
};

Engine.prototype.run = function () {
    console.log('run engine...');
};

Bearcat.module(Engine, typeof module !== 'undefined' ? module : {});
