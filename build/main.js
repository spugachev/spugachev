"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ink = require("ink");

var _opn = require("opn");

var _opn2 = _interopRequireDefault(_opn);

var _inkBox = require("ink-box");

var _inkBox2 = _interopRequireDefault(_inkBox);

var _inkImage = require("ink-image");

var _inkImage2 = _interopRequireDefault(_inkImage);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _inkSelectInput = require("ink-select-input");

var _inkSelectInput2 = _interopRequireDefault(_inkSelectInput);

var _inkTable = require("ink-table");

var _inkTable2 = _interopRequireDefault(_inkTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openUrl(url) {
    (0, _opn2.default)(url, { wait: false });
} /**
   * Copyright Sergey Pugachev
   * All rights reserved.
   */

function onSelect(item) {
    if (item.url) {
        openUrl(item.url);
    }

    if (item.action) {
        item.action();
    }
}

var avatar = _path2.default.join(__dirname, "../spugachev.jpg");

var items = [{
    label: 'Quit',
    action() {
        process.exit();
    }
}];

var data = [{
    site: "LinkedIn",
    url: "https://www.linkedin.com/in/spugachev"
}, {
    site: "GitHub",
    url: "https://github.com/spugachev"
}, {
    site: "Facebook",
    url: "https://www.facebook.com/spugachev"
}, {
    site: "GDE",
    url: "https://developers.google.com/experts/people/sergey-pugachev"
}];

exports.default = function () {
    return (0, _ink.h)(
        "div",
        null,
        (0, _ink.h)("br", null),
        (0, _ink.h)(
            "div",
            null,
            (0, _ink.h)(_inkImage2.default, { preserveAspectRatio: true, src: avatar, width: "20" })
        ),
        (0, _ink.h)(
            _inkBox2.default,
            { borderColor: "cyan", padding: 2 },
            (0, _ink.h)(
                "div",
                null,
                (0, _ink.h)(
                    _ink.Bold,
                    null,
                    "Sergey Pugachev"
                ),
                (0, _ink.h)(
                    _ink.Text,
                    null,
                    " | @spugachev"
                )
            ),
            (0, _ink.h)(
                "div",
                null,
                "Full Stack Developer & Google Developer Expert (GDE)"
            ),
            (0, _ink.h)(
                "div",
                null,
                "Get in touch at ",
                (0, _ink.h)(
                    _ink.Color,
                    { cyan: true },
                    "spugachev@gmail.com"
                )
            ),
            (0, _ink.h)("br", null),
            (0, _ink.h)(_inkTable2.default, { data: data }),
            (0, _ink.h)(
                "div",
                null,
                "$ npx spugachev"
            )
        ),
        (0, _ink.h)("br", null),
        (0, _ink.h)("br", null),
        (0, _ink.h)(
            "div",
            null,
            (0, _ink.h)(_inkSelectInput2.default, { items: items, onSelect: onSelect })
        )
    );
};

;