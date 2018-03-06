/**
 * Created by bearcatjs-lession-one.
 * File: GameModel.js
 * User: justin
 * Date: 4/3/2018
 * Time: 01:02
 */

'use strict';

let GameModel = function GameModel() {
    this.$mid     = 'gameModel';
    this.$table   = 'game';
    this.$prefix  = 'game_';

    this.id       = '$primary;type:Number';
    this.name     = '$type:String;notNull';
    this.server   = '$type:String;notNull;pattern(regexp=:)';
};

bearcat.module(GameModel, typeof module !== 'undefined' ? module : {});
