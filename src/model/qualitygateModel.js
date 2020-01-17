const model = {};

model.save = (req) => {
  const data= req.body;
    req.getConnection((err,conn)=>{
       conn.query('insert into qualitygates set ?',[data],(err,rows)=>{
       });
   });
};

model.addPercent = (req) => {
  const data= req.body;
    req.getConnection((err,conn)=>{
       conn.query('insert into qualitygatespercent set ?',[data],(err,rows)=>{
       });
   });
};

model.addPercentqg = (req) => {
  const data= req.body;
    req.getConnection((err,conn)=>{
      console.log(data);
       conn.query('insert into qualitygatespercentqg set ?',[data],(err,rows)=>{
       });
   });
};

model.saveqg = (req,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_SOPORTEDOC,QG_SOPORTETI,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME,QG_RADIOPORT,QG_RADIOSQL,QG_RADIOMETODOS,QG_VULNERABILIDADES) => {
  const ID = req.body.ID;
   req.getConnection((err,conn)=>{
  var querybuilder = 'insert into qualitygatescalc (ID,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_SOPORTEDOC,QG_SOPORTETI,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME,QG_RADIOPORT,QG_RADIOSQL,QG_RADIOMETODOS,QG_VULNERABILIDADES) values (?,"'+NOMBREPROYECTO+'",'+QG_CRITERIOS+','+QG_ENDPOINTS+','+QG_ERRORES+','+QG_CODESMELLS+','+QG_RADIOCAPAS+','+QG_RADIOSOPORTE+','+QG_SOPORTEDOC+','+QG_SOPORTETI+','+QG_COBERTURA+','+QG_COD_DUPLICADO+','+QG_TIME+','+QG_RADIOPORT+','+QG_RADIOSQL+','+QG_RADIOMETODOS+','+QG_VULNERABILIDADES+');'
  console.log(querybuilder);
  console.log(ID,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_VULNERABILIDADES,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_SOPORTEDOC,QG_SOPORTETI,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME,QG_RADIOPORT,QG_RADIOSQL,QG_RADIOMETODOS,QG_VULNERABILIDADES)
  conn.query(querybuilder,[ID],(err,rows)=>{

       });
   });
};

model.edit = (req,res) => {
  const {ID} = req.params
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygates where ID= ?',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);      
       });
   });
  })
};

model.results2 = (req,res) => {
  const {ID} = req.params
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('Select CC.*,((AA.PERCENT_QG_CRITERIOS/100)*BB.QG_CRITERIOS) + ((AA.PERCENT_QG_ENDPOINTS/100)*BB.QG_ENDPOINTS) AS FUNCIONALIDAD,(AA.PERCENT_QG_SOPORTE/100)*BB.QG_RADIOSOPORTE AS CONFIABILIDAD,((AA.PERCENT_QG_CAPAS/100)*BB.QG_RADIOSOPORTE)+((AA.PERCENT_QG_SMELL/100)*BB.QG_CODESMELLS)+((AA.PERCENT_QG_ERRORES/100)*BB.QG_ERRORES) + ROUND(((AA.PERCENT_QG_COBERTURA/100)*BB.QG_COBERTURA)) +((AA.PERCENT_QG_DUPLICADO/100)*BB.QG_COD_DUPLICADO) AS MANTENIBILIDAD,(AA.PERCENT_TIME/100)*BB.QG_TIME AS PERFORMANCE,(AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES AS VULNERABILIDADES,((AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES)+((AA.PERCENT_QG_SMELL/100)*BB.QG_CODESMELLS)+((AA.PERCENT_QG_METODOS/100)*BB.QG_RADIOMETODOS) + ((AA.PERCENT_QG_PORT/100)*BB.QG_RADIOPORT) + ((AA.PERCENT_QG_SQL/100)*BB.QG_RADIOSQL) AS SEGURIDAD from qualitygatespercentqg as AA inner join qualitygatescalc as BB ON AA.ID=BB.ID inner join qualitygatespercent as CC on AA.ID=CC.ID where AA.ID=?',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

model.resultqg = (req,res) => {
  const {ID} = req.params
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select aa.*,bb.QG_CRITERIOS,bb.QG_ENDPOINTS,bb.QG_ERRORES,bb.QG_CODESMELLS,bb.QG_RADIOCAPAS,bb.QG_RADIOSOPORTE,bb.QG_VULNERABILIDADES,bb.QG_COBERTURA,bb.QG_COD_DUPLICADO,bb.QG_TIME,bb.QG_SOPORTEDOC,bb.QG_SOPORTETI,bb.QG_RADIOPORT,bb.QG_RADIOSQL,bb.QG_RADIOMETODOS from crudnodejsmysql.qualitygatespercentqg as aa inner join crudnodejsmysql.qualitygatescalc as bb on aa.ID=bb.ID where aa.ID=?;',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);      
       });
   });
  })
};


model.update = (req,res) => {
  const {ID} = req.params;
  const newQualitygate=req.body;
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('update qualitygates set ? where ID =?',[newQualitygate,ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);       
       });
   });
  })
};


model.configqg = (req,res) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygatespercentqg',(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

model.configqg2 = (req,res) => {
  const {ID} = req.params;
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygatespercent where ID =?',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

model.list = (req,res) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygates',(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

model.list2 = (req,res) => {
  const {ID} = req.params;
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygatespercentqg where ID=?',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

model.config = (req,res) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygatespercent',(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};


model.results = (req,res) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygatescalc',(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};



model.detail = (req,res) => {
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygates',(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows);
       });
   });
  })
};

  model.delete = (req,res)=>{
    const {ID} = req.params;
  req.getConnection((err,conn) => {
        conn.query('delete from qualitygates where ID= ?',[ID],(err,rows)=>{
  });
  conn.query('delete from qualitygatescalc where ID= ?',[ID],(err,rows)=>{
  });
})
};

module.exports = model;