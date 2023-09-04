var btn=document.querySelector("#Confirm");
var btn1 =document.querySelector("#Delete")
var container = document.querySelector(".Container");
var check =0;
btn.addEventListener("click" ,function(){
    if(check == 0){
      btn.innerHTML="Follow";
      btn1.innerHTML = "";
      btn1.style.background="none"; 
      check =1;
    }else{
        btn.innerHTML="Following";
        btn1.innerHTML = "";
    }

})
btn1.addEventListener("click" ,function(){
    
    container.innerHTML = "";
    container.style.background="none"; 
})

