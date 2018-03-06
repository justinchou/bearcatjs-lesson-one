/**
 * Created by bearcatjs-lession-one.
 * File: UserDao.js
 * User: justin
 * Date: 5/3/2018
 * Time: 21:43
 */

'use strict';

// const bearcat = require('bearcatjs');

let UserDao = function UserDao() {
    this.$id = 'userDao';
    this.$init = 'init';
    this.$domainDaoSupport = null;

    // other key settings

};

UserDao.prototype.init = function () {
    // initConfig with user defined in ../model/userModel.js
    this.$domainDaoSupport.initConfig('userModel');
};

UserDao.prototype.transaction = function (txStatus) {
    this.$domainDaoSupport.transaction(txStatus);
    return this;
};

UserDao.prototype.add = function (obj, cb) {
    this.$domainDaoSupport.add(obj, cb);
};

// UserDao.prototype.getUser = function (uid) {
//     this.$domainDaoSupport.get
// };

bearcat.module(UserDao, typeof module !== 'undefined' ? module : {});
