// reg - a register for node.js
;(function () {

var Collection = require('mongodb').Collection;

// Reg(collection[, indexFields], cb)
// cb(err, index)
function Reg(col, indexFields, cb) {
  var self = this;

  // sanitize arguments
  if (arguments.length == 2) {
    cb = arguments[1];
    indexFields = {
      _id: -1,
      created: -1,
      modified: -1
    };
  }

  // ensure server is valid instance of Mongolian
  if (!col instanceof Collection)
    return cb(new Error('collection must be of type "Collection"'));

  // save ref to collection
  this.collection = col;
  this.tags = [];

  this.collection.ensureIndex(indexFields, function (err) {
    if (err)
      return cb(err);
    cb(null, self);
  });
}

// cb(err)
Reg.prototype.add = function insert(id, obj, cb) {
  if (typeof obj != 'object')
    return cb(new Error('obj must be an object'));
  obj._id = id;
  this.collection.save(obj, function (err) {
    if (err)
      return cb(err);
    cb(null, id);
  });
};

// cb(err)
Reg.prototype.extend = function update(id, obj, cb) {
  if (typeof obj != 'object')
    return cb(new Error('obj must be an object'));
  this.collection.update({ _id: id }, { $set: obj },
      { upsert: true, safe: true },
      function (err) {
    if (er)
      return cb(err);
    cb(null, id);
  });
};

// cb(err)
Reg.prototype.remove = function remove(id, cb) {
  this.collection.remove({ _id: id }, function (err) {
    if (err)
      return cb(err);
    cb(null, id);
  });
};

// getPages(query, fields, order, limit, cb)
Reg.prototype.getPages = function pagination(query, fields, order, limit, cb) {
  var self = this;

  this.collection.find(query).count(function (err, count) {
    if (err)
      return cb(err);

    var cursors = [];

    // calculate number of queries
    var todo = Math.ceil(count / limit);

    // find each page
    for (var i = 0; i < todo; i++) {
      if (!fields)
        cursors.push(self.collection.find(query, {
          skip : i * limit,
          limit: limit,
          sort: order
        }));
      else
        cursors.push(self.collection.find(query, fields, {
          skip: i * limit,
          limit: limit,
          sort: order
        }));
    }

    return cb(null, cursors);
  });
};

module.exports = Reg;

}).call(this);
