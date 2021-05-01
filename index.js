// Event Date
var eventDate= new Date("Apr 23,2022, 00:00:00").getTime();

// Create Interval Function
var x=setInterval(function(){
    // Current Time

    var now=new Date().getTime();

    //Remaining Time

    var remain=eventDate-now;

     var s=Math.floor(remain/(1000));
     var m=Math.floor(remain/(1000*60));
     var h=Math.floor(remain/(1000*60*60));
     var d=Math.floor(remain/(1000*60*60*24));

       h%=24;
       s%=60;
       m%=60;
      
       h=(h<10)?"0"+h:h;
       m=(m<10)?"0"+m:m;
       s=(s<10)?"0"+s:s;

   if (d==0&&h=="00"&&m=="00"&&s=="00"){
       clearInterval(x);
   };

  document.getElementById('days').textContent=d;
  document.getElementById('hours').textContent=h;
  document.getElementById('minutes').textContent=m;
  document.getElementById('seconds').textContent=s;
})