var dsadm = require('/usr/ds/node_modules/dsadm');

module.exports = {
  all: function(params, callback) {
    if (callback == undefined) {
      callback = params;
      params = {};
    }

    return dsadm.listLocal(callback);
  },
  get: function(id, callback) {
    return dsadm.dump(id, callback);
  }
}
