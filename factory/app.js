/**
 * Created by BearGame.
 * File: app.js.js
 * User: justin
 * Date: 20/2/2018
 * Time: 11:44
 */

'use strict';

let Bearcat = require('bearcat');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    // let engine = Bearcat.getBean('engine');
    // engine.run();

    console.log("======================");
    testSimpleFactory();
    console.log("======================");
    testFactory();
    console.log("======================");
    test();
});

function testSimpleFactory() {
    // 简单工厂模式
    let engineFactory = Bearcat.getBean('simpleEngineFactory');

    let car = Bearcat.getBean('transportation');
    car.engine = engineFactory.createEngine('E');
    car.run();

    let bus = Bearcat.getBean('transportation');
    bus.engine = engineFactory.createEngine('O');
    bus.run();

    let horse = Bearcat.getBean('transportation');
    horse.engine = engineFactory.createEngine('H');
    horse.run();
}

function testFactory() {
    // 工厂模式
    let electronicFactory = Bearcat.getBean('engineElectronicFactory');
    let horseFactory = Bearcat.getBean('engineHorseFactory');
    let oilFectory = Bearcat.getBean('engineOilFactory');

    let car = Bearcat.getBean('transportation');
    car.engine = electronicFactory.createEngine();
    car.run();

    let bus = Bearcat.getBean('transportation');
    bus.engine = horseFactory.createEngine();
    bus.run();

    let horse = Bearcat.getBean('transportation');
    horse.engine = oilFectory.createEngine();
    horse.run();
}

function test() {
    // 使用factoryArgs注入参数的方法, 实际上使用还是简单工厂模式
    let car = Bearcat.getBean('transportation');
    car.engine = Bearcat.getBean('engineElectronic');
    car.run();

    let bus = Bearcat.getBean('transportation');
    bus.engine = Bearcat.getBean('engineOil');
    bus.run();

    let horse = Bearcat.getBean('transportation');
    horse.engine = Bearcat.getBean('engineHorse');
    horse.run();
}