--creating database crudnodejsmysql
create database crudnodejsmysql;
--using database
use crudnodejsmysql;

Drop table crudnodejsmysql.qualitygates;
Drop table crudnodejsmysql.qualitygatescalc;
Drop table crudnodejsmysql.qualitygatespercent;
Drop table crudnodejsmysql.qualitygatespercentqg;

create table crudnodejsmysql.qualitygates(
    ID FLOAT(6),
    NOMBREPROYECTO VARCHAR(30),
    CANTIDAD_CRITERIOS FLOAT(6),
    CANTIDAD_CRITERIOS_APROBADOS FLOAT(6),
    CANTIDAD_ENDPOINTS FLOAT(6),
    CANTIDAD_ENDPOINTS_APROBADOS FLOAT(6),
    CANTIDAD_LINEAS_CODIGO FLOAT(6),
    COD_DUPLICADO FLOAT(6),
    COBERTURA FLOAT(6),
    ERRORES FLOAT(6),
    CODESMELLS FLOAT(6),
    VULNERABILIDADES FLOAT(6),
    RADIOCAPAS VARCHAR(30),
    RADIOSOPORTE VARCHAR(30),
    RADIOPORT VARCHAR(30),
    RADIOSQL VARCHAR(30),
    RADIOMETODOS VARCHAR(30),
    TIME FLOAT(6)
     );

create table crudnodejsmysql.qualitygatescalc(
    ID FLOAT(6),
    NOMBREPROYECTO VARCHAR (30),
    QG_CRITERIOS FLOAT(6),
    QG_ENDPOINTS FLOAT(6),
    QG_ERRORES FLOAT(6),
    QG_CODESMELLS FLOAT(6),    
    QG_RADIOCAPAS FLOAT(6),
    QG_RADIOSOPORTE FLOAT(6),
    QG_VULNERABILIDADES FLOAT(6),
    QG_COBERTURA FLOAT(6),
    QG_COD_DUPLICADO FLOAT(6),
    QG_TIME FLOAT (6),
    QG_RADIOMETODOS FLOAT(6),
    QG_RADIOPORT FLOAT(6),
    QG_RADIOSQL FLOAT(6)
     );


create table crudnodejsmysql.qualitygatespercent(
ID int NOT NULL AUTO_INCREMENT,
NOMBREPROYECTO VARCHAR (30),
PERCENT_FUNCIONALIDAD FLOAT(6),
PERCENT_CONFIABILIDAD FLOAT(6),
PERCENT_USABILIDAD FLOAT(6),
PERCENT_SEGURIDAD FLOAT(6),
PERCENT_MANTENIBILIDAD FLOAT(6),
PERCENT_PERFORMANCE FLOAT(6),
PERCENT_PORTABILIDAD FLOAT(6),
PRIMARY KEY (ID)
);

create table crudnodejsmysql.qualitygatespercentqg(
ID FLOAT(6),
NOMBREPROYECTO VARCHAR (30),
PERCENT_QG_CRITERIOS FLOAT (6),
PERCENT_QG_ENDPOINTS FLOAT (6),
PERCENT_QG_SOPORTE FLOAT (6),
PERCENT_QG_SOPORTEDOC FLOAT (6),
PERCENT_QG_CAPAS FLOAT (6),
PERCENT_QG_SOPORTETI FLOAT (6),
PERCENT_QG_SMELL FLOAT (6),
PERCENT_QG_ERRORES FLOAT (6),
PERCENT_QG_COBERTURA FLOAT (6),
PERCENT_QG_DUPLICADO FLOAT (6),
PERCENT_TIME FLOAT (6),
PERCENT_QG_PORT FLOAT (6),
PERCENT_QG_SQL FLOAT (6),
PERCENT_QG_METODOS FLOAT (6),
PERCENT_QG_VULNERABILIDADES FLOAT (6)
);
-- SHOW TABLES;

-- DESCRIBE qualitygates;

Select *,
-- ((AA.PERCENT_QG_CRITERIOS/100)*BB.QG_CRITERIOS) AS CRITERIOS,
-- ((AA.PERCENT_QG_ENDPOINTS/100)*BB.QG_ENDPOINTS) AS ENDPOINTS,
((AA.PERCENT_QG_CRITERIOS/100)*BB.QG_CRITERIOS) + ((AA.PERCENT_QG_ENDPOINTS/100)*BB.QG_ENDPOINTS) AS FUNCIONALIDAD,
-- (AA.PERCENT_QG_SOPORTE/100)*BB.QG_RADIOSOPORTE AS SOPORTE,
(AA.PERCENT_QG_SOPORTE/100)*BB.QG_RADIOSOPORTE AS CONFIABILIDAD,
((AA.PERCENT_QG_CAPAS/100)*BB.QG_RADIOSOPORTE)+((AA.PERCENT_QG_SMELL/100)*BB.QG_CODESMELLS)+((AA.PERCENT_QG_ERRORES/100)*BB.QG_ERRORES) + ROUND(((AA.PERCENT_QG_COBERTURA/100)*BB.QG_COBERTURA)) +((AA.PERCENT_QG_DUPLICADO/100)*BB.QG_COD_DUPLICADO) AS MANTENIBILIDAD,
-- ROUND(((AA.PERCENT_QG_COBERTURA/100)*BB.QG_COBERTURA)) AS COBERTURA,
-- ((AA.PERCENT_QG_DUPLICADO/100)*BB.QG_COD_DUPLICADO) AS DUPLICADO
-- (AA.PERCENT_QG_CAPAS/100)*BB.QG_RADIOSOPORTE AS CAPAS,
-- ((AA.PERCENT_QG_SMELL/100)*BB.QG_CODESMELLS) AS SMELLS,
-- ((AA.PERCENT_QG_ERRORES/100)*BB.QG_ERRORES) AS ERRORES,
-- ROUND(((AA.PERCENT_QG_COBERTURA/100)*BB.QG_COBERTURA)) AS COBERTURA,
-- ((AA.PERCENT_QG_DUPLICADO/100)*BB.QG_COD_DUPLICADO) AS DUPLICADO,
-- (AA.PERCENT_TIME/100)*BB.QG_TIME AS TIEMPOS,


(AA.PERCENT_TIME/100)*BB.QG_TIME AS PERFORMANCE,
(AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES AS VULNERABILIDADES,
(AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES AS SEGURIDAD
from crudnodejsmysql.qualitygatespercentqg as AA 
inner join crudnodejsmysql.qualitygatescalc as BB
ON AA.ID=BB.ID;

Select AA.ID,
((AA.PERCENT_QG_CRITERIOS/100)*BB.QG_CRITERIOS) + ((AA.PERCENT_QG_ENDPOINTS/100)*BB.QG_ENDPOINTS) AS FUNCIONALIDAD,
(AA.PERCENT_QG_SOPORTE/100)*BB.QG_RADIOSOPORTE AS CONFIABILIDAD,
((AA.PERCENT_QG_CAPAS/100)*BB.QG_RADIOSOPORTE)+((AA.PERCENT_QG_SMELL/100)*BB.QG_CODESMELLS)+((AA.PERCENT_QG_ERRORES/100)*BB.QG_ERRORES) + ROUND(((AA.PERCENT_QG_COBERTURA/100)*BB.QG_COBERTURA)) +((AA.PERCENT_QG_DUPLICADO/100)*BB.QG_COD_DUPLICADO) AS MANTENIBILIDAD,
(AA.PERCENT_TIME/100)*BB.QG_TIME AS PERFORMANCE,
(AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES AS VULNERABILIDADES,
(AA.PERCENT_QG_VULNERABILIDADES/100)*BB.QG_VULNERABILIDADES AS SEGURIDAD
from crudnodejsmysql.qualitygatespercentqg as AA 
inner join crudnodejsmysql.qualitygatescalc as BB
ON AA.ID=BB.ID;