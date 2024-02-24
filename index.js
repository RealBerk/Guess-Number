let sayiInput = document.getElementsByClassName('sayi')[0];
let tahminEt = document.getElementsByClassName('tahminEt')[0];


tahminEt.addEventListener('click',() => {
        let sayi = Math.floor(Math.random() * 13);
        if(sayiInput.value == sayi)
        {
                alert('doğru bildin!');
        }
        else 
        {
                alert('bilemedin!');
        }
})