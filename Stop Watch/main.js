
var timeShow=document.getElementById("timeShow")
var stopBtn=document.getElementById("stopBtn");
var startBtn=document.getElementById("startBtn")
var resetBtn=document.getElementById("resetBtn")

mm=0;
sec=0;
min=0;
var timer=null;
startBtn.addEventListener("click",function(){
  if(timer!==null){
   clearInterval(timer);
  
  }
 timer=setInterval(timeUpdate,10)
 
})
stopBtn.addEventListener("click",function(){
  
  clearInterval(timer);
 
})
resetBtn.addEventListener("click",function(){
  
  clearInterval(timer)
  mm=0;
  sec=0;
  min=0;
  time="00:00:00"
 timeShow.innerHTML=time;
})



function timeUpdate() {
  mm++;
  if (mm==100) {
    sec++;
    mm=0;
    if(sec==60){
      min++;
      sec=0;
    }
    
    
 }
 
var milisecond;
var second;
var minute;
if (mm<10){
   milisecond= "0" + mm;
  
}
else {
  milisecond=mm;
  
}
if (sec<10){
   second= "0" + sec;
  
}
else {
  second=sec;
  
}if (min<10){
   minute= "0" + min;
  
}
else {
  minute=min;
  
}

 var time=minute+":"+second+":"+milisecond;
 
 timeShow.innerText=time;
 
   
}
/*   
var milisecond;
var second;
var minute;
if (mm<10){
   milisecond= "0" + mm;
  
}
else {
  milisecond=mm;
  
}
if (sec<10){
   second= "0" + sec;
  
}
else {
  second=sec;
  
}if (min<10){
   minute= "0" + min;
  
}
else {
  minute=min;
  
}

 var time=milisecond+":"+second+":"+minute;
 
 timeShow.innerText=time;
 */
