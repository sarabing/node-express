const mysql = require('mysql');

//简单直接创建数据库连接方法
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     port:3306,
//     database:'webapi_demo',
//     multipleStatements:true //允许多条sql同时执行
// });

// connection.connect();

//创建连接池
let config = {
    host:'localhost', //数据库ip地址
    user:'root',    //数据库登录用户名
    password:'',    //数据库登录密码
    port:3306,      //数据库端口
    database:'webapi_demo', //数据库名称
    multipleStatements:true //允许多条sql同时执行
};
process.env.NODE_ENV = 'development';
console.log(process.env);

let pool = mysql.createPool(config);

let query = (sql,values) =>{
    //创建promise对象
    return new Promise((reslove,reject) =>{
        pool.getConnection((err,connection) =>{
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,data) =>{
                    if(err){
                        reject(err);
                    }else{
                        reslove(data); 
                    }
                    connection.release();
                })
            }
        })
    });
};



module.exports={
    query
};