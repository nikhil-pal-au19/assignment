const express=require("express")
const router=express.Router();
const MovieCnt=require("../controllers/movies")
router.route('/')
.get(MovieCnt.getallmovies)
.post(MovieCnt.createmovies)
module.exports=router