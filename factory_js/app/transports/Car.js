/**
 * Created by bearcatjs-lession-one.
 * File: Car.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:05
 */

'use strict';


let Bearcat = require('bearcat');

let Car = function Car() {
    this.$id = "car";
    this.$scope = "prototype";
    this.$parent = 'transport';

    this.$factoryBean = 'transportFactory';
    this.$factoryMethod = 'createTransport';
    this.$factoryArgs = [{"name": "name", "value": this.$id}];
};

Car.prototype.run = function () {
    console.log('run car');
};

Bearcat.module(Car, typeof module !== 'undefined' ? module : {});
// module.exports = Car;