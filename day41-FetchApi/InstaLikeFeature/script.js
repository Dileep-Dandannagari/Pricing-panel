let con=document.querySelector(".container");
let heart=document.querySelector("i");
con.addEventListener("dblclick",function(){
   heart.style.transform="translate(-50%,-50%) scale(1)";
   heart.style.opacity=0.8;
   setTimeout(() => {
        heart.style.opacity=0;
   }, 1000);
   setTimeout(() => {
        heart.style.transform="translate(-50%, -50%) scale(0)";
   }, 2000);
})