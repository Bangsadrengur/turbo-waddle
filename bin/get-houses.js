#!/usr/bin/env node
/* eslint-disable no-console */
const getHousesForCriteria = require('../lib/get-houses-for-criteria');

getHousesForCriteria({ 'postal-codes': [220] })
  .then(console.log)
  .catch(console.log);
