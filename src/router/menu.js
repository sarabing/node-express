/**
 * 操作menu相关接口
 */
const express = require('express');
const router = express.Router();
const config = require('../config/config');
const NAME = 'menu';
const db = config.db;
const log = config.log(NAME);


//获取menu
router.use('/get',(req,res) =>{
    let sql = 'select * from menu';
    db.query(sql).then(data =>{
        res.send(data);
    })
});

//添加menu
router.post('/add',(req,res) =>{
    let params = req.body;
    let sql = `insert into ${NAME}(pid,title,descInfo) values(${params.pid || 0 },'${params.title}','${params.desc}')`;
    db.query(sql).then((err,data) =>{
        res.send({
            errorCode:0,
            message:'添加成功'
        });
    });
});

//更新menu
router.post('/update',(req,res) =>{
    let params = req.body;
    let sql = `update ${NAME} set title='${params.title}', descinfo='${params.descinfo}' where id=${params.id}`;
    let sqlGet = `select * from ${NAME}`;
    db.query(sql).then(() =>{
        return db.query(sqlGet);
    }).then((data) =>{
        res.send({
            errorCode:0,
            message:'更新成功'
        });
    }).catch((err) =>{
        res.send({
            errorCode:1,
            message:'更新失败'
        });
    })
})

module.exports = router;