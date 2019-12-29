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
       conn.query('insert into qualitygatespercentqg set ?',[data],(err,rows)=>{
       });
   });
};

model.saveqg = (req,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_VULNERABILIDADES,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME) => {
  const ID = req.body.ID
   req.getConnection((err,conn)=>{
  var querybuilder = 'insert into qualitygatescalc (ID,NOMBREPROYECTO,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS,QG_RADIOCAPAS,QG_RADIOSOPORTE,QG_VULNERABILIDADES,QG_COBERTURA,QG_COD_DUPLICADO,QG_TIME) values (?,"'+NOMBREPROYECTO+'",'+QG_CRITERIOS+','+QG_ENDPOINTS+','+QG_ERRORES+','+QG_CODESMELLS+','+QG_RADIOCAPAS+','+QG_RADIOSOPORTE+','+QG_VULNERABILIDADES+','+QG_COBERTURA+','+QG_COD_DUPLICADO+','+QG_TIME+');'
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

model.resultqg = (req,res) => {
  const {ID} = req.params
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select aa.*,bb.QG_CRITERIOS,bb.QG_ENDPOINTS,bb.QG_ERRORES,bb.QG_CODESMELLS,bb.QG_RADIOCAPAS,bb.QG_RADIOSOPORTE,bb.QG_VULNERABILIDADES,bb.QG_COBERTURA,bb.QG_COD_DUPLICADO,bb.QG_TIME from crudnodejsmysql.qualitygatespercentqg as aa inner join crudnodejsmysql.qualitygatescalc as bb on aa.ID=bb.ID where aa.ID= ?',[ID],(err,rows)=>{
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