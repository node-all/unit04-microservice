const seneca = require('seneca')();
const fn = require('./fn');

seneca
  .add('role:math, cmd:sum', (msg, reply) => {
    reply(null, {
      answer: (msg.left + msg.right)
    })
  })
  .add({role: 'math', cmd: 'sum', integer: true}, (msg, respond) => {
    respond(null, {
      answer: (Math.floor(msg.left) + Math.floor(msg.right))
    })
  })
  .act({
    role: 'math',
    cmd: 'sum',
    left: 1,
    right: 2
  }, fn)
  .act({
    role: 'math',
    cmd: 'sum',
    left: 1.5,
    right: 2.5,
    integer: true
  }, fn);
