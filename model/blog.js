/**
 * Created by bearcatjs-lession-one.
 * File: app.js
 * User: justin
 * Date: 3/3/2018
 * Time: 10:24
 */

'use strict';


const bearcat = require('bearcatjs');
let configPaths = [require.resolve('./context.json')];

bearcat.createApp(configPaths, {
    BEARCAT_GLOBAL: true
});
bearcat.start(function () {
    console.log('Bearcat IoC container started');

    let e, v;

    let um = bearcat.getModel('userModel');
    e = um.$set("age", 34);
    if (e) {
        console.log(e.stack);
    }

    v = um.$get("age");
    console.log('get age', v);

    console.log('get model', um.model);



    e = um.$packResultSet({
        user_id: 2,
        user_name: "justin",
        user_gender: 0,
        user_age: 23,
        user_location: "wangjing, chaoyang, beijing"
    });
    if (e) {
        console.log(e.stack);
    }
    console.log('----- User Model: ', JSON.parse(JSON.stringify(um.model)));



    let gm = bearcat.getModel('gameModel');
    e = gm.$packResultSet({
        game_id: 12,
        game_name: '天龙走八部',
        game_server: '127.0.0.1:18472'
    });
    if (e) {
        console.log(e.stack);
    }
    console.log('+++++ Game Model: ', JSON.parse(JSON.stringify(gm.model)));


    let d = [{
        user_id: 2,
        user_name: "justin",
        user_gender: 0,
        user_age: 23,
        user_location: "wangjing, chaoyang, beijing",
        game_id: 12,
        game_name: '天龙走八部',
        game_server: '127.0.0.1:18472',
        character_id: 384,
        character_name: '虚竹二少爷',
        character_level: 12
    }, {
        user_id: 2,
        user_name: "justin",
        user_gender: 0,
        user_age: 23,
        user_location: "wangjing, chaoyang, beijing",
        game_id: 12,
        game_name: '天龙走八部',
        game_server: '127.0.0.1:18472',
        character_id: 193,
        character_name: '阿紫小魔女',
        character_level: 87
    }];
    let rpm = bearcat.getModel('roomPlayerModel');
    for (let i = 0; i < d.length; i++) {
        e = rpm.$packResultSet(d[i]);
        if (e) {
            console.log(e.stack);
        }
    }
    console.log('===== Room Player Info: ', JSON.parse(JSON.stringify(rpm.model)));

});