const express=require('express');
const app=express();
app.get('/',(req,resp)=>
{
    resp.send('Marwadi University');
}).listen(4200);