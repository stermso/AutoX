//Waiting fix and text verify
//启动界面
launchApp('京东');


    var JD='com.jingdong.app.mall';


        //点击我的
        var mine=desc('我的').findOne(15000);
        if(mine!=null){
        sleep(1000);
        desc('我的').click();
        log('点击我的');
                        }
        else{
        log('超时未进入个人界面');
                                }


            //点击宠汪汪
            var cww=text('宠汪汪').findOne(15000);
            if(cww!=null){
            sleep(1000);
            var cwwbounds=text('宠汪汪').findOne().parent().bounds();
            click(cwwbounds.centerX(),cwwbounds.centerY());
            sleep(1000);
            log('点击宠汪汪');
                                }
            else{
            log('宠汪汪超时未点击');
                                    }


                //判断是否足够兑换500京豆
                var JDDigital=text('京东数码').findOne(15000);
                if(JDDigital!=null){
                //正则匹配大于8000的值
                var IntegralReg=/^([8-9]\d{3,}|\d{5,})?$/;
                var integral=className("android.view.View").depth("16").drawingOrder("0").indexInParent("3").boundsInside(464,275,577,322).textMatches(IntegralReg).findOne();
                if(integral){
                log('积分足够兑换500京豆');
                                            }
                else{
                log('积分不足以兑换500京豆');
                //结束程序
                EndApp();
                log('结束脚本');
                exit();
                        }
                            }
                else{
                log('网络超时，未找到"京东数码"');
                                                }
                var IntegralExchange=text('积分超值兑换').findOne(10000);
                if(IntegralExchange!=null){

                    log('已显示积分超值兑换界面');
                }else{
                    log('网络延迟，未显示积分超值兑换界面');
                    sleep(5000);
                }
                //点击即将开始的场次
                click(540,1620);
                sleep(5000);
                //BUG
                var exchange=text('立即兑换').findOne(60000);
                if(exchange!=null){
                log('找到立即兑换');
                sleep(500);
                //点击兑换500京豆
                text('立即兑换').findOnce(1).click();
                var confirm=text('确定').findOne(10000);
                if(confirm!=null){
                //点击确定
                text('确定').click();
                sleep(2000);
                            }else{
                log('未能找到确定');
                EndApp(JD);
                exit();
                        }
                            }else{
                EndApp(JD);
                log('已抢光/超时');
                exit();
                        }
            //结束程序
            EndApp(JD);


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
