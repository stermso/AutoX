/*去除应用无障碍检测后可用android环境异常的套壳无法启动(例如一般的Android虚拟机)*/
/*当前使用环境Android13*/
//启动应用
launchApp('BOSS直聘');
//设置分辨率
setScreenMetrics(1080,2400);
//保持设备常亮
device.keepScreenOn();
//TAG 设置各个坐标随机数防止被智能识别自动退出登陆
var djx=random(30,960);//点击招聘的横坐标
var djy1=random(370,800);//一页四个招聘信息的第一个
var djy2=random(840,1280);//第二个纵坐标
var djy3=random(1320,1750);//第三个纵坐标
var djy4=random(1790,2220);//第四个纵坐标
var swipex1=random(30,1050);//下拉横坐标1
var swipex2=random(30,1050);//下拉横坐标2
var swipey1=random(370,590);//下拉纵坐标1
var swipey2=random(1500,2220);//下拉纵坐标2
var timer1=random(1000,3000);//1-3秒的时间
var timer2=random(3000,8000);//2-8秒的时间
//进入界面后1-3秒开始执行防止卡顿
sleep(timer2);

id("tv_tab_label").className("android.widget.TextView").text("xx").waitFor();
var shenzhenx=id("tv_tab_label").className("android.widget.TextView").text("xx").findOne().bounds().centerX();
var shenzheny=id("tv_tab_label").className("android.widget.TextView").text("xx").findOne().bounds().centerY();
click(shenzhenx,shenzheny);
changelocal('全xx','xx区');
sleep(3000);
changelocal('全xx','xx1区');
sleep(3000);
changelocal('全xx1区','xx2区');
sleep(3000);
changelocal('全xx2区','xx3区');
sleep(3000);
changelocal('全xx3区','xxx');
sleep(3000);
changelocal('1','xx');
sleep(3000);
id("count").text('2').waitFor();
swipe(650,2015,650,371,1000);
sleep(3000);
changelocal('xx园','xx园');
sleep(3000);
changelocal('3','xx中心');
sleep(3000);
changelocal('4','xxx窗');
sleep(3000);
changelocal('5','x园');
sleep(3000);
id("count").text('6').waitFor();
sleep(1000);
id("btn_confirm").findOne().click();
//等待确定后返回发布界面
id("iv_improper").waitFor();
//点击选择最新发布的信息
click(347,271);
//外层循环
for(let wci=1;wci<51;wci++){
//内层循环执行一个页面的投递次数
//判断是否存在视频面试栏,存在则切换为1-3
if(id("iv_improper").boundsInside(22,364,1058,774).findOne(3000)||text('面试签到').findOne(3000)){
ncjTrue=1;
                }else{
ncjTrue=0;
                }
for(let ncj=ncjTrue;ncj<4;ncj++){
//招聘信息点击横坐标初始化
var djy=null;
//三元运算匹配第几次执行时使用哪个纵坐标
djy=(ncj==0)?djy1:(ncj==1)?djy2:(ncj==2)?djy3:djy4;
//确认区域后会有一次刷新，防止在刷新之前进行判断，停顿3秒
sleep(3000);
//TAG 判断招聘信息删除控件存在时执行点击
id("iv_improper").waitFor();
//开始点击招聘首页信息
click(djx,djy);
//判断已进入详情页
text('职位详情').waitFor();
//延迟1-3秒防止卡顿
sleep(timer1);
//判断进入详情页是否存在立即沟通
var communicateImmediately=text('立即沟通').findOne(10000);
if(communicateImmediately!=null){
//存在则等待该控件加载完毕
// text('立即沟通').waitFor();
//延迟1-3秒防止卡顿
sleep(timer1);
//执行点击发送打招呼
text('立即沟通').click();
                                }
//不存在立即沟通则执行继续沟通
else{
//存在则等待该控件加载完毕
// text('继续沟通').waitFor();
//延迟1-3秒防止卡顿
sleep(timer1);
//执行点击发送打招呼
text('继续沟通').click();
                                }
//判断当日最大会话并结束
var action=id('iv_action_1').findOne(10000);
//等待一定时间未进入界面则判定为聊天上限，存在其他问题，如当前职位不存在时也无法进入聊天界面
if(action==null){
//聊天上限则结束程序
//先回到桌面否则无法清理当前运行的前台程序
home();
sleep(1000);
//打开近期任务列表
recents();
sleep(1000);
//点击清理按钮
id('clearAnimView').findOne().click();
sleep(1000);
//返回桌面
home();
sleep(1000);
//退出脚本
exit();
}
//等待返回控件加载完毕
id('iv_back').waitFor();
//延迟1-3秒防止卡顿
sleep(timer1);
//执行第一次返回点击到详情页
id('iv_back').click();
//延迟1-3秒防止卡顿
sleep(timer1);
//执行第二次返回点击到首页
id('iv_back').click();
//延迟2-8秒再进行下一个招聘信息点击
sleep(timer2);
                }
randomSwipe(swipex1,swipey1,swipex2,swipey2);
//延迟2-8秒再进行下四个招聘信息的执行
sleep(timer2);
                }
//关闭设备常亮
device.cancelKeepingAwake();
exit();

//changelocal切换地区的函数
function changelocal(name1,name2){
text(name1).waitFor();
sleep(1000);
let x=text(name2).findOne().bounds().centerX();
let y=text(name2).findOne().bounds().centerY();
click(x,y);
                }

//四阶贝斯曲线随机滑动函数
//STAR 四阶贝斯曲线随机滑动函数
function randomSwipe(sx,sy,ex,ey){
//设置随机滑动时长范围
var timeMin=1000;
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
                };
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