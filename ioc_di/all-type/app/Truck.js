/**
 * Created by bearcatjs-lession-one.
 * File: Truck.js
 * User: justin
 * Date: 25/2/2018
 * Time: 17:31
 */

'use strict';

const Bearcat = require('bearcatjs');

// 基于属性注入 - 外部配置方法(props)

let Truck = function Truck() {
    this.engine = null;
    this.licence = null;
};

Truck.prototype.run = function () {
    this.engine.run();
    console.log('please show me your ** truck ** licence, my licence is [ %s ]', this.licence);
};

module.exports = {
    id: "truck",
    func: Truck,
    scope: "prototype",
    parent: "transport",
    props: [{
        name: "engine",
        ref: "engine"
    }, {
        name: "licence",
        value: "${default.licence}"
    }]
};