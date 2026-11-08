let savat = JSON.parse(localStorage.getItem('cart')) || [];
let jamiSumma = 0;

function zakazQilish(nomi, narxi) {
    let mahsulot = {
        nomi: nomi,
        narxi: narxi,
        soni: 1
    };
    
    savat.push(mahsulot);
    localStorage.setItem('cart', JSON.stringify(savat));

    jamiSumma = jamiSumma + narxi;
    document.getElementById('jami').innerText = "Umumiy summa: " + jamiSumma;
}