/**
 * Created by bearcatjs-lession-one.
 * File: RoomPlayer.js
 * User: justin
 * Date: 5/3/2018
 * Time: 21:47
 */

'use strict';

// const bearcat = require('bearcatjs');

let RoomPlayer = function RoomPlayer() {
    this.$id = 'roomPlayer';
    this.$init = 'init';
    this.$domainDaoSupport = null;

    // other key settings

};

RoomPlayer.prototype.init = function () {
    // initConfig with roomPlayer defined in ../model/roomPlayerModel.js
    this.$domainDaoSupport.initConfig('roomPlayerModel');
};

RoomPlayer.prototype.transaction = function (txStatus) {
    this.$domainDaoSupport.transaction(txStatus);
    return this;
};

RoomPlayer.prototype.add = function (obj, cb) {
    this.$domainDaoSupport.add(obj, cb);
};

RoomPlayer.prototype.loadPlayerById = function (uid, gid, next) {
    this.$domainDaoSupport.getList('$getRoomPlayer', [uid, gid], next);
};

bearcat.module(RoomPlayer, typeof module !== 'undefined' ? module : {});
