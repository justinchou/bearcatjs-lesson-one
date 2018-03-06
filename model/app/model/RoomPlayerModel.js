/**
 * Created by bearcatjs-lession-one.
 * File: RoomPlayerModel.js
 * User: justin
 * Date: 4/3/2018
 * Time: 03:22
 */

'use strict';


//const bearcat = require('bearcatjs');

let RoomPlayerModel = function RoomPlayerModel() {
    this.$mid       = 'roomPlayerModel';
    this.$prefix    = '';

    this.user       = '$type:Object;ref:userModel';
    this.games      = '$type:Object;ref:gameModel';
    this.characters = '$type:Array;ref:characterModel';

};

bearcat.module(RoomPlayerModel, typeof module !== 'undefined' ? module : {});
