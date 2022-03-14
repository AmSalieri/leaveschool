// 1. 导入express
const express = require('express')
const fs = require('fs')
// 2. 创建web服务器
const app =express()

// 配置cors这个中间件，解决跨域问题
const cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/dist'))
app.get('/getdata',(req,res)=>{
    // 通过req.query可以获取客户端发送过来的查询
    fs.appendFile('data.txt',req.query.da+'\n\n\n',(err)=>{
        console.log(err);
    })
    res.send(req.query)
})
app.get('/querydata',(req,res)=>{
    fs.readFile('data.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.send(data)
      })
      
})
// 启动web服务器
app.listen(80,()=>{
    console.log('服务器启动成功');
})