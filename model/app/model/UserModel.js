/**
 * Created by bearcatjs-lession-one.
 * File: UserModel.js
 * User: justin
 * Date: 3/3/2018
 * Time: 10:25
 */

'use strict';

let Util = require('util');

let UserModel = function() {
    this.$mid     = 'userModel';
    this.$table   = 'user';
    this.$prefix  = 'user_';  // 当数据库中表已经有前缀的时候

    this.id       = "$primary;type:Number";
    this.name     = "$type:String;notNull";
    this.gender   = "$type:Number:default:1";
    this.age      = "$type:Number;max:99;min:18;notNull;default:18";
    this.location = "$pattern(regexp=beijing);size(max=64,min=10)";
    this.addr     = "$pattern(regexp=liaoning);size(max=25,min=12)";
};
UserModel.prototype.checkNum = function(k, v) {
    if (typeof v !== "number") {
        return new Error(Util.format('invalid number [ %s ]', v));
    }
};
UserModel.prototype.fixAge = function() {
    this.age = Math.floor(this.age);
    if (this.age < 0) {this.age = 0;}
};
UserModel.prototype.log = function() {
    console.log('value changed ready to emit sth.');
};

bearcat.module(UserModel, typeof module !== 'undefined' ? module : {});
