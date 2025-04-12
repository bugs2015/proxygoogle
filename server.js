const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://www.google.com',
  changeOrigin: true,
  pathRewrite: { '^/': '/' },
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
  },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
