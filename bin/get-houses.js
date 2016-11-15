#!/usr/bin/env node
const execute = require('../lib/execute');

/* eslint-disable no-console */
execute()
  .then(console.log)
  .catch(console.log);
