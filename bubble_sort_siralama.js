let giris_dizisi = [];

for (let i = 0; i < 5; i++){
    let giris = prompt(`${i+1}.eleman: `);
    giris_dizisi[i] = parseInt(giris);
}

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
         if(giris_dizisi[j] > giris_dizisi [j+1]){
            let gecici = giris_dizisi[j];
            giris_dizisi[j] = giris_dizisi[j+1];
            giris_dizisi[j+1] = gecici;
         }
    }
}
let sirali_dizi = giris_dizisi;
alert(sirali_dizi);

