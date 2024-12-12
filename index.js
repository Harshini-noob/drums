var d=document.querySelectorAll(".drum");
var aud=document.querySelectorAll(".aud");
function add1(){
    aud[0].play();
}
function add2(){
    aud[1].play();
}
function add3(){
    aud[2].play();
}
function add4(){
    aud[3].play();
}
function add5(){
    aud[4].play();
}
function add6(){
    aud[5].play();
}
function add7(){
    aud[6].play();
}
d[0].addEventListener("click",add1);
d[1].addEventListener("click",add2);
d[2].addEventListener("click",add3);
d[3].addEventListener("click",add4);
d[4].addEventListener("click",add5);
d[5].addEventListener("click",add6);
d[6].addEventListener("click",add7);
document.addEventListener("keydown",function(event){
    if(event.key==="w"){
        add1();
    }
    else if(event.key==="a"){
        add2();
    }
    else if(event.key==="s"){
        add3();
    }
    else if(event.key==="d"){
        add4();
    }
    else if(event.key==="j"){
        add5();
    }
    else if(event.key==="k"){
        add6();
    }
    else if(event.key==="l"){
        add7();
    }
});
