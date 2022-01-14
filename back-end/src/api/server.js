const PORT = process.env.PORT || 3001;
const http = require('http');
const socket = require('socket.io');
const app = require('./app');
const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

require('../socket/status')(io);

http.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
