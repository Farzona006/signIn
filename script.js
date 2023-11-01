let clicked=0;
let signIn=document.getElementById('signIn');
let row=document.getElementById('row');
let h2=document.querySelector("#h2");
let p=document.querySelector("#p");
let signUp=document.querySelector("#signUp");
signIn.addEventListener("click",()=>{
    document.getElementById("row").style.transition = "all 2s";
    for(i=0;i<1;i++){
        clicked=clicked+1
    }console.log(clicked)
if(clicked%2==1){
    row.classList.remove("row");
    document.getElementById("row").style.transition = "all 2s";
    row.classList.add("row1");
    h2.innerHTML='New here ?';
    p.innerHTML='Sign up and discover great amount of new opportunities';
    signUp.innerHTML='SIGN UP';
}
else if(clicked%2==0){
    row.classList.remove("row1");
    row.classList.add("row");
    h2.innerHTML='One of us?';
    p.innerHTML='If you already has an account just sign in. We`ve missed you!';
    signUp.innerHTML='SIGN IN';
}
}
)
