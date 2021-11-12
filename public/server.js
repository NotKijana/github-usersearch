const express = require('express');
const unirest = require('unirest');

const app = express();

app.get('/api/github/:username', (req, res) => {
    let userName = req.params.username;
    const request = unirest('GET', 'https://api.github.com/users/' + userName);
    request.headers({
        'user-agent': 'node.js',
        "Access-Control-Allow-Origin": 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
    });

    request.end((response) => {
        if (response.error) throw new Error(response.error);
        res.json(response.body || {});
    })
})

app.listen(3001, () => {
    console.log('Server loaded at 3001')
})



// var request = https.request(options, function(response){
// var body = '';

// response.on("data", function(chunk){
//     body += chunk.toString('utf8');
//     body = body.split(",");
// });

// response.on("end", function(){
//     console.log("Body: ", body);
//     });
// });

// request.end();