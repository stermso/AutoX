//获取启动时间
var starttime=new Date();
log(`启动时间 ${starttime}`);


        //变量声明
        //包名
        var xf='%jdassistant%';
        var wechat='com.tencent.mm';
        var jingdong='com.jingdong.app.mall';
        //右上角更多控件
        var more=className('android.widget.FrameLayout').depth(15).drawingOrder(2).indexInParent(1);


                //设置屏幕尺寸，便于指定坐标时适配全分辨率操作
                setScreenMetrics(1080,2400);


                        //请求截屏权限
                        requestScreenCapture();


                                //设置每天执行次数
                                for(var xunhuan=1;xunhuan<8;xunhuan++){
                                log(`第${xunhuan}次执行`);
                                //启动应用
                                launchApp('%jdassistant%');
                                        //判断是否进入应用界面
                                        while(more.findOne(10000)==null){
                                        log('未进入界面')
                                        //重新启动应用
                                        launchApp('%jdassistant%');
                                        //判断退出循环执行条件为查找控件10秒，若满足条件则跳出否则继续循环
                                        if(more.findOne(10000)!=null){
                                        break;
                                                }}
                                        //登录校验及初始化
                                        var login=text('%users%').findOne(60000);
                                        if(login!=null){
                                        log('已登录');
                                                        }
                                        else{
                                        launchApp('微信');
                                        fengzhuang('通讯录');
                                        fengzhuang('Retist');
                                        fengzhuang('发消息');
                                        id('kii').waitFor();
                                        setText("登录过期");
                                        text('发送').findOne().click();
                                        //发送消息延迟
                                        sleep(5000);
                                        jieshuapp();
                                        jieshuapp();
                                        log('脚本未能成功执行');
                                        exit();
                                                                        }
                                //辅助工具初始化-清空收藏&&关注
                                for(let i=0;i<2;i++){
                                more.findOne().click();
                                log('点击更多');
                                fengzhuang('工具盒');
                                if(i==0){
                                fengzhuang('清空收藏商品');
                                fengzhuang('确认');
                                                                }
                                else{
                                fengzhuang('清空店铺关注');
                                fengzhuang('确认');
                                                                }
                                text('点击"结束脚本"按钮返回').waitFor();
                                let jieshux=text('结束脚本').findOne().bounds().centerX();
                                let jieshuy=text('结束脚本').findOne().bounds().centerY();
                                click(jieshux,jieshuy);
                                log('结束脚本');
                                                                                        }
                        //7个脚本任务
                        //类型1
                        task1('金榜创造营','执行福利任务');
                        task1('东东农场','执行签到页任务');
                        task1('健康社区','收取健康能量');
                        task1('订单公益','每日签到');
                        //类型2
                        task2('种豆得豆','收取营养液');
                        task2('领京豆','领取购物返豆');
                        task2('宠汪汪','自动喂养');
                        jieshuapp();
                //判断辅助脚本执行次数是否足够结束
                //第七次循环执行完毕则结束脚本
                if(xunhuan==7){
                //调用滑动验证函数
                SwipeChoose(2,261,1097,932,1402,148,1488);
                //获取结束时间,并计算总耗时
                var endtime=new Date();
                log(`结束时间为：${endtime}`);
                var difftime=(endtime-starttime)/1000;
                var days = parseInt(difftime/86400);
                var hours = parseInt(difftime/3600)-24*days;
                var minutes = parseInt(difftime%3600/60);
                var seconds = parseInt(difftime%60);
                //一天执行7次,每天从1点开始,每次执行完过3小时20秒再执行下一次，
                //预计7次全用时小于22h10m
                log(`总共用时：${days}天${hours}小时${minutes}分钟${seconds}秒`);
                //当天全部执行完毕后退出脚本
                exit();
                                                                                }
        else if(xunhuan==1||xunhuan==6){
        //调用滑动验证函数
        SwipeChoose(1,261,1097,932,1402,148,1488);
                                                        }
else{
SwipeChoose(2,261,1097,932,1402,148,1488);
                                                }

let nowtime=new Date();
let NextTime=nowtime.getTime()+11000000;
log(`已执行${xunhuan}次,下一次执行时间为：${new Date(NextTime)}`);
//设置执行完毕后多久执行下一次
sleep(11000000);
                                                        }


//TAG需要调用的函数
//封装的点击函数
function fengzhuang(name){
text(name).waitFor();
let x=text(name).findOne().bounds().centerX();
let y=text(name).findOne().bounds().centerY();
sleep(1000);
log(x,y);
click(x,y);
sleep(1000);
log(`点击${name}`);
                        }


//结束应用的函数
//适用于横向任务列表
function jieshuapp(){
sleep(1000);
home();
sleep(1000);
recents();
sleep(1000);
Swipe(531,1612,542,93,500);
sleep(1000);
home();
        }


//任务启停函数
function taskconfirm(x){
//判断启动
text('启动脚本').waitFor();
let qidongx=text('启动脚本').findOne().bounds().centerX();
let qidongy=text('启动脚本').findOne().bounds().centerY();
click(qidongx,qidongy);
//判断结束
if(x=='宠汪汪'){
SwipeChoose(0,327,1150,838,1381,242,1466);
                                                }
else{
text('点击"结束脚本"按钮返回').waitFor();
let jieshux=text('结束脚本').findOne().bounds().centerX();
let jieshuy=text('结束脚本').findOne().bounds().centerY();
click(jieshux,jieshuy);
                        }
                                }


//找到数组中重复次数最多值的函数
function getMaxNum(arr){
let obj={};
for (let i=0;i<arr.length;i++){
if(obj[arr[i]]){
obj[arr[i]]++;
                }
else{
obj[arr[i]]=1;
                }
                        }
let maxNum=0;
let maxKey='';
for(let key in obj){
if(obj[key]>maxNum){
maxNum=obj[key];
maxKey=key;
                }
                        }
return Number(maxKey);
                        }


//脚本任务函数
//类型1
function task1(name1,name2){
let x=text(name1).findOne().bounds().centerX();
let y=text(name1).findOne().bounds().centerY();
click(x,y);
text(name2).waitFor();
taskconfirm();
log(`${name1}完成`);
                        }
//类型2
function task2(name1,name2){
//点击之前先判断是否可以点击
text('启动脚本').waitFor();
sleep(2000);
click(1030.5,467.5);
let x=text(name1).depth(16).findOne().parent().bounds().centerX();
let y=text(name1).depth(16).findOne().parent().bounds().centerY();
click(x,y);
text(name2).waitFor();
taskconfirm(name1);
log(`${name1}完成`);
                        }


//STAR 四阶贝斯曲线随机滑动函数
function randomSwipe(sx,sy,ex,ey){
//设置随机滑动时长范围
var timeMin=500;
var timeMax=3000;
//设置控制点极限距离
var leaveHeightLength=500;
//根据偏差距离，应用不同的随机方式
if(Math.abs(ex-sx)>Math.abs(ey-sy)){
var my=(sy+ey)/2;
var y2=my+random(0,leaveHeightLength);
var y3=my-random(0,leaveHeightLength);
var lx=(sx-ex)/3;
if(lx<0){lx=-lx};
var x2=sx+lx/2+random(0,lx);
var x3=sx+lx+lx/2+random(0,lx);
                                }
else{
var mx=(sx+ex)/2;
var x2=mx+random(0,leaveHeightLength);
var x3=mx-random(0,leaveHeightLength);
var ly=(sy-ey)/3;
if(ly<0){ly=-ly};
var y2=sy+ly/2+random(0,ly);
var y3=sy+ly+ly/2+random(0,ly);
                                }
//获取运行轨迹，及参数
var time=[0,random(timeMin,timeMax)];
var track=bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey);
// log("随机控制点A坐标："+x2+","+y2);
// log("随机控制点B坐标："+x3+","+y3);
// log("随机滑动时长："+time[1]);
//滑动
gestures(time.concat(track));
                                }
function bezierCreate(x1,y1,x2,y2,x3,y3,x4,y4){
//构建参数
var h=100;
var cp=[{x:x1,y:y1+h},{x:x2,y:y2+h},{x:x3,y:y3+h},{x:x4,y:y4+h}];
var numberOfPoints = 100;
var curve=[];
var dt=1.0/(numberOfPoints-1);
//计算轨迹
for (var i=0;i<numberOfPoints;i++){
var ax,bx,cx;
var ay,by,cy;
var tSquared,tCubed;
var result_x,result_y;
cx=3.0*(cp[1].x-cp[0].x);
bx=3.0*(cp[2].x-cp[1].x)-cx;
ax=cp[3].x-cp[0].x-cx-bx;
cy=3.0*(cp[1].y-cp[0].y);
by=3.0*(cp[2].y-cp[1].y)-cy;
ay=cp[3].y-cp[0].y-cy-by;
var t=dt*i;
tSquared=t*t;
tCubed=tSquared*t;
result_x=(ax*tCubed)+(bx*tSquared)+(cx*t)+cp[0].x;
result_y=(ay*tCubed)+(by*tSquared)+(cy*t)+cp[0].y;
curve[i]={
x: result_x,
y: result_y
                }
                        }
//轨迹转路数组
var array=[];
for(var i=0;i<curve.length;i++){
try{
var j=(i<100)?i:(199-i);
xx=parseInt(curve[j].x);
yy=parseInt(Math.abs(100-curve[j].y));
                                        }
catch(e){
break;
        }
array.push([xx, yy]);
                        }
return array;
                }


//滑动选择函数
function SwipeChoose(g,a,b,c,d,e,f){
if(g==1){
foodChoise(20);
VerifySwipe(a,b,c,d,e,f);
jieshuapp();
                                }
else if(g==2){
foodChoise(10);
VerifySwipe(a,b,c,d,e,f);
jieshuapp();
                                }
else if(g==0){
VerifySwipe(a,b,c,d,e,f);
                                }
                                        }


//食物选择函数
function foodChoise(x){
log(`启动京东宠汪汪喂养${x}g食物`);
var keshux,keshuy;
keshux=(x==10)?420:841;
keshuy=(x==10)?1169:1153;
//启动应用
launchApp('京东');
//点击我的
desc('我的').waitFor();
sleep(1000);
desc('我的').click();
log('点击我的');
//点击宠汪汪
text('宠汪汪').waitFor();
sleep(1000);
//STAR 指定坐标范围查找控件
//点击宠汪汪
// className('android.widget.FrameLayout').depth("12").drawingOrder("2").indexInParent("1").boundsInside(252,1334,443,1494).findOne().click();
var cwwb=text('宠汪汪').findOne().parent().bounds();
click(cwwb.centerX(),cwwb.centerY());
sleep(1000);
text('积分超值兑换').waitFor();
sleep(1000);
//点击喂养
className("android.widget.Image").depth("18").drawingOrder("0").indexInParent("0").boundsInside(836,1229,1009,1402).findOne().click();
//选择克数
text('请选择狗粮克数').waitFor();
sleep(1000);
//点击狗粮克数
click(keshux,keshuy);
text('喂养').waitFor();
sleep(1000);
//点击喂养
click(517,1710);
                }
//滑动验证函数
function VerifySwipe(a,b,c,d,e,f){
//滑块验证
//判断是否存在验证页面，不存在则跳过函数，否则进行拼图验证
if(text('向右滑动完成拼图').findOne(10000)){
text('向右滑动完成拼图').waitFor();
//根据控件为true，判断验证页存在，进行while循环，直到验证结束
while(text('向右滑动完成拼图').exists()){
//延迟3秒截图，确保图片出现并正常截图
sleep(3000);
//图片处理1
//图片范围为中间截图区域减去滑块位置
//以下为京东位置 327改成261,1150改成1097,1381改成1402，838改成932
var clip=images.clip(captureScreen(),a,b,c-a,d-b);
log('截图并裁切完成');
//灰度化
var gray=images.grayscale(clip);
//二值化,GAUSSIAN_C高斯加权和使边更细/邻域值35越大则边更粗，偏移值5越小则图片细节更多/约等于去除噪点
var Binarization=images.adaptiveThreshold(gray,200,'MEAN_C','BINARY',35,5);
//保存图片
images.save(Binarization,"/storage/emulated/0/Pictures/JD.png","png",100);
log('保存图片');
//读取图片
var pic=images.read("/storage/emulated/0/Pictures/JD.png");
log('读取图片')
//获取图片宽度
var width=pic.getWidth();
//获取图片高度
var height=pic.getHeight();
//找滑块横坐标
//遍历图片像素点
files.remove('/storage/emulated/0/Pictures/test.txt');
log('清除二值化文档');
var path="/storage/emulated/0/Pictures/test.txt";
for(let i=1;i<height;i++){
var s='';
for(let j=1;j<width;j++){
var number=images.pixel(pic,j,i);
var color=colors.toString(number);
var ss=color=="#ffc8c8c8"?1:0;
s+=ss;
        }
files.append(path,s+'\n');
                                }
//目标滑块01代码匹配(jdassistant)
//滑块01代码:
//1000000000000000000000000000000000000000000000000000000000000000001 TYPE1
//100000000000000000000000000000000000000000000000000000000000000001  TYPE2
//京东下的滑块01代码匹配
//100000000000000000000000000000000000000000000000000000000000000000000000000000000000001
//10000000000000000000000000000000000000000000000000000000000000000000000000000000000001
//1000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
var erzhi=files.read(path).split("\n");
log('读取二值化图片');
//定义滑动距离
var leng=-1;
//存放匹配到的index值
var ar = new Array();
//遍历二值化图片
for(let i=0;i<erzhi.length;i++){
//定义TYPE1下标值
var index=null;
if(a==261){
index=erzhi[i].indexOf('100000000000000000000000000000000000000000000000000000000000000000000000000000000000001');
}
else{
index=erzhi[i].indexOf('1000000000000000000000000000000000000000000000000000000000000000001');
}
//判断是否存在匹配TYPE1的值
if(index>-1){
//将匹配值存入ar数组
ar.push(index);
                }
//定义TYPE2下标值
var index2=null;
if(a==261){
index2=erzhi[i].indexOf('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000001');
}
else{
index2=erzhi[i].indexOf('100000000000000000000000000000000000000000000000000000000000000001');
}
//判断是否存在匹配TYPE2的值
if(index2>-1){
//将匹配值存入ar数组
ar.push(index2);
                }
                        }
//调用获取数组中最大重复次数值的函数
var res=getMaxNum(ar);
log('最大重复值:'+res);
//计算出的index为截图的左侧到滑块的距离，由于截图裁切时不包括滑块宽度，此处补上滑块的右侧横坐标值
//327改成261=a
leng=res*1+a;
log('目标横坐标'+leng);
//滑动滑块
if(leng>-1){
//使用boundsInside设定控件在屏幕中的范围便于无法查找无法获取的控件(base64等)
//滑块位置坐标范围设置为截图上下边坐标(1097,1402)，左右坐标为滑块左右坐标+-1
let huakuai=null;
if(a==261){
huakuai=className("android.widget.Image").depth(19).drawingOrder(0).indexInParent(0).boundsInside(146, 1095, 263, 1404).findOne().bounds();
}
else{
huakuai=className("android.widget.Image").depth(21).drawingOrder(0).indexInParent(0).boundsInside(240, 1148, 329, 1383).findOne().bounds();
}
log(huakuai);
let top=huakuai.top;
log("top:"+top);
let bottom=huakuai.bottom;
log('bottom:'+bottom);
//设定随机值防人机校验
//京东滑块坐标范围为148-261 , e=150~=148
//gx为初始滑块横坐标，范围在242-327之间，防止固定值略微增减
// let gx=Math.floor(random()*(320-250+1))+250;改写为如下方式:
let gx=random(e+2,a-1);
log('gx:'+gx);
//gy为初始滑块纵坐标，范围为获取到控件值的top-bottom之间，防止固定值略微增减
// let gy=Math.floor(random()*((bottom-10)-(top+10)+1))+(top+10);改写为如下格式:
let gy=random(top+10,bottom-10);
log('gy:'+gy);
//hx为目标滑块横坐标，范围固定，但需要加上初始滑块横坐标随机值相较于初始值最小值242的差值
//242在京东中的滑块左边坐标为148
let hx=leng+(gx-e);
log('hx:'+hx);
//hy为目标滑块纵坐标，范围在1147-1381之间，防止固定值略微增减
//京东中目标滑块纵坐标范围应当在1097，1402
// let hy=Math.floor(random()*(1375-1155+1))+1155;改写成如下格式:
let hy=random(b+2,d-2);
log('hy:'+hy);
//调用四阶贝斯曲线仿真滑动，传入上诉随机值，并开始随机滑动
randomSwipe(gx,gy,hx,hy);
log('开始随机滑动');
                        }
else{
log('Caculation Failed');
//计算失败时，指定滑动并刷新图片，以便重复执行滑动直至验证成功
//242为滑块左坐标在京东应为148,计算失败则向右滑动1像素为149，滑动条中点纵坐标京东为1488
swipe(e,f,e+1,f,500);
                        }
//判断是否完成滑动
//判断是否存在验证页
sleep(3000);
dogcheck=text('向右滑动完成拼图').findOne(15000);
if(dogcheck!=null){
log('滑块未完成');
                        }
else{
log('滑块完成');
                }
                        }
sleep(5000);
                }
                        }