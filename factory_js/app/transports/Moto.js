/**
 * Created by bearcatjs-lession-one.
 * File: Moto.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:08
 */

'use strict';


let Bearcat = require('bearcat');

let Moto = function Moto() {
    this.$id = "moto";
    this.$scope = "prototype";
    this.$parent = 'transport';

    this.$factoryBean = 'transportFactory';
    this.$factoryMethod = 'createTransport';
    this.$factoryArgs = [{"name": "name", "value": this.$id}];
};

Bearcat.module(Moto, typeof module !== 'undefined' ? module : {});
// module.exports = Moto;