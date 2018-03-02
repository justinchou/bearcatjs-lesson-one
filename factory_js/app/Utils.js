/**
 * Created by bearcatjs-lession-one.
 * File: Utils.js
 * User: justin
 * Date: 25/2/2018
 * Time: 23:35
 */

'use strict';


const Bearcat = require('bearcatjs');

let Utils = function Utils() {
    this.$id = "utils";
};

/**
 * 字符串首字母大写
 * @param {String} str
 * @returns {string}
 */
Utils.prototype.first2Upper = function first2Upper(str) {
    let reg = /\b(\w)|\s(\w)/g;
    return str.replace(reg, function (c) {
        return c.toUpperCase();
    });
};

/**
 * 字符串首字母小写
 * @param {String} str
 * @returns {string}
 */
Utils.prototype.first2Lower = function first2Lower(str) {
    let reg = /\b(\w)|\s(\w)/g;
    return str.replace(reg, function (c) {
        return c.toLowerCase();
    });
};

/**
 * 转换成首字母小写的类名
 * @param {String} filename
 * @returns {*}
 */
Utils.prototype.file2name = function file2name(filename) {
    let name = filename.replace('.js', '');
    return this.first2Lower(name);
};

/**
 * 转换成首字母大写的类名
 * @param {String} filename
 * @returns {*}
 */
Utils.prototype.file2Name = function file2Name(filename) {
    let name = filename.replace('.js', '');
    return this.first2Upper(name);
};

Bearcat.module(Utils, typeof module !== 'undefined' ? module : {});