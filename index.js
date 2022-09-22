
let text=document.getElementById("text")
console.log(text)

let heading=document.getElementsByTagName("h1")[0]
console.log(heading)

let box=document.getElementsByClassName("box")[0]
console.log(box)

let p=document.getElementById("change")
p.innerText="hello world!"
console.log(p.innerText)


function excute(){
   let ele=document.getElementsByClassName("flex-container")[0]
   let button=document.getElementsByClassName("click")[0]
   if(ele.style.flexDirection=="column"){
      ele.style.flexDirection="row"
   }else{
      ele.style.flexDirection="column"
   }
}

let head=document.getElementById("Heading")
head.style.color="red"
head.style.backgroundColor="black"
head.style.display="inline-block"

function fun(){
   let x=document.getElementById("para")
   let y=document.getElementById("but")
 if(x.innerText=="hello world")
 {
    x.innerText="Welcome to Eleavtion Academy"
    x.style.color="aqua"
    x.style.backgroundColor="black"
    x.style.display="inline-block"
 }
 else{
    x.innerText="hello world"
    x.style.color="yellow"
    x.style.backgroundColor="black"
    x.style.display="inline-block"
 }
}

function clock(){
   let time=new Date()
   let hrs=time.getHours()
   let mins=time.getMinutes()
   let sec=time.getSeconds()
   let tag=document.getElementById("clock")
   period="AM"
   if(hrs>=12){
    period="PM"
   }
   if(hrs>12){
      hrs=hrs%12
   }
   if(hrs<10){
      hrs="0"+hrs
   }
   if(mins<10){
      mins="0"+mins
   }
   if(sec<10){
      sec="0"+sec
   }
   tag.innerText=+hrs+":"+mins+":"+sec+":"+period;
}
setInterval(clock,"1000");

function funcn(){
   let x=document.getElementById("select")
   let y=x.options[x.options.selectedIndex].text
   document.getElementById("find").value=y
}


if(result2){
   msg2.innerText = " Phone Number is Valid"
   }
   else{
   msg2.innerText = " Phone Number is Invalid"
   }
   let msg3 = document.getElementById("message3");
   let year = document.getElementById("birthYear").value;
   let year1 = parseInt(year.slice(0,4));
   if(year1 > 1995){
   msg3.innerText = " Birth Year is valid"
   }
   else{
   msg3.innerText = " Birth Year is Invalid"
   }