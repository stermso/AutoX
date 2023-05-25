//失败，正常拟人操作无法抢到500京豆，未能找到正确逻辑，待修复
//设置屏幕尺寸，便于指定坐标时适配全分辨率操作
setScreenMetrics(1080,2400);

//完成兑换前判断
EnterCww();

//结束程序
EndApp();
engines.myEngine().forceStop();


//----------------------------------分割线------------------------------------
//结束应用的函数
function EndApp(){
home();
sleep(1000);
recents();
sleep(1000);
Swipe(540,1660,540,150,1000);
sleep(3000);
home();
        }

//判断是否存在我的界面
function ExistMine(){
while(desc('我的').findOne(15000)==null){
EndApp();
sleep(3000);
launchApp('京东');
                        }
sleep(1000);
desc('我的').click();
log('存在我的并点击');
                        }

//进入宠汪汪界面
function ClickCww(){
while(text('宠汪汪').findOne(15000)==null){
EndApp();
sleep(3000);
launchApp('京东');
ExistMine();
                }
sleep(3000);
let cwwboundsX=text('宠汪汪').findOne().parent().bounds().centerX();
let cwwboundsY=text('宠汪汪').findOne().parent().bounds().centerY();
click(cwwboundsX,cwwboundsY);
sleep(1000);
log('存在并点击宠汪汪');
                        }

//判断是否存在兑换界面
function ExistConvertible(){
while(text('500京豆').findOne(15000)==null){
id("fe").click();
sleep(3000);
ClickCww();
                }
log('存在并可进行兑换');

//点击即将开始的场次
click(540,1620);
                        }

//判断是否足够兑换500京豆
function EnoughIntegral(){
sleep(5000);

//查找符合条件的text控件UiSelector.textMatches(reg)
let integral=className("android.view.View").depth("16").drawingOrder("0").indexInParent("3").boundsInside(464,275,577,322).textMatches(/\d+/).findOne(10000);

//积分充足的处理
if(integral.text()>8000){
log(`当前积分为${integral.text()},可兑换500京豆`);
                                }

//积分不足的处理
else if(integral.text()>0&&integral.text()<8000){

//结束程序
EndApp();
log(`当前积分为${integral.text()},不足以兑换500京豆,结束脚本`);
engines.myEngine().forceStop();
                                }

//积分为0的处理
else if(integral.text()==0){
while(text('京东数码').findOne(15000)==null&&integral.text()==0){
id("fe").click();
sleep(3000);
ClickCww();
                }
                        }
                                }

//立即兑换存在并点击
function ClickConvertible(){
let n=0;
sleep(5000);
text('即将开始').waitFor();
while(text('即将开始').findOnce()){
n++;
        }
log(`等待${n/100}秒后找到控件`);
text('立即兑换').findOnce(1).click();
if(text('确定').findOne(10000)!=null){

//点击确定
text('确定').findOne().click();
sleep(2000);
log('已确定');
}else{
log('已抢光/超时');
                        }
                                }

//启动函数
function EnterCww(){
launchApp('京东');
ExistMine();
ClickCww();
ExistConvertible();
EnoughIntegral();
ClickConvertible();
                        }