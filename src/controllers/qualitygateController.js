const qualityModel =  require ('../model/qualitygateModel');

const controller ={};

controller.list = (req,res) => {
    return qualityModel.list(req,res);
};

controller.list2 = (req,res) => {
  return qualityModel.list2(req,res);
};

controller.results = (req,res) => {
    return qualityModel.results(req,res);
};


controller.results2 = (req,res) => {
  return qualityModel.results2(req,res);
};

controller.edit = (req,res) => {
  return qualityModel.edit(req,res);
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
  var QG_ERRORES=(1-(CANTIDADERRORES-(CANTIDADLINEASCODIGO/500))*CANTIDADERRORES*0,0001)*100;

  var CANTIDADCODESMELLS =(parseFloat(req.body.CODESMELLS));
  var QG_CODESMELLS=(1-(CANTIDADCODESMELLS-(CANTIDADLINEASCODIGO/500))*CANTIDADCODESMELLS*0,0001)*100;

  var NOMBREPROYECTO =(req.body.NOMBREPROYECTO);
  
  var QG_COBERTURA =(parseFloat(req.body.COBERTURA)+6);
  console.log(QG_COBERTURA);

  var QG_COD_DUPLICADO = 	 (1 - (((req.body.COD_DUPLICADO/100)*100-3)/100))*100;

  var VULNERABILIDADES =(req.body.VULNERABILIDADES);
  var QG_VULNERABILIDADES =  (1-(VULNERABILIDADES - (CANTIDADLINEASCODIGO/500))*VULNERABILIDADES*0,0001)*100;
  if (req.body.RADIOCAPAS=='on')
  {
    QG_RADIOCAPAS=100;
  }
  else{
    QG_RADIOCAPAS=0;
  }

  if (req.body.RADIOSOPORTE=='on')
  {
    QG_RADIOSOPORTE=100;
  }
  else{
    QG_RADIOSOPORTE=0;
  }

  if (req.body.RADIOMETODOS=='on')
  {
    QG_RADIOMETODOS=100;
  }
  else{
    QG_RADIOMETODOS=0;
  }

  if (req.body.RADIOPORT=='on')
  {
    QG_RADIOPORT=100;
  }
  else{
    QG_RADIOPORT=0;
  }

  if (req.body.RADIOSQL=='on')
  {
    QG_RADIOSQL=100;
  }
  else{
   QG_RADIOSQL=0;
  }


  if (req.body.QG_SOPORTEDOC=='on')
  {
    QG_SOPORTEDOC=100;
  }
  else{
    QG_SOPORTEDOC=0;
  }


  if (req.body.QG_SOPORTETI=='on')
  {
    QG_SOPORTETI=100;
  }
  else{
    QG_SOPORTETI=0;
  }


  if (req.body.RADIOSQL=='on')
  {
    QG_RADIOSQL=100;
  }
  else{
   QG_RADIOSQL=0;
  }


  QG_CRITERIOS=(CANTIDADCRITERIOSAPROBADOS/CANTIDADCRITERIOS)*100
  var QG_TIME =(parseFloat(req.body.TIME)/CANTIDADENDPOINTS)*100;
  console.log(QG_TIME);
  qualityModel.saveqg(req,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_SOPORTEDOC,QG_SOPORTETI,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME,QG_RADIOPORT,QG_RADIOSQL,QG_RADIOMETODOS,QG_VULNERABILIDADES);
};

controller.addPercent = (req,res) => {
  qualityModel.addPercent(req);
  res.redirect('/config');
 };

controller.addPercentqg = (req,res) => {
  qualityModel.addPercentqg(req);
  res.redirect('/configqg');
 };




controller.update = (req,res) => {
  return qualityModel.update(req,res);
};

controller.resultqg = (req,res) => {
  return qualityModel.resultqg(req,res);
};
controller.detail = (req,res) => {
  return qualityModel.detail(req,res);
};

controller.config = (req,res) => {
  return qualityModel.config(req,res);
};

controller.configqg = (req,res) => {
   return qualityModel.configqg(req,res);
};

controller.configqg2 = (req,res) => {
  return qualityModel.configqg2(req,res);
};

controller.delete = (req,res) => {

  qualityModel.delete(req,res);
  res.redirect('/');
};

module.exports = controller;