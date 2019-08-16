/* eslint no-process-env: off */

require('dotenv').config();

const config = {};

config.env = process.env.NODE_ENV || 'development';
config.port = process.env.PORT || 3000;

module.exports = config;
