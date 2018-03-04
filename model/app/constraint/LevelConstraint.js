/**
 * Created by bearcatjs-lession-one.
 * File: LevelConstraint.js
 * User: justin
 * Date: 4/3/2018
 * Time: 02:08
 */

'use strict';


//const bearcat = require('bearcat');

let LevelConstraint = function LevelConstraint() {
    this.$cid    = 'characterLevel';
    this.$scope  = 'prototype';
    this.$order  = 1;

    this.$constraint = '$notNull';
    this.msg = 'level %s invalid';
    this.max = null;
};

LevelConstraint.prototype.validate = function (key, value) {
    if (!value || typeof value !== 'number') {
        return new Error('level must be a number');
    }

    if (value < 0 || value > this.max) {
        return new Error('level ' + value + ' invalid');
    }

    if (parseInt(value) !== value) {
        return new Error('level must be an int');
    }
};

bearcat.module(LevelConstraint, typeof module !== 'undefined' ? module : {});
