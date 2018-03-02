/**
 * Created by BearGame.
 * File: app.js.js
 * User: justin
 * Date: 20/2/2018
 * Time: 11:44
 */

'use strict';

const Bearcat = require('bearcatjs');

// 解析上下文配置文件, 需要使用全路径; 配置文件里面写的scan路径, 就是存放脚本的路径.
let configPaths = [require.resolve('./context.json')];

// 使用上下文配置创建Bearcat容器
Bearcat.createApp(configPaths);

// 启动Bearcat容器
Bearcat.start(function () {
    // 至此Bearcat的容器启动成功了
    console.log('Bearcat IoC container started');

    // 通过getBean获取对象实例
    // 本实例第二参数 `4` 即为使用"基于构造函数的依赖注入", 给Car类传入的wheels参数; - 参见 `constructor-base/Car.js`
    // "基于对象属性的依赖注入"传递该参数并无实质作用, 因为没有变量接收该参数 - 参见 `object-base/Car.js`
    let car = Bearcat.getBean('car', 4);
    // 调用对象方法
    car.run();
});