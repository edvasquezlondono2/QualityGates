const model = {};

model.save = (req) => {
  const data= req.body;
    req.getConnection((err,conn)=>{
       conn.query('insert into qualitygates set ?',[data],(err,rows)=>{
       });
   });
};

model.saveqg = (req,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS) => {
  const ID = req.body.ID

    req.getConnection((err,conn)=>{
  var querybuilder = 'insert into qualitygatescalc (ID,QG_CRITERIOS,QG_ENDPOINTS,QG_ERRORES,QG_CODESMELLS) values (?,'+QG_CRITERIOS+','+QG_ENDPOINTS+','+QG_ERRORES+','+QG_CODESMELLS+');'
  conn.query(querybuilder,[ID],(err,rows)=>{

       });
   });
};

model.edit = (req,res) => {
  const {ID} = req.params
 // console.log(res)
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('select * from qualitygates where ID= ?',[ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows); 
 //        console.log (rows);        
       });
   });
  })
};

model.update = (req,res) => {
  const {ID} = req.params;
  const newQualitygate=req.body;
 // console.log(res)
  return new Promise((resolve, reject) => {
    req.getConnection((err,conn)=>{
      return conn.query('update qualitygates set ? where ID =?',[newQualitygate,ID],(err,rows)=>{
           if (err){
              reject(err);
           }
          resolve(rows); 
         console.log (rows);        
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

  model.delete = (req,res)=>{
    const {ID} = req.params;
  //  console.log(ID);
  req.getConnection((err,conn) => {
        conn.query('delete from qualitygates where ID= ?',[ID],(err,rows)=>{
  });
  conn.query('delete from qualitygatescalc where ID= ?',[ID],(err,rows)=>{
  });
})
};

module.exports = model;