
const frm = document.querySelector("#form")

 frm.addEventListener("submit", (e) => {
     const number = document.querySelector("#Vnumber").value
     let resp = document.querySelector("#outResp")
     e.preventDefault();

     if (number % 2 == 0){
         resp.innerText = "O Numero é Par!"
     }else{
         resp.innerText = "O Numero é Ímpar!"
     }

 })