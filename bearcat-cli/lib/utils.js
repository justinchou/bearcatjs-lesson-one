/**
 * Created by bearcat-cli.
 * File: utils.js
 * User: justin
 * Date: 25/2/2018
 * Time: 13:04
 */

'use strict';

let Path = require('path');
let FS = require('fs');

module.exports = {
    /**
     * 获取 config 文件
     */
    getConfig: function (callback) {
        let configPath = Path.join(process.cwd(), './bearcat.json');
        let config = {};
        if (FS.existsSync(configPath)) {
            try {
                config = JSON.parse(FS.readFileSync(configPath, "utf-8"));
                callback && callback(config);
                return config;
            } catch (e) {
                console.log("读取cain.config.js文件失败");
            }
        } else {
            console.log("cain.config.js文件不存在，请检查后再试");
        }
    }
};