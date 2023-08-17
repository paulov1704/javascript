var sec = 0
var min = 0
var interval
var i = 0

function start(){
    if(sec == 0 && min == 0){
        interval = setInterval(watch, 100)
    }else if(i == 1) {
        interval = setInterval(watch, 100)
    }
}

function stop(){
    clearInterval(interval)
    i = 1
}

function restart(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerHTML = '00:00'
    i = 0
}

function watch(){
    sec++ 
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('watch').innerHTML = min+':'+sec
}

function volta(){
    document.getElementById('box-volta').innerHTML +='<span>'+min+':'+sec+'</span></br>';
}