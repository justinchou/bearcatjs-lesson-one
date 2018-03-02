'use strict';

const Bearcat = require('bearcatjs');

// 基于属性注入 - 内部$魔术语法糖

let Bus = function Bus() {
    this.$id = "bus";
    this.$scope = "prototype";
    this.$parent = 'transport';

    this.$engine = null;
    this.licence = "${default.licence}"
};

Bus.prototype.run = function () {
    this.$engine.run();
    console.log('please show me your **  bus  ** licence, my licence is [ %s ]', this.licence);
};

Bearcat.module(Bus, typeof module !== 'undefined' ? module : {});
