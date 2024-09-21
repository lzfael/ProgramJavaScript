document.addEventListener('DOMContentLoaded', () => {
const frm = document.querySelector(`form`);
const resMedic = document.querySelector(`#outMedicamento`);
const resPreco = document.querySelector(`#outPreco`);

frm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const inMedic = frm.inMedicamento.value;
    const inPrice = Number(frm.inPreco.value);

    const valorPromo = Math.floor(inPrice) * 2;
    // const valorPromo = Math.floor(inPrice) + Math.floor(inPrice)

    resMedic.innerText = `Promoção do(a): ${inMedic}`;
    resPreco.innerText = `Leve 2 e Pague: ${valorPromo.toFixed(2)}`;

   
 });
}); 

