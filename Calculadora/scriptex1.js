const frm = document.querySelector(`form`);
/* const outNumberOneAdd = document.querySelector(`#numberAdd1`);
const outNumberTwoAdd = document.querySelector(`#numberAdd2`);

const outNumberOneSub = document.querySelector(`#numberSub1`);
const outNumberTwoSub = document.querySelector(`#numberSub2`);

const outNumberOneMult = document.querySelector(`#numberMult1`);
const outNumberTwoMult = document.querySelector(`#numberMult2`);
*/
const outResultAdd = document.querySelector(`#resultadoAdd`);
const outResultSub = document.querySelector(`#resultadoSub`);
const outResultMult = document.querySelector(`#resultadoMult`);


 frm.addEventListener(`submit`, (e) => {
 e.preventDefault();
    const outNumberOneAdd = frm.numberAdd1.value;
    const outNumberTwoAdd = frm.numberAdd2.value;
    
    const valorAdd = Number(outNumberOneAdd) + Number(outNumberTwoAdd);
    outResultAdd.innerText = `${valorAdd}`;

    const outNumberOneSub = frm.numberSub1.value;
    const outNumberTwoSub = frm.numberSub2.value;

    const valorSub = Number(outNumberOneSub) - Number(outNumberTwoSub);
    outResultSub.innerText = `${valorSub}`

    const outNumberOneMult = frm.numberMult1.value;
    const outNumberTwoMult = frm.numberMult2.value;

    const valorMult = Number(outNumberOneMult) * Number(outNumberTwoMult);
    outResultMult.innerText = `${valorMult}`
 });

