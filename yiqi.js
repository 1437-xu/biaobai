//Java Script Document
var Dianji=0;
window.onload=function(){
                var buhao=document.getElementByld("buhao");
                var hao=document.getElementByld("hao");
                buhao.onclick=function(){
                                Dianji++;
                                if(Dianji==1){
                                                                     alert("你再考虑一下呗");
                  }else if(Dianji==2){
                                                                     alert("你是我见过的最美丽善可爱的女孩");
                  }else if(Dianji==3){
                                                                     alert("爱你");
                  }else if(Dianji==4){
                                                                     alert("家务我帮你干");
                  }else if(Dianji==5){
                                                                     alert("不藏私房钱");
                  }else if(Dianji==6){
                                                                     alert("房子写你名");
                  }else if(Dianji==7){
                                                                     alert("工资全上交");
                  }else if(Dianji==8){
                                                                     alert("我会学着怎么做好一个男友");
                                                                     Dianji=1;
                  }

                }
                hao.onclick=function(){
                                alert("你终于同意了！");
                }