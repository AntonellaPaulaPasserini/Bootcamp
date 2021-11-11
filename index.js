function calculatePrice(item,precio){
    let envio=0;
    if (precio>=1 && precio < 2000){
        envio = 300;
    }else if(precio>=1 && precio < 4000) {
        envio = 500
    }else if(precio >=4000){
        envio =700
    }
    console.log(`El producto ${item} cuesta ${precio}. Su costo de envío es de ${envio}. Por lo tanto, el precio final es de ${precio+envio}`)
}


calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);
