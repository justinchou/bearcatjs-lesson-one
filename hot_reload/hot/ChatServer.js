/**
 * Created by EasyGame.
 * File: ChatServer.js
 * User: justin
 * Date: 24/2/2018
 * Time: 15:52
 */

'use strict';


let Bearcat = require('bearcat');

let ChatServer = function ChatServer() {
    this.$id = "chatServer";
    this.$scope = "singleton";

    this._conns = {};
    this._connList = [];
    this._nodes = {};
};

ChatServer.prototype.enterServer = function (conn) {
    if (this._connList.indexOf(conn) < 0) {
        this._connList.push(conn);
        this._conns[conn.userinfo.id] = conn;

        if (!this.hasNode(conn.userinfo.id)) {
            this._nodes[conn.userinfo.id] = Bearcat.getBean('chatNode', conn);
        }
        // Test Point
        console.log('EnterServer Success %j ', conn.userinfo);
    }
    console.log('EnterServer');
};

ChatServer.prototype.leaveServer = function (conn) {
    let index = this._connList.indexOf(conn);
    if (index >= 0) {
        this._connList.splice(index, 1);
        delete this._conns[conn.userinfo.id];
        delete this._nodes[conn.userinfo.id];
    }
    console.log('LeaveServer');
};

ChatServer.prototype.listUsers = function () {
    let userids = Object.keys(this._nodes);
    for (let i = 0; i < userids.length; i++) {
        this._nodes[userids[i]].whoami();
    }
    // Test Point
    console.log('List User [ %d ]', userids.length);
};

ChatServer.prototype.hasNode = function (id) {
    return !!this._nodes[id];
};

// Bearcat.module(ChatServer, typeof module !== 'undefined' ? module : {});
module.exports = ChatServer;