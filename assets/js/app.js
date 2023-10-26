let cl = console.log;

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const inputControl = document.getElementById("inputControl");

let flag = true;


const onClickHandler = (eve)=>{
   if(flag){
      inputControl.setAttribute("type", "text");
   }else{
      inputControl.setAttribute("type", "password");
   }
  
   icon1.classList.toggle("fa-eye");
   icon1.classList.toggle("fa-eye-slash");

   flag = !flag;
}

icon1.addEventListener("click", onClickHandler);
