var express = require('express');

var app = express()

app.get('/api/whoami', function (req, res) {
    console.log(req.headers);
    res.status(200).json({ipaddress:req.ip,
        language: "",
        software: ""
    })
})

app.listen(process.env.PORT || 8080);
