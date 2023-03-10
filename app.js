const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))
app.listen(8080, function(){
    console.log('listen on 8080')
})

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.get('/beauty', function(req, res){
    res.send('beauty')
})

app.get('/write', function(req, res){
    res.sendFile(__dirname+'/write.html')
})

app.post('/add', function(req, res){
    res.send('전송완료')
    console.log(req.body.title)
    console.log(req.body.date)
})