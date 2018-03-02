/**
 * Created by EasyGame.
 * File: app.js
 * User: justin
 * Date: 24/2/2018
 * Time: 14:11
 */

'use strict';

const Bearcat = require('bearcatjs');
const Path = require('path');

const contexPath = [require.resolve('./context.json')];

Bearcat.createApp(contexPath, {
    "BEARCAT_HOT": 'on',
    "BEARCAT_HPATH": Path.join(__dirname, '/hot')
});

Bearcat.on('reload', function () {
    // console.log('reload occured...');
});

Bearcat.start(function () {
    let server = Bearcat.getBean('chatServer');

    setInterval(function () {
        let conn = {"userinfo": {id: Math.floor(Math.random() * 10000)}};
        server.enterServer(conn);
    }, 7452);

    setInterval(function () {
        server.listUsers();
    }, 2000);
});