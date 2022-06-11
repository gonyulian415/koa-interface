mac查看端口号有没被占用：
`lsof -i:port`
杀掉对应进程：
`kill port`
---------------------
nodemon一般全局安装，实现热更新，方便调试
---------------------
在终端执行mysql的命令时，一定要加;结尾再回车执行。
`show databases;`
---------------------
node orm框架：typeorm 和 sequelize
---
`sequelize.define(modelName, attr, options)`

v6版本文档有问题，文档里：const { Datatypes } = require('sequelize')
实际上，Datatypes是publish static value，
 const Sequelize = require('sequelize')
 const Datatypes = Sequelize.Datatypes
