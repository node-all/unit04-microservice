const seneca = require('seneca')();

seneca.add('role:math, cmd:sum', (msg, reply) => {
  reply(null, { answer: ( msg.left + msg.right )})
});

seneca.add('role:math, cmd:product', (msg, reply) => {
  reply(null, { answer: ( msg.left * msg.right )})
});

// 在合并到一起的代码中，我们发现， seneca.act 是可以进行链式调用的，Seneca 提供了一个链式API，调式调用是顺序执行的，但是不是串行，所以，返回的结果的顺序可能与调用顺序并不一样
seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, function(err, result){
    console.log(result)
})
.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log)
