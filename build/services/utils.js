"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRndIntegers = function (min, max, length) {
    var nums = [];
    for (var i = 0; i < length; i++) {
        nums.push(getRndInteger(min, max));
    }
    return nums;
};
exports.getRndIntegers = getRndIntegers;
var getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRndInteger = getRndInteger;
