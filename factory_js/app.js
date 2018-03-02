/**
 * Created by bearcatjs-lession-one.
 * File: app.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:30
 */

'use strict';


const Bearcat = require('bearcatjs');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    // let trans = Bearcat.getBean('transport');

    let car = Bearcat.getBean('car');
    car.run();
});