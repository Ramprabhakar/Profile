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

app.listen(process.env.PORT || 9000);
console.log('service running...');
