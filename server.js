/**
 * Created by rramp on 12/30/2016.
 */
/**
 * Created by rramp on 12/26/2016.
 */
var express = require('express');
var app = express();
app.get('/app',function(req,res) {
    res.render('../app/' + req.param[0]);
});

app.listen(9000,function(){
    console.log('example app listening on port 9000!')
});
