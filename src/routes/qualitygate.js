const express = require ('express');
const router = express.Router();

const qualityController =  require ('../controllers/qualitygateController');

router.get('/',(req,res) => {
    qualityController.list(req,res).then(result => res.render('qualitygates',{
        data: result
    }))    
});

router.post('/add',qualityController.save);  


router.get('/update/:ID',(req,res) => {
    qualityController.edit(req,res).then(result => res.render('qualitygates_edit',{
        data: result[0]
    }))    
});
router.get('/delete/:ID',qualityController.delete); 


router.post('/update/:ID',(req,res) => {
    qualityController.update(req,res).then(result => res.redirect('/'))    
});

module.exports= router;