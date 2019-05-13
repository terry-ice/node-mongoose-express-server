/*
 * @Author: terry
 * @Date: 2018-07-27 14:13:00
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-13 09:24:00
 */

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "node-api",
      script: "src/server.js",
      node_args: "--harmony",
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
