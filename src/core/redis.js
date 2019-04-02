/*
 * @Author: terry
 * @Date: 2019-04-02 18:11:57
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-04-02 21:48:42
 */

import redis from 'redis';
let redisClientAvailable = false;
let redisClient = null;
const memoryClient = {};

const set = (key, value, callback) => {
  if (redisClientAvailable) {
    // console.log('into redis')
    if (typeof value !== 'string') {
      try {
        value = JSON.stringify(value);
      } catch (err) {
        value = value.toString();
      }
    }
    redisClient.set(key, value, callback);
  } else {
    // console.log('into memory')
    memoryClient[key] = value;
  }
};

const get = (key, callback) => {
  if (redisClientAvailable) {
    redisClient.get(key, (err, value) => {
      try {
        value = JSON.parse(value);
      } catch (err) {
        value = value;
      }
      callback(err, value);
    });
  } else {
    callback(null, memoryClient[key]);
    return memoryClient[key];
  }
};

const connect = () => {
  exports.redis = redisClient = redis.createClient({
    detect_buffers: true,
  });

  redisClient.on('error', err => {
    redisClientAvailable = false;
    console.log('Redis连接失败！' + err);
  });

  redisClient.on('ready', err => {
    console.log('Redis已准备好！');
    redisClientAvailable = true;
  });

  redisClient.on('reconnecting', err => {
    console.log('Redis正在重连！');
  });

  return redisClient;
};

export default {
  redis,
  set,
  get,
  connect,
};
