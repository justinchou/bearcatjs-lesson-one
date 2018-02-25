/**
 * Created by BearcatLessonOne.
 * File: EngineElectronic.js
 * User: justin
 * Date: 21/2/2018
 * Time: 08:14
 */

'use strict';


let Bearcat = require('bearcat');

let EngineElectronic = function EngineElectronic() {
    this.$id = "engineElectronic";
    this.$scope = "prototype";
    this.$parent = "engine";

    this.$factoryBean = "simpleEngineFactory";
    this.$factoryMethod = "createEngine";
    this.$factoryArgs = [{"name":"type","value":"E"}];
};

EngineElectronic.prototype.run = function () {
    console.log('run electronic engine...');
};

Bearcat.module(EngineElectronic, typeof module !== 'undefined' ? module : {});
// module.exports = EngineElectronic;