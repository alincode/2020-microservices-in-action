const seneca = require('seneca')()
 
seneca.add({cmd: 'salestax'}, function (msg, done) {
  var rate  = 0.23
  var total = msg.net * (1 + rate)
  done(null, {total: total})
})
 
seneca.act({cmd: 'salestax', net: 100}, function (err, result) {
  console.log(result.total)
})