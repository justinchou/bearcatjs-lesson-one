/**
 * Created by bearcatjs-lession-one.
 * File: game.js
 * User: justin
 * Date: 5/3/2018
 * Time: 22:38
 */

'use strict';

const Path    = require('path');

const dao     = require('bearcatjs-dao');
const bearcat = require('bearcatjs');

let sqlPaths = [Path.join(__dirname, './app/sql/')];
dao.loadSQL(sqlPaths);

let configPaths = [Path.join(__dirname, './context.json')];
bearcat.createApp(configPaths, {
    BEARCAT_GLOBAL: true
});
bearcat.start(function () {
    console.log('Bearcat IoC container started');

    let uid = 1;
    let gid = 1;

    let roomPlayerDao = bearcat.getBean('roomPlayer');
    roomPlayerDao.loadPlayerById(uid, gid, function (err, playerModel) {
        console.log(err);
        console.log(JSON.parse(JSON.stringify(playerModel)));
    });
});