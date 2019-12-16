const qualityModel =  require ('../model/qualitygateModel');


const controller ={};

controller.list = (req) => {
    return qualityModel.list(req);
};

controller.save = (req,res) => {
  qualityModel.save(req);
  res.redirect('/');
  var CANTIDADCRITERIOS = (parseFloat(req.body.CANTIDAD_CRITERIOS));
  var CANTIDADCRITERIOSAPROBADOS = (parseFloat(req.body.CANTIDAD_CRITERIOS_APROBADOS));
  var QG_CRITERIOS=(CANTIDADCRITERIOSAPROBADOS/CANTIDADCRITERIOS)*100
  qualityModel.saveqg(req,QG_CRITERIOS)
};

controller.delete = (req,res) => {
  qualityModel.delete(req);
  res.redirect('/');
};


module.exports = controller;