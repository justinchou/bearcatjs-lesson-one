/**
 * Created by bearcatjs-lession-one.
 * File: WheelFactory.js
 * User: justin
 * Date: 25/2/2018
 * Time: 12:40
 */

'use strict';


const Bearcat = require('bearcatjs');

let Wheel = require('./Wheel');

let WheelFactory = function WheelFactory() {
    this.$id = "wheelFactory";
};

WheelFactory.prototype.createWheel = function () {
    console.log('Calling Create Create Wheel Factory...');
    return new Wheel();
};

Bearcat.module(WheelFactory, typeof module !== 'undefined' ? module : {});