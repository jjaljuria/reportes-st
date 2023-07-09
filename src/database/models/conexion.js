'use strict';

import {Sequelize} from 'sequelize';
import process from 'node:process';
import AllConfigs from '../config.js'

const env = process.env.NODE_ENV || 'development';
const config = AllConfigs[env];


let sequelize;
console.log(sequelize);
if (config.use_env_variable) {
  sequelize = new Sequelize(env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize