var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});


x = [1, 2, 3, 4, 5, 6]



app.get('/:id', function(req, res) {
    if (req.params.id != '') {
        console.log(req.params.id)
        x.splice(req.params.id, 1);

        console.log(x)
    }
    res.redirect('/')
})


app.listen(3000);
