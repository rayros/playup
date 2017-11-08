'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _googleapis = require('googleapis');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _nodeify = require('nodeify');

var _nodeify2 = _interopRequireDefault(_nodeify);

function Publisher(options) {
  if (!(this instanceof Publisher)) {
    return new Publisher(options);
  }
  (0, _assert2['default'])(options.client_email, 'Missing required parameter client_email');
  (0, _assert2['default'])(options.private_key, 'Missing required parameter private_key');

  this.client = new _googleapis.auth.JWT(options.client_email, null, options.private_key, ['https://www.googleapis.com/auth/androidpublisher']);
}

Publisher.prototype.upload = function upload(apk, params, cb) {
  var up = new _upload2['default'](this.client, apk, params);
  return (0, _nodeify2['default'])(up.publish(), cb);
};

exports['default'] = Publisher;
module.exports = exports['default'];