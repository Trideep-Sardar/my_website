const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT ||80;

app.use('/static',express.static('static'));
app.use(express.urlencoded({extended:true}));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})
app.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'./profile.html'));
})
app.get('/work',(req,res)=>{
    res.sendFile(path.join(__dirname,'./work.html'));
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'./contact.html'));
})


app.listen(port,()=>{
    console.log(`successfuly started the server at port ${port}`);
})