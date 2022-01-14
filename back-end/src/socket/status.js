const { updateOrder } = require('../services/orders');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('status', async ({ status, id }) => {
    await updateOrder({ status }, { id });
    io.emit('status', { status, id });
  });
});
