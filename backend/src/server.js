require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      success: true,
      app: process.env.APP_NAME,
      message: 'Backend Running Successfully'
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});