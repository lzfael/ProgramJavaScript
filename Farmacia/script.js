document.addEventListener('DOMContentLoaded', () => {
const frm = document.querySelector(`form`);
const outProduct = document.querySelector(`#outProduto`);
const outPrice = document.querySelector(`#outPreco`);

 frm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    const Medicine = frm.inMedicine.value;
    const valorProduct = Number(frm.inPrice.value);

    const endValor = Math.floor(valorProduct) * 2;

    outProduct.innerText = `O Produto ${Medicine} está em PROMOÇÃO!`;
    outPrice.innerText = `Leve 2 e pague R$ ${endValor.toFixed(2)}`;

 });
});