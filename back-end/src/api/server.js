const PORT = process.env.PORT || 3001;
const app = require('./app');
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

require('../socket/status')(io);

http.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
