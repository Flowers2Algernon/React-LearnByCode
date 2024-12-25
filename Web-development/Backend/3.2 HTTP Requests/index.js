import express from 'express';

const app = express();
const port = 3001;
app.get('/', (req,res)=>{
    res.send('<h1>Hello from 3.2 HTTP Requests</h1>');
    console.log(req.rawHeaders);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})