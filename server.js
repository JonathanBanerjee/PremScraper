'use strict';
const express = require('express');

//Constants 
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express ();

app._router.get("/", (req, res) =>
{
    res.send('Hello World');
}); 

app.listen(PORT, HOST);

console.log(`Running on https://${HOST}:${PORT}`);