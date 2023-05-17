'use strict';

const textEditor = require('..');
const assert = require('assert').strict;

assert.strictEqual(textEditor(), 'Hello from textEditor');
console.info('textEditor tests passed');
