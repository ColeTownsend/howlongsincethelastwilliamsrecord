/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
*/

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var paststring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=""
if difference == 0 {
  document.write("<h1 class="midway-vertical midway-horizontal" id='days'>"+"It published today."+"</h1>")
else {
  document.write("<h1 class="midway-vertical midway-horizontal" id='days'>"+difference+"days"+"</h1>")
}
}
}
//enter the count up date using the format year/month/day
countup(2014,3,19)
