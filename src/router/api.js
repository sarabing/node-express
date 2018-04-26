const express = require('express');
const router = express.Router();
router.get('/user',(req,res) =>{
    res.send({name:'1'});
});

module.exports = router;