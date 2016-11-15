const test = require('ava');
const cli = require('../lib/cli');

test('that a single postal code is translated to output object', (t) => {
  const args = ['node binary', 'path to js file', '--postal-code', '123'];
  const parameters = cli(args);

  t.deepEqual(parameters, { 'postal-code': [123] });
});

test('that multiple postal codes are translated to output object', (t) => {
  const args = [
    'node binary',
    'path to js file',
    '--postal-code',
    '123',
    '--postal-code',
    '234',
  ];
  const parameters = cli(args);

  t.deepEqual(parameters, { 'postal-code': [123, 234] });
});
