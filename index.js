const express=require('express');
const app =express();
const cors=require('cors')
const path=require('path')
const sendQuoteMail=require('./server/Routes/SendQuotemail')
const bodayParser=require('body-parser')
app.use(bodayParser.json())
app.use(bodayParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',sendQuoteMail)
if(process.env.NODE_ENV=='production'){
    app.use(express.static('techietom/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'techietom','build','index.js'));
    })
}
app.listen(3001,console.log('connected to 3001'))