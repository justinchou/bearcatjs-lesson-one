/**
 * Created by bearcatjs-lession-one.
 * File: index.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:04
 */

'use strict';

const Bearcat = require('bearcatjs');
let FS = require('fs');
let Path = require('path');

let TransportFactory = function TransportFactory($utils) {
    this.$id = "transportFactory";
    this.$init = "init";
    this.$lazy = true;

    this.utils = $utils;

    this.exp = {};
};

TransportFactory.prototype.init = function () {
    let files = FS.readdirSync(__dirname);
    let myName = Path.relative(__dirname, __filename);

    for (let i = 0; i < files.length; i++) {
        if (files[i] !== myName) {
            let lower = this.utils.file2name(files[i]);
            let upper = this.utils.file2Name(files[i]);

            this.exp[lower] = require("./" + files[i]);
            if (lower !== upper) this.exp[upper] = require("./" + files[i]);
        }
    }
};

TransportFactory.prototype.createTransport = function (name) {
    console.log('get transport [ %s ] through factory', name);
    if (this.exp && this.exp[name] && typeof this.exp[name] === "function") {
        return new this.exp[name];
    } else {
        return null;
    }
};

Bearcat.module(TransportFactory, typeof module !== 'undefined' ? module : {});
// module.exports = TransportFactory;
