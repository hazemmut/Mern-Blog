import express from 'express';

const app = express();


app.listen(3000, (req,res,next) => {
    console.log('Server is started!!! ');
    
})