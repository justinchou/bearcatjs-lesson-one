/**
 * Created by bearcatjs-lession-one.
 * File: Truck.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:08
 */

'use strict';


const Bearcat = require('bearcatjs');

let Truck = function Truck() {
    this.$id = "truck";
    this.$scope = "prototype";
    this.$parent = 'transport';

    this.$factoryBean = 'transportFactory';
    this.$factoryMethod = 'createTransport';
    this.$factoryArgs = [{"name": "name", "value": this.$id}];
};

Bearcat.module(Truck, typeof module !== 'undefined' ? module : {});
// module.exports = Truck;