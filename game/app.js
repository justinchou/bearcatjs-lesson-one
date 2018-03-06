/**
 * Created by BearGame.
 * File: app.js
 * User: justin
 * Date: 19/2/2018
 * Time: 09:43
 */

'use strict';

const Bearcat = require('bearcatjs');
let configPaths = [require.resolve('./context.json')];

bearcat.createApp(configPaths);
bearcat.start(function () {
    console.log('bearcat IoC container started');
    let room = bearcat.getBean('room');
    room.startGame();
    room.endGame();
});