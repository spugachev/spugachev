"use strict";

var _ink = require("ink");

var _main = require("./main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright Sergey Pugachev
 * All rights reserved.
 */

function run() {
  (0, _ink.render)((0, _ink.h)(_main2.default, null));
}

exports.run = run;