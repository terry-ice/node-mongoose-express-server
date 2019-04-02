import mongoose from 'mongoose';
import config from '../config';
mongoose.Promise = global.Promise;
// 数据库
const connect = () => {
  // 连接数据库
  mongoose.connect(config.MONGODB.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });

  // 连接错误
  mongoose.connection.on('error', () => {
    console.log('数据库连接失败!');
  });

  // 连接成功
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功!');
  });

  return mongoose;
};

export default {
  connect,
  mongoose,
};
