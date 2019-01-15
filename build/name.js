"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ink = require("ink");

var _inkBox = require("ink-box");

var _inkBox2 = _interopRequireDefault(_inkBox);

var _inkGradient = require("ink-gradient");

var _inkGradient2 = _interopRequireDefault(_inkGradient);

var _inkBigText = require("ink-big-text");

var _inkBigText2 = _interopRequireDefault(_inkBigText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright Sergey Pugachev
 * All rights reserved.
 */

class Name extends _ink.Component {
    render(props, state) {
        return (0, _ink.h)(
            "div",
            null,
            (0, _ink.h)(
                _inkGradient2.default,
                { name: "summer" },
                (0, _ink.h)(_inkBigText2.default, { text: "Sergey" }),
                (0, _ink.h)(_inkBigText2.default, { text: "Pugachev" })
            )
        );
    }
}

exports.default = Name;