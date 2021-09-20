const http = require('http');
const url = require('url');
const api = require('./api.js');
const queryString = require('query-string');

function AccessControlConfig(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
}
function Prefligth(req, res) {
    if (req.method === 'OPTIONS') {
        console.log('preflight CORS verifications');
        res.end();
        // request handled
        return true;
    }
    // request not handled
    return false;
}

module.exports = http.createServer((req, res) => {
    AccessControlConfig(res);
    if (!Prefligth(req, res)) {
        // do something else with request
        var mathFunct = require('./controller.js');
        const reqUrl = url.parse(req.url, true);
        // Get endpoint
        if (reqUrl.pathname == '/api/maths' && req.method === 'GET') {
            let parsed = queryString.parse(req.url.substring(req.url.indexOf("?")));
            console.log(parsed);
            console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);

            if (parsed["op"] == ' ') {
                mathFunct.add(res, parsed["x"], parsed["y"]);
            }
            else if (parsed["op"] == '-') {
                mathFunct.sub(res, parsed["x"], parsed["y"]);
            }
            else if (parsed["op"] == '*') {
                mathFunct.mul(res, parsed["x"], parsed["y"]);
            }
            else if (parsed["op"] == '/') {
                mathFunct.div(res, parsed["x"], parsed["y"]);
            }
            else if (parsed["op"] == '%') {
                mathFunct.mod(res, parsed["x"], parsed["y"]);
            }
            else if (parsed["op"] == '!') {
                mathFunct.fac(res, parsed["n"]);
            }
            else if (parsed["op"] == 'p') {
                mathFunct.pre(res, parsed["n"]);
            }
            else if (parsed["op"] == 'np') {
                mathFunct.npre(res, parsed["n"]);
            }

            // Invalid URL
        } else {
            console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
            mathFunct.invalidUrl(req, res);
        }
    }
});