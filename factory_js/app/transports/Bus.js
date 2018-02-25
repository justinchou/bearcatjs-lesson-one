/**
 * Created by bearcatjs-lession-one.
 * File: Bus.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:06
 */

'use strict';


let Bearcat = require('bearcat');

let Bus = function Bus() {
    this.$id = "bus";
    this.$scope = "prototype";
    this.$parent = 'transport';

    this.$factoryBean = 'transportFactory';
    this.$factoryMethod = 'createTransport';
    this.$factoryArgs = [{"name": "name", "value": this.$id}];
};

Bearcat.module(Bus, typeof module !== 'undefined' ? module : {});
// module.exports = Bus;