$(function(){






//******************************************************************************************************

var htmlHtml=`<div class="section-title text-center center">
			<h2><strong>html,css</strong>基础</h2>
			<div class="line">
				<hr>
			</div>
			<div class="clearfix"></div>
			<div class="text-left">1 html 超文本标记语言<br/>

2 xhtml 可扩展超文本标记语言 超文本指页面内包含图片，链接，音乐等非文字元素<br/>

3 html5 html的第五个版本。更简洁，标签语义化（页面加载失败时也能够呈现清晰结构，有利优化更容易被搜索，维护时难度更低），语法更宽松，多设备跨平台，自适应网页设计。header nav section article aside header footer figure video embed(嵌套) audio mark canvas datalist <br/>

4 xML 可扩展标记语言<br/>

5 web  结构html 表现css 行为dom<br/>

6 w3c 万维网联盟  WHATWG 超文本应用技术工作小组<br/>

7 ECMA 欧洲电脑厂商联合会<br/>

8 hr/ br/<br/>

9 img src   alt图片替换文本 title图片标题<br/>

10 table表格 bgcolor背景色 cellspacing单元格与单元格的间距 cellpadding单元格与内容的空隙 colspan合并列 rowspan合并行 <br/>
10.1 border-spacing单元格与边框的间距 <br/>
10.2 border-collapse：collaps边框合并empty-cells:show/hidden无内容时隐藏 <br/>
10.3 table-layout：fixed表格固定宽 <br/>
10.4 caption表格标题 valign垂直对齐方式 <br/>
10.5 rules组分格线 rows行间线条 cols列间线 colgroup数据分组<br/>

11 form表单：收集用户信息 submit reset radio checkbox select option textarea button  （placeholder提示密码框） fieldset方框 legend字段标题 label定义标签提示信息 type=“file”上传文件框multiple多选 image火狐不支持 email url number <br/>
date pickers(month月年、week周和年、time小时分钟） datetime-（时间和日和月和年)UTC时间 datetime-local-（本地时间） <br/>
placeholder（未输入时的提示） autofocus（自动焦点，一个网页只能一个） required验证输入不能为空 list（结合datalist） max/min/step  novalidate（给form添加，不自动验证） <br/>

12 get/post  get是把数据加到提交表单的url中，在url中可见。post是通过http（超文本传输协议）post机制，用户看不到。get数据小，不大于2kb，post不受限制。get安全性低，post安全性高。<br/>

13 link href= rel=“shortcut icon”添加在meta里。给网站状态栏加图标<br/>

14 怪异合模型 box-sizing：border-box<br/>

15 Trident（IE 遨游 腾讯 世界之窗） Gecko（Mozilla Firefox 开源、跨平台） Webkit（Chrome Safari） Presto（Opera前 ） Blink（Google Opera）-webkit- -moz- -o- -ms-<br/>

16 浏览器兼容 由不同厂家开发核心架构不一样，设置技术壁垒（hack 降低代码可读性）<br/>

17 图片间隙 display：block或float：left<br/>

18 dt li图片继续 display：block<br/>

19 双倍边距 （浮动的元素使用margin）给浮动的元素display：inline<br/>

20 图片加a蓝色边框 border：0<br/>

21 默认高度 font-size：0或overflow：hidden<br/>

22 表单距离顶部距离不一致 float：left<br/>

23 按钮样式不一  统一大小/加a input套标签去掉input的边框 加背景图<br/>

24 百分比BUG 给右边的元素加clear：right<br/>

25 鼠标指针BUG 加cursor：pointer<br/>

26 阶梯显示 都浮动<br/>

27 input type=text value IE在顶部显示，加行高<br/>

28 浮动 在一行显示多个div，脱离文档流<br/>

29 清除浮动 <br/>
被浮动元素后添加空div，定义div{clear：both；}  <br/>
给父元素添加overflow：hidden   <br/>
给父元素使用伪类div：after{display：block；clear：both；content：“”；visibility：hidden；height：0；}clear{zoom：1}<br/>

30 9pt=12px 1em=16px<br/>

31 font-style：italic/oblique/normal倾斜<br/>

32 text-decoration：none/underline<br/>

33 text-indent 首行缩进只对第一行起作用<br/>

34 letter-spacing：value  字间距<br/>

35 list-style-type：disc（实心圆）circle（空心圆）square（实心方块）<br/>

36 list-style-img：url图片做列表符号<br/>

37 list-style-position：inside里边<br/>

38 background-attachment：fixed背景图固定<br/>

39 边框样式border-style：dashed虚线dotted点画线double双线<br/>

40 定位 <br/>
position：static/absolute/relative/fixed 相对定位区分元素类型<br/>

41 锚点 定义id=“”   引用"<a href=""></a>"<br/>

42 透明 opacity:0~1  IE写法filter:alpha(opacity=value)<br/>

43 元素垂直居中 <br/>
43.1 给父元素加text-align：center，当前元素display：inline-block再给当前元素加vertical-align：middle 在当前元素后加span设置vertical-align：middle；width：0；height：100%；display：inline-block；vertical-align：middle；<br/>
43.2 父元素设置position：relative；当前元素设置position：absolute；top：50%；left50%；margin-top：-当前元素的高的一半；margin-left：-当前元素宽的一半<br/>
43.3 父元素设置position：relative；当前元素positiong：absolute；top：0；bottom：0；left：0；right；0；margin：auto；<br/>

44 css 层叠样式表，层叠指样式表的优先级，优先级高的覆盖优先级低的。<br/>

45 css3优势 让页面看起来炫酷，用户体验高，利于开发维护提高网站性能，使网站适配更多设备，利于优化。<br/>
<br/>
46 属性选择器<br/><br/>
46.1 E[attr]指定属性名<br/>
46.2 E[atter="value"]指定属性名和属性值<br/>
46.3 E[atter~="value"]指定属性名，并且具有属性值（属性值是一组中间用“，”隔开）<br/>
46.4 E[atter^="value"]指定属性名，属性值以value开头的<br/>
46.5 E[atter$="value"]指定属性名，属性值以value结尾的<br/>
46.6 E[atter*="value"]指定属性名，属性值含有value的<br/>

47 否定选择器 ：not{}<br/>

48 浏览器私有前缀 -webkit-谷歌   -moz-火狐   -ms-IE   -o-欧朋<br/>

49 盒子阴影 box-shadow：1px 1px 1px 1px #ccc，color inset<br/>
<br/>
50 word-break：break-all；英文<br/>
<br/>
<br/>
粗暴换行<br/>

51 border-radius 圆角  border-image图片边框<br/>

52 rgba 透明0~1   opacity透明0~1 <br/>

53 文本溢出省略号<br/>
容器设置固定的width：；  overflow：hidden；white-space：nowrap；text-overflow：ellipsis；<br/>

54 background-attachment：fixed 背景图固定<br/>

55 background-size  over足够大 contain最大 auto等比拉伸<br/>

56 background-origin 告诉系统图片从哪个区域显示 padding-box  border-box content-box<br/>

57css样式表：<br/>
57.1 内部样式表  注意：属性一点要放在声明里面，选择器和声明一点要放在style标签里面。内部样式表要放在head里面，比较符合实际开发规范。<br/>
57.2 link rel="stylesheet" 表示关联样式表  link标签放在head里面  href表示路径   @import url（）; <br/>url表示路径    实际开发中使用不多，因为有一系列问题  import 方法也需要放在head里面<br/>
57.3 内联样式表  直接写在标签行内的样式表 style=""  双引号里面放的是css<br/>

 
代码 遵循css语法<br/>

58 flex弹性盒 flex-shrink项目缩小 flex-grow项目放大比例 flex-basis分配多余空间 （flex默认值为0 1 auto）<br/>

59 flex弹性盒 flex-derection：row/colum创建主轴 flex-wrap：wrap换行 <br/>

60 justify-content：主轴线对齐方式 flex-start伸缩项目向一行起始位置靠齐space-between平均分配space-<br/>around两端保留一点位置<br/>

61 align-items侧轴对齐方式 baseline基线对齐 stretch填充整个容器 <br/>

62 align-self（加在子元素上）主要用来单独在侧轴对齐方式<br/>

63 order：1 显示顺序<br/>

64 多列布局 columns：column-width列宽 column-count列数<br/>

65 渐变div { background:linear-gradient(to top, red , blue) }<br/>
66 transition过渡 transition-property指定过渡属性 transition-duration指定过渡时间 transition-<br/>delay指定过渡延迟时间  perspective: 数值；透视<br/>
66.1 translate位移transform: translate(100px, 0px);<br/>
66.2 缩放transform: scale(.5 .5);<br/>
66.3 旋转transform: rotate(45deg)<br/>
66.4 变形原点transform-origin: left top;<br/>

67 指定呈现3D transform-style：preserve-3d；<br/>

68 animation动画 <br/>
元素设置animation-name：value  动画呈现设置@keyframes value{ from{初始属性} to{结束状态属性}} animation-duration：3s动画持续时长 animation-iteration-count：infinite循环播放<br/>

69 媒体查询流程 @media all and （min-width：300px）and
（max-width：640px）{ div{background-color：orange} }<br/>

70 三角形 隐藏边transparent<br/>

71 渐变div { background:linear-gradient(to left, red , blue) }<br/>

72 图片整合优势 通过图片整合减少对服务器请求次数，提高页面的加载速度，整合图片减少图片体积<br/>

73 伪类选择器 link初始 visited访问后 hover悬停时 active点击时<br/>

74 权重 类型选择器0001 class选择器0010 id选择器0100 伪类选择器0001 内联样式1000<br/>

75 建站流程<br/>
注册域名 租用空间 网站建设（确定主题 搜集资料 规划网站 制作网页） 网站推广 网站维护<br/>

76 BFC<br/>
全称Block Formatting Context ，中文直译为块级格式上下文。它是W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。<br/>

77 BFC应用 解决浮动塌陷问题，自适应两栏布局，margin值重叠问题，<br/>

78 BFC触发 <br/>浮动float除none以外的值，display除none以外的值，position不为static或relative，overflow除visibility以外。<br/>

79 h5的特点 开发更规范简洁，标签语义化，语法更宽松，多设备跨平台，自适应网页设计<br/>

80 h5语义化的优点，页面加载失败时还能呈现清晰结构，有利于seo优化，利于被搜索引擎收录，节约成本，降低开发难度<br/>
</div>

</div>`

//****************************************************************************************************






var expressHtml=`<div class="section-title text-center center">
			<h2><strong>express</strong>基础</h2>
			<div class="line">
				<hr>
			</div>
			<div class="clearfix"></div>
<div class="text-left">

<br/>express  基于 Node.js 平台的 web 应用开发框架
<br/>
<br/>
<br/>安装配置
<br/>在工作文件夹位置
<br/>1. 命令 npm init，（为你的应用创建一个 package.json 文件）
<br/>2. 命令 entry point: (app.js)   这是当前应用的入口文件
<br/>3. 命令 npm install express --save  安装 Express 并将其保存到依赖列表中
<br/>
<br/>
<br/>运行实例
<br/>1.创建app.js文件
<br/>2.在app.js中写入以下代码：
<br/>var express = require('express'); //加载模块
<br/>var app = express(); //生成服务实例
<br/>var server = app.listen(8888, function () { //端口为8888
<br/>console.log('启动');
<br/>});
<br/>3.命令 node app.js  (启动服务
<br/>
<br/>
<br/>路由
<br/>1.get路由
<br/>app.put('/user', function (req, res) {
<br/>  res.send('Got a PUT request at /user');
<br/>});<br/>
<br/>2.post路由<br/>
<br/>app.post('/', function (req, res) {
<br/>  res.send('Got a POST request');
<br/>});

<br/>静态文件托管
<br/>app.use(express.static('public'));   (在public文件夹中放入静态资源)

<br/>
<br/>body-parser中间键
<br/>
<br/>安装
<br/>命令：cnpm install body-parser
<br/>
<br/>配置
var bodyParser = require('body-parser')  //获取模块
<br/>app.use(bodyParser.json());  //创建application/json解析,并使用
<br/>app.use(bodyParser.urlencoded({ //创建 application/x-www-form-urlencoded 解析
 <br/> extended: true    //true为选择qs（扩展）库,false为选择querystring（基本）库,两个库工作原理基本一致，
<br/>})); //form 表单

<br/><br/>
Mongoose 插件
<br/>在node.js异步环境下对mongodb进行便捷操作的对象模型工具。

<br/>安装
<br/>命令 cnpm install mongoose
<br/>
<br/>配置
<br/>1.var mongoose =require('mongoose')  //获取模块
<br/>2.mongoose.connect('mongodb://localhost:27017/books',{useMongoClient:true})// 使用connect()连接MongoDb数据库，第一个参数是数据库地址,第二个参数是兼容老Mongo。如果需要账号密码等mongoose.connect('mongodb://username:password@localhost:27017/books');
<br/>3.mongoose.Promise=global.Promise   //加载Promis方法
<br/>
<br/>断开数据库
<br/>mongoose.disconnect() //断开数据库连接方法
<br/>
<br/>Schema
<br/>定义MongoDB中集合Collection里文档document的结构，用于操作数据库
<br/>
<br/>单独建立映射文件
<br/>var mongoose = require("mongoose");
<br/>var UserSchemas = mongoose.Schema({  //初始化，建立数据库集合的映射，指定字段名和类型
<br/>	name:String,
<br/>	pwd:String
<br/>});
<br/>module.exports =UserSchemas;   //模块化
<br/>
<br/>
<br/>Model
<br/>模型Model是根据Schema编译出的构造器，或者称为类，通过Model可以实例化出文档对象document
<br/>使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称。[注意]一定要将model()方法的第一个参数和其返回值设置为相同的值，否则会出现不可预知的结果
<br/>
<br/>建立model文件
<br/>var mongoose = require("mongoose");
<br/>var UserSchemas=require('../schemas/user');  //引用映射文件
<br/>var User=mongoose.model('users',UserSchemas);  //实例化
<br/>module.exports =User;  //模块化
<br/>
<br/>操作数据库集合
<br/>var user = new User({name:"",pwd:""});//创建实例
<br/>user.find({name},function(err,doc){}); //查询
<br/>user.save(function(err,doc){});  //增加
<br/>user.findOneAndRemove({name:""},function(err,doc){});  //删除
<br/>user.findOneAndUpdate({name:""},{name:"",pwd:""},{new:true},function(err,doc){});  //更新
</div>`


//******************************************************************************************************
var mongodbHtml=`<div class="section-title text-center center">
<h2><strong>MongoDB</strong>基础</h2>
<div class="line">
<hr>
</div>
<div class="clearfix"></div>
<div class="text-left">
<br/>MongoDB
<br/>
<br/>非关系型数据库，类似json的格式存储，存储内容为文档型，数据结构由键值对（key=value）组成。数据库下面是集合与域。
<br/>
<br/>配置
<br/>1.创建data文件夹，在其中创建db，conf，dbConf三个文件夹。
<br/>2.在conf文件夹里创建mongo.conf文件，存放启动配置项,在dbConf文件夹中创建mongodb.log文件。
<br/>3.在mongo.conf文件中写入（1）dbpath=F:/data/db,(2)logpath=F:/data/dbConf/mongodb.log,(3.可省略)port="",fork=true(win无效)等。
<br/>
<br/>启动
<br/>1.在安装目录(MongoDB/server/3.4/bin)下，创建start.bat文件，写入mongod -f E:/data/conf/mongo.conf.
<br/>2.启动start.bat文件。
<br/>3.启动安装目录(MongoDB/server/3.4/bin)下的mongo.exe文件。
<br/>
<br/>数据库操作（命令）
<br/>1.查询数据库：show dbs（如果没查到，说明数据库没有数据）。
<br/>2.创建、切换数据库：use 数据库名称 （原来没有就创建，有就切换过去）。
<br/>3.删除数据库 db.dropDatabase();
<br/>4.显示数据库下的集合：show collections。
<br/>5.创建集合：db.createCollection(name,options)。(options为可选项，指定有关内存的大小及索引选项)
<br/>6.删除集合：db.name(集合名).drop()。
<br/>7.插入文档:db.name(集合名).insert({属性名："属性值"})。（同时也可以用save，如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据）
<br/>8.查找文档：db.name(集合名).find({查询条件})。（如果不写查询条件，查询所有）
<br/>9.更新文档：db.name(集合名).update({属性名："属性值"},{$set:{属性名："属性值"}})。（$set为保证如果没有此属性就自动创建）
<br/>10.删除文档:db.name(集合名).remove({属性名："属性值"},1)。(第二个参数可是true或者1)
<br/>
<br/>
<br/>自动刷新supervisor
<br/>
<br/>–save : 安装生产环境需要的依赖包
<br/>–save-dev： 安装开发环境需要的依赖包

<div>`;

//******************************************************************************************************
var websocketHtml=`<div class="section-title text-center center">
<h2><strong>express</strong>基础</h2>
<div class="line">
<hr>
</div>
<div class="clearfix"></div>
<div class="text-left">
<br/>Websocket
<br/>建立在 TCP 协议之上，没有同源限制，客户端可以与任意服务器通信。
<br/>
<br/>命令 cnpm install --save ws
<br/>命令 cnpm init
<br/>
<br/>客户端API
<br/>js代码var ws = new WebSocket('ws://localhost:8080'); //实例化WebSocket，客户端与服务器建立连接
<br/>ws.onopen = function(){}; //连接成功后执行的回调函数
<br/>ws.onmessage = function(event){ //接收服务器数据后回调函数
<br/>	var data = event.data;  //消息包装在参数的data属性里
<br/>}; 
<br/>ws.send('your message');// send()方法向服务器发送数据，需要包装到事件中，不然会报错
<br/>ws.onclose = function(){}; //关闭连接后执行的函数
<br/>ws.onerror = function(){}; //报错时的回调函数
<br/>
<br/>
<br/>
<br/>服务器端API
<br/>var websocket = require('ws');  // 获取ws模块 
<br/>var Server = websocket.Server; // 创建ws服务
<br/>var server =  new Server({port:8899}); //创建ws实例。并指定端口
<br/>server.on('connection',function(_ws) { //connection:当前端有ws请求的时候，就会触发回调。参数就是当前从前端传过来的ws对象
<br/>  _ws.on('message',function(val) {  //向客户端回传数据
<br/>      _ws.send(val)
<br/>   });
<br/>
<br/>});
<br/>
<br/>Websocket io
<br/>Socket.io是由JavaScript实现、基于Node.js、支持WebSocket的协议用于实时通信、跨平台的开源框架，它包括了客户端的JavaScript和服务器端的Node.js。
<br/>
<br/>命令 cnpm install --save socket.io
<br/>命令 cnpm install --save express
<br/>命令 cnpm init
<br/>
<br/>客户端API
<br/>&lt;script src="/socket.io/socket.io.js">&lt;/script> //自动生成的此文件，需要客户端引入
<br/>var ws = io.connect('ws://10.7.154.61:8899') //连接socket，使用io的connect（）方法
<br/>ws.emit('loging',name)  //设置的自定义事件loging，传参数name
<br/>ws.on('login',function(){  //监听login事件
<br/>	
<br/>})
<br/>
<br/>
<br/>服务器端API
<br/>var express = require('express'); 
<br/>var app=express(); //生成服务实例
<br/>app.use(express.static('./'));  //设置静态资源位置
<br/>var http = require('http').Server(app);  //Socket.io依赖原生Http模块
<br/>var socket = require('socket.io')(http); //获取模块，依赖http。具有了和http同一个端口
<br/>http.listen(8899);  //设置监听端口
<br/>socket.on('connection',function(ws){  //socket服务监听connection事件，参数为当前客户端生成的ws对象
<br/>	ws.on('loging',functions(val){    //监听loging事件，
<br/>		socket.sockets.emit('login',val)  //通知所有人，自定义login事件，传参数val
<br/>	})
<br/>});



<div>`

//***********************************************************************************************************

//github

var githubHtml=`<div class="section-title text-center center">
			<h2><strong>Gighub</strong>简单操作</h2>
			<div class="line">
				<hr>
			</div>
			<div class="clearfix"></div>
<div class="text-left">
<br/>Git：
<br/>	Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。分布式：不必服务器端软件支持。
<br/>
<br/>	全局配置：
<br/>		git config --global user.name "runoob"
<br/>		git config --global user.email test@runoob.com
<br/>
<br/>	工作空间：
<br/>	版本库：
<br/>	暂存区：
<br/>
<br/>	使用：
<br/>		a. 初始化版本库：
<br/>			git init
<br/>
<br/>			git status：查看版本库状态
<br/>
<br/>		b. 将待跟踪资源添加到暂存区：
<br/>			git add .
<br/>			git add <file>
<br/>
<br/>		c. 提交版本库
<br/>			git commit -m "版本说明信息"
<br/>
<br/>			git log -- 查看提交日志
<br/>
<br/>		d. 远程仓库：
<br/>			https://github.com/ 或 https://coding.net/
<br/>			1. 注册账户、登录
<br/>			2. 配置 SSH KEY
<br/>				生成 SSH key：
<br/>					ssh-keygen -t rsa -C "youremail@example.com"
<br/>				github上配置：
<br/>					settings --> ssh and gpg keys --> new ssh key --> 输入title与key --> add ssh key
<br/>				测试：
<br/>					ssh -T git@github.com
<br/>
<br/>			3. 在 github 上创建远程仓库
<br/>			4. 将本地仓库上推送到 github 远程仓库中
<br/>				git remote add origin git@github.com:itrainhub/h51710_test.git
<br/>				git push -u origin master
<br/>
<br/>	流程：
<br/>		a. 克隆远程仓库
<br/>			git clone url
<br/>		   更新远程仓库到本地
<br/>		    git pull
<br/>		b. 在工作空间中完成项目任务
<br/>		c. 提交本地版本库，通常是在完成某一个功能并通过测试后
<br/>			git add .
<br/>			git commit -m "message"
<br/>		d. 推送到远程仓库中
<br/>			git push
<br/>
<div>`


var qianduangongjuHtml=`<div class="section-title text-center center">
			<h2><strong>前端工具</strong>简略</h2>
			<div class="line">
				<hr>
			</div>
			<div class="clearfix"></div>
<div class="text-left">
<br/>DOM操作时代      
<br/>大约2006年到2012年，代表jQuery。
<br/>优点：简洁方便，链式调用
<br/>缺点：dom操作慢，代码管理不方便
<br/>'https://jquery.com/'
<br/>
<br/>模块化时代
<br/>大约2012年到2016年，代表require.js/sea.js/angular，构建化工具grunt，gulp
<br/>优点：代码管理方便，其中angular是数据驱动（默认支持模块化），减少操作dom
<br/>缺点：css部分没有处理
<br/>'http://requirejs.org/','https://angularjs.org/','https://gulpjs.com/'
<br/>
<br/>组件化时代
<br/>2016年---今，代表react（世界），vue（中国），angular2，构建工具webpack(处理不同的文件 .jsx .vue .ts 配置比较多)  新构建工具parcel（零配置）
<br/>'https://reactjs.org/','https://cn.vuejs.org/','https://www.webpackjs.com/'
<br/>
<br/>
<br/>
<div>`






//**************************************************************************************************

//基础

// var expressHtml=`<div class="section-title text-center center">
// 			<h2><strong>express</strong>基础</h2>
// 			<div class="line">
// 				<hr>
// 			</div>
// 			<div class="clearfix"></div>
// <div class="text-left">

// <div>`








//**************************************************************************************************
//**************************************************************************************************



var data={list:[
	{"id":"htmljichu","title":"html基础","html":htmlHtml,"app":"web"},
	{"id":"cssjichu","title":"css基础","html":htmlHtml,"app":"web"},
	{"id":"express","title":"express基础","html":expressHtml,"app":"photography"},
	{"id":"mongodb","title":"mongodb基础","html":mongodbHtml,"app":"photography"},
	{"id":"webSocket","title":"webSocket基础","html":websocketHtml,"app":"brandin"},
	{"id":"github","title":"Github简单操作","html":githubHtml,"app":"app"},
	{"id":"qianduangongju","title":"前端工具简略","html":qianduangongjuHtml,"app":"branding"}
	]}


// 加载模板
	var templetHtml = template("booksTemplet",data);

	$("#lightbox").html(templetHtml);


	$("#lightbox").on("click",function(event){
		event.preventDefault(); 
		for(var i=0,len=data.list.length;i<len;i++){
			if($(event.target).parent().data("id")==data.list[i].id){			
				$("#neirong").html(data.list[i].html)
			}
		}
	});


// 添加
	$("#booksAdd").on("click",function(event){
		event.preventDefault(); 
		$("#addbook").show();
		$("#neirong").hide();

	})

	$("#booksAddBtn").on("click",function(event){
		event.preventDefault(); 
		$("#addbook").hide();
		$("#neirong").show();

	})



// 结束
});