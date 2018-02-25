/**
 * Created by bearcatjs-lession-one.
 * File: Wheel.js
 * User: justin
 * Date: 24/2/2018
 * Time: 22:55
 */

'use strict';


let Bearcat = require('bearcat');

let Wheel = function Wheel() {
    this.$id = "wheel";
    this.$scope = "prototype";
    // this.$abstract = true;

    this.$factoryBean = "wheelFactory";
    this.$factoryMethod = "createWheel";

    this.flat = false;
};

Wheel.prototype.isFlat = function () {
    console.log('Wheel is %sflat', this.flat ? "" : 'not ');
    return this.flat;
    // throw new Error('Wheel isFlat Function Is Abstract');
};

Wheel.prototype.run = function () {
    console.log('Wheel is Running');
    // throw new Error('Wheel run Function Is Abstract');
};

Bearcat.module(Wheel, typeof module !== 'undefined' ? module : {});