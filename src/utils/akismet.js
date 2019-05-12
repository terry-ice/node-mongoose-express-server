/*
 * @Author: terry
 * @Date: 2019-05-12 21:28:35
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-12 21:34:30
 */

/*
 *
 * akismet-spam 反垃圾模块
 *
 */

import akismet from 'akismet-api';
import config from '../config';

let client = akismet.client({
  key: config.AKISMET.key,
  blog: config.AKISMET.blog,
});
let clientIsValid = false;

// 验证key
client.verifyKey((err, valid) => {
  if (err)
    return console.warn('Akismet VerifyKey Error:', err.message);
  clientIsValid = valid;
  console.log(`Akismet key ${valid ? '有效' : '无效'}!`);
});

const akismetClient = {
  checkSpam(options) {
    console.log('Akismet验证评论中...', new Date());
    return new Promise((resolve, solve) => {
      if (clientIsValid) {
        client.checkSpam(options, (err, spam) => {
          if (err) {
            resolve(err);
            return false;
          }
          if (spam) {
            console.warn('Akismet验证不通过!', new Date());
            solve(new Error('spam!'));
          } else {
            console.log('Akismet验证通过', new Date());
            resolve(spam);
          }
        });
      } else {
        console.warn('Akismet key 未认证，放弃验证');
        resolve('akismet key Invalid!');
      }
    });
  },
  submitSpam(options, callback) {},
  submitHam(options, callback) {},
};

exports.akismet = akismet;
exports.akismetClient = akismetClient;
