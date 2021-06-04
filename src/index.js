var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');
const { v4: uuidv4 } = require('uuid');

/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
*/
exports.initializer = (context, callback) => {
  console.log('i am initializing');
  callback(null, '');
};


exports.handler = (req, resp, context) => {
    console.log('hello world');

    var params = {
        message: 'Hello World',
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method : req.method,
        requestURI : req.url,
        clientIP : req.clientIP,
        uuid : uuidv4()
    }

    getRawBody(req, function(err, body) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = body.toString();
        resp.send(JSON.stringify(params, null, '    '));
    });

    /*
    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    });
    */
}