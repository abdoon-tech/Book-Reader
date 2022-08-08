const express = require("express");
const { route } = require(".");
const router = express.Router();


var info=[];



router.get("/subpage",(req,res)=>{
    res.render('subpage',{book:router.book,author:router.author})
})



router.post('/subpage',(req, res,next) => {
    let book=req.body.bookName
    let author=req.body.author
    router.book=book
    router.author=author
    res.redirect('subpage')
    next()
})



module.exports=router