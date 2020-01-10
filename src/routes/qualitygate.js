const express = require ('express');
const router = express.Router();

const qualityController =  require ('../controllers/qualitygateController');

router.get('/',(req,res) => {
    qualityController.list(req,res).then(result => res.render('qualitygates',{
        data: result
    }))    
});

router.post('/add',qualityController.save);  

router.post('/addPercent',qualityController.addPercent);  

router.post('/addPercentqg',qualityController.addPercentqg);  

router.get('/detail',(req,res) => {
    qualityController.detail(req,res).then(result => res.render('qualitygates_detail',{
        data: result
    }))    
});

router.get('/config',(req,res) => {
    qualityController.config(req,res).then(result => res.render('qualitygates_config',{
        data: result
    }))
});

router.get('/configqg',(req,res) => {
    qualityController.configqg(req,res).then(result => res.render('qualitygates_configqg',{
        data: result
    }))    
});

router.get('/result',(req,res) => {
    qualityController.results(req,res).then(result => res.render('qualitygates_result',{
        data: result
    }))    
});

router.get('/result2/:NOMBREPROYECTO',(req,res) => {
    qualityController.results2(req,res).then(result => res.render('qualitygates_result2',{
        data: result[0]
    }))    
});

router.get('/update/:ID',(req,res) => {
    qualityController.edit(req,res).then(result => res.render('qualitygates_edit',{
        data: result[0]
    }))    
});

router.get('/resultqg/:ID',(req,res) => {
    qualityController.resultqg(req,res).then(result => res.render('qualitygates_resultqg',{
        data: result[0]
    }))
});

router.get('/delete/:ID',qualityController.delete); 

router.post('/update/:ID',(req,res) => {
    qualityController.update(req,res).then(result => res.redirect('/'))
});

router.post('/resultqg/:ID',(req,res) => {
    qualityController.resultqg(req,res).then(result => res.redirect('/resultqg'))
});


module.exports= router;