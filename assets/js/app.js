let cl = console.log;

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const inputControl = document.getElementById("inputControl");



const onClickHandler = (eve)=>{
   let getAtr = inputControl.setAttribute("type", "text");
   cl(getAtr);
   icon1.classList.add("d-none");
   icon2.classList.remove("d-none");
}

const onClickRemove = (eve)=>{
    let getAtr = inputControl.setAttribute("type", "password");
    cl(getAtr);
    icon1.classList.remove("d-none");
    icon2.classList.add("d-none");
 }


icon1.addEventListener("click", onClickHandler);
icon2.addEventListener("click", onClickRemove);