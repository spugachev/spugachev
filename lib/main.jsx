/**
 * Copyright Sergey Pugachev
 * All rights reserved.
 */

import { h, Component, Color, Text, Bold } from "ink";
import Box from "ink-box";
import Image from "ink-image";
import path from "path";
import SelectInput from "ink-select-input";
import Table from "ink-table";

function onSelect(item) {
    if (item.action) {
        item.action();
    }
}

const avatar = path.join(__dirname, "../spugachev.jpg");

const items = [
    {
        label: 'Quit',
        action() {
            process.exit();
        }
    }
];

const data = [
    {
        site: "LinkedIn",
        url: "https://www.linkedin.com/in/spugachev",
    },
    {
        site: "GitHub",
        url: "https://github.com/spugachev",
    },
    {
        site: "Facebook",
        url: "https://www.facebook.com/spugachev",
    },
    {
        site: "GDE",
        url: "https://developers.google.com/experts/people/sergey-pugachev",
    }
];

export default () => (
    <div>
        <br />
        <div>
            <Image preserveAspectRatio src={avatar} width='20' />
        </div>
        <Box borderColor="cyan" padding={2}>
            <div>
                <Bold>Sergey Pugachev</Bold><Text> | @spugachev</Text>
            </div>
            <div>
                Full Stack Developer & Google Developer Expert (GDE)
            </div>
            <div>
                Get in touch at <Color cyan>spugachev@gmail.com</Color>
            </div>
            <br />
            <Table data={data} />
            <div>
                $ npx spugachev
            </div>
        </Box>
        <br /><br />
        <div>
            <SelectInput items={items} onSelect={onSelect} />
        </div>
    </div>
);;