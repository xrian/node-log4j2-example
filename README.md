# node-log4j2-example
node express整合log4j2.x版本的例子<br>
https://github.com/nomiddlename/log4js-node<br>
[文档地址](https://nomiddlename.github.io/log4js-node/index.html)<br>
安装依赖
```
npm install
```
启动
```
npm start
```
启动后访问localhost:3000,再查看项目中的log文件夹,里面就生成了三个文件,并保存有日志

# 说明 

## 配置文件说明
config\log4j.json是配置文件
配置了三个类别
一个是http请求日志,相当于tomcat的access日志,当日志到达30M时,重新生成一个新的文件
一个是保存debug和info级别的日志.每天生成一个新的文件
一个是保存error及以上等级的日志.每天生成一个新的文件
## 使用log4j
修改app.js,在app.js顶部引入log4js模块,然后加载配置文件
```
var log4js = require('log4js');
log4js.configure('config/log4j.json');
```
这样,就可以在项目中的其他地方使用log4j输出日志了.
```
var logger = require('log4js').getLogger("index");
logger.info('');
logger.error('');
```
## 将log4j整合进入express

在app.js中,将express默认的日志模块注释掉,并且加载log4js模块
```
// app.use(logger('dev'));
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'trace' }));
```
app.use(log4js.connectLogger(...))这代码,最好是放在其他的app.use()前面


其实在node中使用log4j很简单,就是几行代码,只不过,要把配置选项中各个字段代表什么意思弄懂,有点复杂.
网上好多文章,都好旧了.o(╯□╰)o,虽然也可以用,不过log4js2.x版本和1.x版本配置选项,还是有所差异的
