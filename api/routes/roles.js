const express = require('express');
var router =express.Router();

router.get('/',(req,res,next)=>{
    res.json({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
    });

});
module.exports = router;
