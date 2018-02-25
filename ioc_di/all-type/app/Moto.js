/**
 * Created by bearcatjs-lession-one.
 * File: Moto.js
 * User: justin
 * Date: 25/2/2018
 * Time: 17:24
 */

'use strict';

const Bearcat = require('bearcat');

// 基于属性注入 - 外部配置方法

let Moto = function Moto(engine, licence) {
    this.engine = engine;
    this.licence = licence;
};

Moto.prototype.run = function () {
    this.engine.run();
    console.log('please show me your ** moto  ** licence, my licence is [ %s ]', this.licence);
};

module.exports = {
    id: "moto",
    func: Moto,
    scope: "prototype",
    parent: "transport",
    args: [{
        name: "engine",
        ref: "engine"
    }, {
        name: "licence",
        type: "String"
    }]
};