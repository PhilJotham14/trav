const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

//displays the Farmer One Ward One Dashboard page
router.get('/', (req,res) => {
    res.render('wardOneDashboard')
})


//logout
router.post('/', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/');
            }
        })
    }  
  })
module.exports=router;