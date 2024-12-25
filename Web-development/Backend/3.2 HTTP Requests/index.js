import express from 'express';

const app = express();
const port = 3001;
app.get('/', (req,res)=>{
    res.send('<h1>Hello from 3.2 HTTP Requests</h1>');
    console.log(req.rawHeaders);
})

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1>');
})

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1>');
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})