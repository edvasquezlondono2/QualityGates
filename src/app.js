const express = require('express');
const path=require ('path');
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require('express-myconnection');
const app = express();
//importing routes
const qualityRoutes = require('./routes/qualitygate')
//settings
app.set('port', process.env.PORT || 8020);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'leqhddce',
    port: 3306,
    database: 'crudnodejsmysql',
    insecureAuth : true
}));

app.use(express.urlencoded({extended:false}))
//routes
app.use('/', qualityRoutes);
//static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 8020');
});