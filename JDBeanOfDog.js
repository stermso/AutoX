//Pre-commit
//基本可运行,存在待办事项及对应时间节点的测试
//Basically runnable, there are to-do items and tests corresponding to time nodes

//进入宠汪汪的前摇判断函数
EnterCww();


            //TODO 待添加判断
                // //判断是否足够兑换500京豆
                // // text('京东数码').waitFor();
                // var JDDigital=text('京东数码').findOne(15000);
                // if(JDDigital!=null){
                // //STAR 正则匹配大于8000的值
                // var IntegralReg=/^([8-9]\d{3,}|\d{5,})?$/;
                // //STAR 正则查找符合条件的text控件UiSelector.textMatches(reg)
                // var integral=className("android.view.View").depth("16").drawingOrder("0").indexInParent("3").boundsInside(464,275,577,322).textMatches(IntegralReg).findOne();
                // if(integral){
                // log('积分足够兑换500京豆');
                //                             }
                // else{
                // log('积分不足以兑换500京豆');
                // //结束程序
                // EndApp();
                // log('结束脚本');
                // exit();
                //         }
                //             }
                // else{
                // log('网络超时，未找到"京东数码"');
                //                                 }
            //TODO  ---------------------------------------------


                //点击即将开始的场次
                sleep(3000);
                click(540,1620);
                sleep(5000);
                // var a=text('立即兑换').boundsInside(544,1683,1025,1985).findOne();
                var exchange=text('立即兑换').findOne(60000);
                if(exchange!=null){
                sleep(500);
                //点击兑换500京豆
                text('立即兑换').findOnce(1).click();
                var confirm=text('确定').findOne(10000);
                if(confirm!=null){
                //点击确定
                text('确定').click();
                sleep(2000);
                            }
                }else{
                log('已抢光/超时');
                EndApp();
                exit();
                        }


            //结束程序
            EndApp();
            exit();


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
if(desc('我的').findOne(15000)!=null){
break;
        }
            }
sleep(1000);
desc('我的').click();
log('存在我的并点击');
                        }

function ClickCww(){
while(text('宠汪汪').findOne(15000)==null){
EndApp();
sleep(1000);
launchApp('京东');
ExistMine();
if(text('宠汪汪').findOne(15000)!=null){
break;
        }
            }
var cwwbounds=text('宠汪汪').findOne().parent().bounds();
click(cwwbounds.centerX(),cwwbounds.centerY());
sleep(1000);
log('存在并点击宠汪汪');
                        }

//判断是否存在兑换界面
function ExistConvertible(){
while(text('500京豆').findOne(10000)==null){
id("fe").click();
sleep(3000);
ClickCww();
if(text('500京豆').findOne(10000)!=null){
break;
        }
            }
log('存在并可进行兑换');
                        }

//启动函数
function EnterCww(){
launchApp('京东');
ExistMine();
ClickCww();
ExistConvertible();
}