var Reg = require('../reg.js');
var setup = require('./setup.js');

setup(function (err, collection) {
  if (err)
    return console.error(err);

  new Reg(collection, function (err, reg) {
    if (err)
      return console.error(err);

    function cb (err, id) {
      if (err)
        return console.error('error');

      console.log('add '+id);
    };

    reg.add('log/01-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/02-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/03-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/04-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/05-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/06-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/07-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/08-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/09-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/10-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/11-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/12-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/13-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/14-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/15-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/16-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/17-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/18-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/19-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/20-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/21-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/22-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/23-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/24-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/25-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/26-test', { title: 'Test', created: new Date() }, cb);
    reg.add('log/27-test', { title: 'Test', created: new Date() }, cb);
  });
});
