const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'api1/',
    createProxyMiddleware('', {
      target: 'https://nbc.gov.kh/',
      secure: false,
      changeOrigin: true,
    })
  );
};
