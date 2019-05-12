/*
 * @Author: terry
 * @Date: 2019-05-12 19:41:31
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-12 20:20:08
 */
/*
 *
 * 权限和用户数据模型
 *
 */
import mongoose from 'mongoose';
import crypto from 'crypto';
import config from '../config';

const authSchema = new mongoose.Schema({
  // 名字
  name: { type: String, default: '' },

  // 签名
  slogan: { type: String, default: '' },

  // 头像
  gravatar: { type: String, default: '' },

  // 密码
  password: {
    type: String,
    default: crypto
      .createHash('md5')
      .update(config.AUTH.defaultPassword)
      .digest('hex'),
  },
});

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
