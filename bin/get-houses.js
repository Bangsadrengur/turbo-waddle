#!/usr/bin/env node
const execute = require('../lib/execute');

const args = process.argv;

/* eslint-disable no-console */
execute(args)
  .then(console.log)
  .catch(console.log);
