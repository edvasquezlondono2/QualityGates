const express = require ('express');
const router = express.Router();

const qualityController =  require ('../controllers/qualitygateController');

router.get('/',(req,res) => {
    qualityController.list(req).then(result => res.render('qualitygates',{
        data: result
    }))    
});

router.post('/add',qualityController.save);   

router.get('/delete/:ID',qualityController.delete); 
module.exports= router;