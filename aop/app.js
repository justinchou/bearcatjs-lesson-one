/**
 * Created by bearcatjs-lession-one.
 * File: app.js
 * User: justin
 * Date: 2/3/2018
 * Time: 10:32
 */

'use strict';


const bearcat = require('bearcatjs');
let configPaths = [require.resolve('./context.json')];

bearcat.createApp(configPaths, {
    BEARCAT_GLOBAL: true
});
bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let producer = bearcat.getBean('producer');
    producer.produceCan('fish', (err, data) => {
        console.log('Caller CB [ %j ] err:', data, err);
    });
    // producer.produceCar();
    // producer.produceCinema();
    // producer.produceCode();
    // producer.produceContent();
    // producer.produceCourse();
    // producer.produceCurrency();
});