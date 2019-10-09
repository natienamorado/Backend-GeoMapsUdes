let express=require('express');
let app=express();

app.use(require('./bloques'))
app.use(require('./pisos'))

module.exports=app;