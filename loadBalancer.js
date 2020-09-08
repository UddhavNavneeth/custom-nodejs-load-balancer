const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

let portNum = 3000;

app.get('/roundRobin', (req, res) => {
    axios.get(`http://localhost:${portNum}`).then((resp) => {
        res.send(resp.data);
        console.log(resp.data);
    }).catch((e) => {
        console.log(e);
    })

    portNum++;
    if (portNum === 3004) {
        portNum = 3000;
    }
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})