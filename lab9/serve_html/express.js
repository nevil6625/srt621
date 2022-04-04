const path=require('path');
const express=require('express');

const app=express();
app.use(express.static(__dirname+'/public'));

app.get('/home',function(req,res) {
res.sendFile(path.join(__dirname+'/views/home.html'));
});

module.exports = app;