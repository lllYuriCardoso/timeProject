var sec = 0
var min = 0
var hr = 0

var interval

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}

function start() {
    num()
   interval = setInterval(num,1000)
}

function pause() {   
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('num').innerText = '00:00'
}

function num() {
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            min = 0
            hr++
        }
    }
    document.getElementById('num').innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
}






// var ss = 60
// var mm = 60
// var hh = 60

// var interv

// // function changeH1() {
// //     let input = document.getElementById("inputt")
// //     let numt = document.getElementsById("numt")
// //     numt.innerText = input.value;
// // }

// // function twoDigits(digit){
// //     if(digit > 59){
// //         return('0' + digit)
// //     }else{
// //         return(digit)
// //     }
// // }

// function startt() {
//     numt()
//    interv = setInterval(numt,1000)
// }

// function pauset() {   
//     clearInterval(interv)
// }

// function stopt() {
//     clearInterval(interv)
//     ss = 0
//     mm = 0
//     document.getElementById('numt').innerText = '00:00'
// }

// function numt() {
//     ss--
//     if(ss == 0){
//         mm--
//         ss = 60
//         if(mm == 0){
//             mm = 60
//             hh--
//         }
//     }
//     document.getElementById('numt').innerText = twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss)
// }

var numt = document.getElementById('numt');

var hh =document.getElementById('hh');

var mm = document.getElementById('mm');

var ss = document.getElementById('ss');

var startt = document.getElementsByClassName('startt');

var stopt = document.getElementsByClassName('stopt');

var hAtual;
var mAtual;
var sAtual;

var interv;

for(var i = 0; i<=60; i++){
    hh.innerHTML+='<option value="+i+">'+i+'</option>';
}
for(var i = 0; i<=60; i++){
    mm.innerHTML+='<option value="+i+">'+i+'</option>';
}
for(var i = 0; i<=60; i++){
    ss.innerHTML+='<option value="+i+">'+i+'</option>';
}

startt.addEventListener('click', funcion()){
    hAtual = hh.value
    mAtual = mm.value
    sAtual = ss.value
    numt.childNodes[1].innerHTML = hAtual+": "+mAtual+": "+sAtual

    interv = setInterval(function(){
        sAtual --;

        if(sAtual<=0){
            if(mAtual>0){
                mAtual--
                sAtual=59
            }else{
                alert("Acabou o Tempo!")
                clearInterval(interv)
            }
        }
        numt.childNodes[1].innerHTML = hAtual+": "+mAtual+": "+sAtual
    
    }, 1000)
}