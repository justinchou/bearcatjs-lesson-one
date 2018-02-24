/**
 * Created by EasyGame.
 * File: ChatNode.js
 * User: justin
 * Date: 24/2/2018
 * Time: 15:35
 */

'use strict';


let Bearcat = require('bearcat');

let ChatNode = function ChatNode(conn) {
    this.$id = "chatNode";
    this.$scope = "prototype";

    this.connection = conn;
    this.userinfo = conn.userinfo;
};

ChatNode.prototype.whoami = function () {
    // Test Point
    // console.log("I am [ %j ]", this.userinfo);
};

// Bearcat.module(ChatNode, typeof module !== 'undefined' ? module : {});
module.exports = ChatNode;
