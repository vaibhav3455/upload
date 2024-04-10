const express=require('express');
const app=express();
const PORT=process.env.PORT||3000
app.get('/',(req,resp)=>
{
    resp.send('Marwadi University');
});
app.listen(PORT,()=>
{
    console.log(`Appplication listening on port ${PORT}`);
})

module.exports = app;