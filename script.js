let  startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
let hr = 0;
let min = 0;
let sec= 0;
let coun = 0;

startbtn.addEventListener('click',function(){
    timer = true;
    stopwatch();
});
stopbtn.addEventListener('click',function(){
    timer = false;
})
resetbtn.addEventListener('click',function(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    coun = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

})

function stopwatch(){
    if(timer){
        coun++;
        if(coun==100){
            sec++;
            coun=0;
        }
        if(sec==60){
            min++;
            sec= 0;
        }
        if(min==60){
            hr++;
            min = 0;
        }
        let hrstring = hr;
        let minstring = min;
        let secstring = sec;
        let counstring = coun;

        if (hr < 10) { 
            hrstring = "0" + hrstring; 
        } 
  
        if (min < 10) { 
            minstring = "0" + minstring; 
        } 
  
        if (sec < 10) { 
            secstring = "0" + secstring; 
        } 
  
        if (coun < 10) { 
            counstring = "0" + counstring; 
        } 

        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minstring;
        document.getElementById('sec').innerHTML = secstring;
        document.getElementById('count').innerHTML = counstring;

        setTimeout(stopwatch, 10);
    }
    
}
