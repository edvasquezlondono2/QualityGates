const model = {};

model.list = (req) => {
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

model.save = (req) => {
  const data= req.body;
    req.getConnection((err,conn)=>{
       conn.query('insert into qualitygates set ?',[data],(err,rows)=>{
     //   res.redirect('/');
       });
   });
};

model.saveqg = (req,QG_CRITERIOS) => {
  const ID = req.body.ID

    req.getConnection((err,conn)=>{
      var querybuilder = 'insert into qualitygatescalc (ID,QG_CRITERIOS) values ('+'?,?)'
       conn.query(querybuilder,[ID,QG_CRITERIOS],(err,rows)=>{
       });
   });
};


  model.delete = (req,res)=>{
    const {ID} = req.params;
  req.getConnection((err,conn) => {
        conn.query('delete from qualitygates where ID= ?',[ID],(err,rows)=>{
  });
})
};

module.exports = model;