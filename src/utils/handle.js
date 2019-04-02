/*
 * @Author: terry
 * @Date: 2019-04-02 18:27:50
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-04-02 21:43:15
 */

const handleRequest = ({ req, res, controller }) => {
  const method = req.method;
  const support = !!controller[method];
  support && controller[method](req, res);
  support ||
    res.status(405).jsonp({ code: 0, message: '不支持该请求类型！' });
};

const handleError = ({
  res,
  message = '请求失败',
  err = null,
  code,
}) => {
  if (code) {
    res.status(code).jsonp({ code: 0, message, debug: err });
  } else {
    res.jsonp({ code: 0, message, debug: err });
  }
};

const handleSuccess = ({
  res,
  message = '请求成功',
  result = null,
}) => {
  res.jsonp({ code: 1, message, result });
};

const handleThrottle = (method, delay) => {
  let canRun = true;
  return () => {
    if (canRun) {
      canRun = false;
      method();
      setTimeout(function() {
        canRun = true;
      }, delay);
    }
  };
};

export {
  handleRequest,
  handleError,
  handleSuccess,
  handleThrottle,
};
