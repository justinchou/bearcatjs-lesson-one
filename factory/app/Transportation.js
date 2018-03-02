/**
 * Created by BearGame.
 * File: Transportation.js
 * User: justin
 * Date: 20/2/2018
 * Time: 11:55
 */

'use strict';

const Bearcat = require('bearcatjs');

/**
 * 本例子基于上一个测试ioc_di项目中的规定, 对象注入使用参数, 属性注入使用占位符
 *
 * 例子 let Transportation = Bearcat.getBean('transportation');
 *
 * @constructor
 */
let Transportation = function() {
    this.$id = "transportation";
    this.$scope = "prototype";
    // this.$init = "init";
    // this.$destroy = "destroy";

    this.engine = null;
    this.wheels = "${default.wheels}";
    this._wheels = [];
};

// Transportation.prototype.init = function () {
//
// };

Transportation.prototype.run = function() {
    console.log('run %s wheels transportation tool...', this.wheels);
    this.engine.run();
};

// Transportation.prototype.destroy = function () {
//
// };

Bearcat.module(Transportation, typeof module !== 'undefined' ? module : {});