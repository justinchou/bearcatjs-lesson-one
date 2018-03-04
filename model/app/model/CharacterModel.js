/**
 * Created by bearcatjs-lession-one.
 * File: CharacterModel.js
 * User: justin
 * Date: 4/3/2018
 * Time: 01:06
 */

'use strict';

let CharacterModel = function CharacterModel() {
    this.$mid     = 'characterModel';
    this.$table   = 'character';
    this.$prefix  = 'character_';
    this.$order   = 2;

    this.id       = '$primary;type:Number';
    this.name     = '$type:String;notNull';
    this.level    = '$type:Number;characterLevel(max=99)';
};

bearcat.module(CharacterModel, typeof module !== 'undefined' ? module : {});
