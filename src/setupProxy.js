const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'api/',
    createProxyMiddleware('', {
      target: 'https://192.168.0.21:8443/OnlineBanking/EFT/ExchangeRate',
      secure: false,
      changeOrigin: true,
    })
  );
};
