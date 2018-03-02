/**
 * Created by BearGame.
 * File: Car.js
 * User: justin
 * Date: 20/2/2018
 * Time: 11:55
 */

'use strict';

const Bearcat = require('bearcatjs');

/**
 * 基于构造函数的依赖注入
 *
 * 特点是$修饰的类是魔法方法, 会自动实例化, 非$修饰的需要提供配置文件, 或者getBean的时候传参传进去.
 *
 * @param {Engine} $engine, $engine 必须带有$符号, 表明是注入的Engine对象
 * @param {Number} wheels, 需要在getBean时以参数形式传入
 *
 * 例子 let car = Bearcat.getBean('car', 2);
 * 说明通过Bearcat获取id为car的对象, 传给构造函数的参数为 2 表示轮子数为2轮; 无需理会$engine, 因为这是自动创建的.
 *
 * @constructor
 */
let Car = function($engine, wheels) {
    this.$id = "car";
    this.$scope = "prototype";

    this.engine = $engine;
    this.wheels = wheels;
};

Car.prototype.run = function() {
    console.log('run %s wheels car...', this.wheels);
    this.engine.run();
};

Bearcat.module(Car, typeof module !== 'undefined' ? module : {});