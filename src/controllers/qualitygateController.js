const qualityModel =  require ('../model/qualitygateModel');


const controller ={};

controller.list = (req,res) => {
    return qualityModel.list(req,res);
};

controller.results = (req,res) => {
    return qualityModel.results(req,res);
};
controller.save = (req,res) => {
  qualityModel.save(req);
  res.redirect('/');
  var CANTIDADCRITERIOS = (parseFloat(req.body.CANTIDAD_CRITERIOS));
  var CANTIDADCRITERIOSAPROBADOS = (parseFloat(req.body.CANTIDAD_CRITERIOS_APROBADOS));
  var QG_CRITERIOS=(CANTIDADCRITERIOSAPROBADOS/CANTIDADCRITERIOS)*100
 // qualityModel.saveqg(req,QG_CRITERIOS)

  var CANTIDADENDPOINTS = (parseFloat(req.body.CANTIDAD_ENDPOINTS));
  var CANTIDADENDPOINTSAPROBADOS = (parseFloat(req.body.CANTIDAD_ENDPOINTS_APROBADOS));
  var QG_ENDPOINTS=(CANTIDADENDPOINTSAPROBADOS/CANTIDADENDPOINTS)*100
 
  var CANTIDADLINEASCODIGO =(parseFloat(req.body.CANTIDAD_LINEAS_CODIGO));
  var CANTIDADERRORES = (parseFloat(req.body.ERRORES));
  var QG_ERRORES=(1-(CANTIDADERRORES-(CANTIDADLINEASCODIGO/500))*CANTIDADERRORES*0,0001)*100

  var CANTIDADCODESMELLS =(parseFloat(req.body.CODESMELLS));
  var QG_CODESMELLS=(1-(CANTIDADCODESMELLS-(CANTIDADLINEASCODIGO/500))*CANTIDADCODESMELLS*0,0001)*100
 
  var NOMBREPROYECTO =(req.body.NOMBREPROYECTO); 

  qualityModel.saveqg(req,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS)
};

controller.addPercent = (req,res) => {
  console.log(req);
  qualityModel.addPercent(req);
  res.redirect('/config');
 };


controller.edit = (req,res) => {
  return qualityModel.edit(req,res);
};

controller.update = (req,res) => {
  return qualityModel.update(req,res);
};

controller.detail = (req,res) => {
  return qualityModel.detail(req,res);
};

controller.config = (req,res) => {
  return qualityModel.config(req,res);
};


controller.delete = (req,res) => {

  qualityModel.delete(req,res);
  res.redirect('/');
};


module.exports = controller;