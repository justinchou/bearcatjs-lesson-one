/**
 * Created by BearGame.
 * File: Car.js
 * User: justin
 * Date: 20/2/2018
 * Time: 13:08
 */

'use strict';

let Bearcat = require('bearcat');

/**
 * 基于对象属性的依赖注入
 *
 * 与基于参数的类似, 只不过不再向构造方法传参了, 而是将$魔法语法糖直接放在对象的属性内
 * 无需传递参数, $engine通过bean注入解析, wheels通过占位符${car.wheels}解析.
 *
 * 例子: let car = Bearcat.getBean('car');
 * 属性$engine由于以$开头, 表示是魔术语法糖, 会自动创建id为engine的对象并且赋值给$engine.
 * 属性wheels是使用占位符(placeholder)实现的注入
 *
 * 占位符有以下说明:
 * 1. 本文件占位符所在文件名为 {$id}.json
 * 2. 占位符文件位置: 与app.js(启动脚本)同级目录的config文件夹下, 建立不同的环境名对应的文件夹, 将占位符文件放在对应环境下, 如ioc_di/config目录
 * 3. 使占位符生效: 启动时指定 env=prod/test/dev 来切换不同的环境
 *
 * @constructor
 */
let Car = function Car() {
    this.$id = "car";
    this.$scope = "prototype";

    this.$engine = null;
    this.wheels = "${wheels}";
};

Car.prototype.run = function() {
    console.log('run %s wheels car...', this.wheels);
    this.$engine.run();
};

Bearcat.module(Car, typeof module !== 'undefined' ? module : {});