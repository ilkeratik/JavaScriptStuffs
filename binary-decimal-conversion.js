let sayi = prompt('Sayi: ');
let sayi_sist = prompt('Sayi Sistemi: ');

if(sayi_sist == 'ikili'){
     let onlu_donusum = binary_to_decimal(sayi);
     alert(onlu_donusum);
}
else if(sayi_sist == 'onlu'){
     let ikili_donusum = decimal_to_binary(sayi);
     alert(ikili_donusum);
}

function decimal_to_binary (onlu_sayi){
    let bolum = parseInt(onlu_sayi);
    let sonuc= '';
    while ( bolum > 0 ){
           
            let kalan = bolum % 2;
            
            bolum = parseInt(bolum / 2);
            
            sonuc += kalan;
      }
      
      sonuc = sonuc.split( '' ).reverse( ).join( '' );;
      return sonuc;
}

function binary_to_decimal (ikili_sayi){
    let sonuc = parseInt(ikili_sayi, 2);
    return sonuc;
}
