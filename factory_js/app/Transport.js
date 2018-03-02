/**
 * Created by bearcatjs-lession-one.
 * File: Transport.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:06
 */

'use strict';


const Bearcat = require('bearcatjs');

let Transport = function Transport() {
    this.$id = "transport";
    this.$abstract = true;
};

Transport.prototype.run = function () {
    throw new Error('Transport run is abstract');
};

Bearcat.module(Transport, typeof module !== 'undefined' ? module : {});