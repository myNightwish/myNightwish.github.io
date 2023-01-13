let create_time=Math.round(new Date("2021-12-20 20:14:00").getTime()/1000);
let timestamp=Math.round((new Date().getTime()+8*60*60*1000)/1000);
let second=timestamp-create_time;
let time=new Array(0,0);
if(second>=365*24*3600){
  time[0]=parseInt(second/(365*24*3600));
  second %=365*24*3600;
}
if(second>=24*3600){
  time[1]=parseInt(second/(24*3600));
  second %=24*3600;
}
var currentTimeHtml='小破站已经安全运行 '+time[0]+' 年 '+time[1]+' 天 ';
var elementById=document.getElementById('running-time');
if(elementById){
  elementById.innerHTML=currentTimeHtml;
}