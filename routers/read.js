const express=require('express');
const router=express.Router();
var data=require('../models/data')
var fs=require('fs')











router.get("/read", (req, res) => {
    var readMe=fs.readFileSync(`./books/${router.bookname}.txt`,'utf-8')
    let dataInfo=data.getDocStats(readMe)
    let topWords=dataInfo[0];
    let leastWords=dataInfo[1];
    let docLength=dataInfo[2];
    let wordCount=dataInfo[3];

    res.render("read",{
        readMe:readMe,
        topWords:topWords,
        leastWords:leastWords,
        docLength:docLength,
        wordCount:wordCount
    })
})


router.post("/read",(req,res,next)=>{
    const book=req.body.bookName
    //set the variable inside the router object and you can access it anywhere
    router.bookname=book;
    res.redirect('read')
    next()
})









module.exports=router;