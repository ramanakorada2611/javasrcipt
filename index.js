
function flex(){
    let time=new Date()
    let hrs=time.getHours()
    let mins=time.getMinutes()
    let sec=time.getSeconds()
    let period=hrs>=12 ?'PM':'AM'
    hrs=(hrs%12)||12
   mins=mins<10?'0'+mins:mins
   if(hrs<10){
    hrs='0'+hrs
   }
    if(sec<10){
        sec='0'+sec
    }
    document.getElementsByClassName("flex-item")[0].innerText=hrs
    document.getElementsByClassName("flex-item1")[0].innerText=mins
    document.getElementsByClassName("flex-item2")[0].innerText=sec
    document.getElementsByClassName("flex-item3")[0].innerText=period
   if(period=="AM"){
    document.getElementsByClassName('bomma')[0].src="./change.png"
    document.getElementsByClassName('box4')[0].innerText="GRAB SOME HEALTHY  BREAKFAST!!"
    document.getElementsByClassName('box3').innerText="GOOD MORNING !! WAKE UP !!"
   }
   if(hrs>=1&&hrs<=3&&period=="PM"){
    document.getElementsByClassName('bomma')[0].src="./change2 .png"
    document.getElementsByClassName('box4')[0].innerText="LET'S HAVE SOME LUNCH !!!"
    document.getElementsByClassName('box3')[0].innerText="GOOOD AFTERNOON !! TAKE SOME LAUNCH !!"
   }
   if(hrs>=4&&hrs<=7&&period=="PM"){
    document.getElementsByClassName('bomma')[0].src="./change3.png"
    document.getElementsByClassName('box4')[0].innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING !!!"
    document.getElementsByClassName('box3')[0].innerText="GOOOD EVENING !!"
   }
   if(hrs>=8&&hrs<=11&&period=="PM"){
    document.getElementsByClassName('bomma')[0].src="./change4.png"
    document.getElementsByClassName('box4')[0].innerText="CLOSE YOUR EYES AND GO TO SLEEP !!!"
    document.getElementsByClassName('box3')[0].innerText="GOOOD NIGHT !!"
   }
   setTimeout(flex, 1000);
}
 flex()

 function fun(){
    let button=document.getElementById('modify')
    if(button.innerText=="Set Alaram"){
        button.innerText="Party Time"
    }else{
        button.innerText="Set Alaram" 
    }

    let x=document.getElementById("drop1")
    let y=x.options[x.options.selectedIndex].text
    document.getElementById("find1").innerText=y

    let x1=document.getElementById("drop2")
    let y1=x1.options[x1.options.selectedIndex].text
    document.getElementById("find2").innerText=y1

    let x2=document.getElementById("drop3")
    let y2=x1.options[x2.options.selectedIndex].text
    document.getElementById("find3").innerText=y2

    let x3=document.getElementById("drop4")
    let y3=x1.options[x3.options.selectedIndex].text
    document.getElementById("find4").innerText=y3
 }






























































