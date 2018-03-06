/**
 * Created by bearcatjs-lession-one.
 * File: CharacterDao.js
 * User: justin
 * Date: 5/3/2018
 * Time: 21:43
 */

'use strict';

// const bearcat = require('bearcatjs');

let CharacterDao = function CharacterDao() {
    this.$id = 'characterDao';
    this.$init = 'init';
    this.$domainDaoSupport = null;

    // other key settings

};

CharacterDao.prototype.init = function () {
    // initConfig with character defined in ../model/characterModel.js
    this.$domainDaoSupport.initConfig('characterModel');
};

CharacterDao.prototype.transaction = function (txStatus) {
    this.$domainDaoSupport.transaction(txStatus);
    return this;
};

CharacterDao.prototype.add = function (obj, cb) {
    this.$domainDaoSupport.add(obj, cb);
};

bearcat.module(CharacterDao, typeof module !== 'undefined' ? module : {});
