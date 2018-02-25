/**
 * Created by bearcatjs-lession-one.
 * File: Transport.js
 * User: justin
 * Date: 25/2/2018
 * Time: 15:59
 */

'use strict';

const Bearcat = require('bearcat');

let Transport = function Transport() {
    this.$id = "transport";
    this.$abstract = true;
};

Transport.prototype.run = function () {
    throw new Error('Abstract Function run Called');
};

Bearcat.module(Transport, typeof module !== 'undefined' ? module : {});
