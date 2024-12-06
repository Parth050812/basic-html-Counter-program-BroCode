const dec=document.getElementById("b1");
const res=document.getElementById("b2");
const inc=document.getElementById("b3");
const hi=document.getElementById("myh");
let c=0;
dec.onclick=function(){
    c-=1;
    hi.textContent=c;
}
res.onclick=function(){
    c=0;
    hi.textContent=c;
}
inc.onclick=function(){
    c+=1;
    hi.textContent=c;
}

