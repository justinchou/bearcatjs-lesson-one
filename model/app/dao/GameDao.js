/**
 * Created by bearcatjs-lession-one.
 * File: GameDao.js
 * User: justin
 * Date: 5/3/2018
 * Time: 21:43
 */

'use strict';

// const bearcat = require('bearcatjs');

let GameDao = function GameDao() {
    this.$id = 'gameDao';
    this.$init = 'init';
    this.$domainDaoSupport = null;

    // other key settings

};

GameDao.prototype.init = function () {
    // initConfig with game defined in ../model/gameModel.js
    this.$domainDaoSupport.initConfig('gameModel');
};

GameDao.prototype.transaction = function (txStatus) {
    this.$domainDaoSupport.transaction(txStatus);
    return this;
};

GameDao.prototype.add = function (obj, cb) {
    this.$domainDaoSupport.add(obj, cb);
};

bearcat.module(GameDao, typeof module !== 'undefined' ? module : {});
