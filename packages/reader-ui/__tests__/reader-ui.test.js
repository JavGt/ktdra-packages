'use strict';

const readerUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(readerUi(), 'Hello from readerUi');
console.info('readerUi tests passed');
