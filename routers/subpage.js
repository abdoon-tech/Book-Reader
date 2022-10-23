const express = require("express");
const { route } = require(".");
const router = express.Router();





router.get("/subpage",(req,res)=>{
    res.render('subpage',{book:router.book,author:router.author,image:router.imageSource})
})



router.post('/subpage',(req, res,next) => {
    let book=req.body.bookName
    let author=req.body.author
    let img=req.body.imageSource
    router.book=book
    router.author=author
    router.imageSource=img
    res.redirect('subpage')
    next()
})



module.exports=router