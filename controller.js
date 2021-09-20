const url = require('url');
const queryString = require('query-string');
const api = require('./api.js');
const { Console } = require('console');


exports.add = (res, x, y) => {
    if(x != NaN && y != NaN){

        var response = [
            {
                "op": "+",
                "x": x,
                "y": y,
                "value": api.add(x, y)
            },
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response))
    }
    else if(x == NaN && y != NaN){

        var errorX = [
            {
                "op": "+",
                "x": x,
                "y": y,
                "error": "'x' parameter is not a number"
            },
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(errorX))
    }
    else if(x != NaN && y == NaN){
        var errorY = [
            {
                "op": "+",
                "x": x,
                "y": y,
                "error": "'y' parameter is not a number"
            },
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(errorY))
    }
    else if(x == NaN && y == NaN){
        var errorXY = [
            {
                "op": "+",
                "x": x,
                "y": y,
                "error": "'x' and 'y' parameters are not numbers"
            },
        ];
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(errorXY))
    }
}

exports.sub = (res, x, y) => {
    var response = [
        {
            "op": "-",
            "x": x,
            "y": y,
            "value": api.sub(x, y)
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.mul = (res, x, y) => {
    var response = [
        {
            "op": "*",
            "x": x,
            "y": y,
            "value": api.mul(x, y)
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.div = (res, x, y) => {
    var response = [
        {
            "op": "+",
            "x": x,
            "y": y,
            "value": api.div(x, y)
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.mod = (res, x, y) => {
    var response = [
        {
            "Result": `${x} % ${y} = ${api.mod(x, y)}`
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.fac = (res, n) => {
    var response = [
        {
            "Result": `${n}! = ${api.fac(n)}`
        },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.pre = (res, n) => {
    var response = [
      {
        "Result": api.pre(n)
      },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.npre = (res, n) => {
    var response = [
      {
        "Result": api.npre(n)
      },
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.invalidUrl = function (req, res) {
    var response = [
        {
            "message": "Endpoint incorrect. Les options possibles sont "
        },
        availableEndpoints
    ]
    res.statusCode = 404;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

const availableEndpoints = [
    {
        method: "GET",
        api: "api/maths"
    }
]