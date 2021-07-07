const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/proxydev' , verify ,(req,res)=>{
    res.json({
        posts :{
            title:'Proxy dev classes',
            description:'Dev class on backend'
        }
    })
})


module.exports = router;