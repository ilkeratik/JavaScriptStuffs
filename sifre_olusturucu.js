let veriler = [];
veriler.push(prompt('Adiniz: '));
veriler.push(prompt('Soyadiniz: '));
veriler.push(prompt('Dogum Tarihiniz: '));
veriler.push(prompt('Sehir: '));

let sifre = veriler[0][0] + veriler[1][0] + veriler[2].slice(2,4) + veriler[3][0] + 
            veriler[3][veriler[3].length -1] + (2021 - veriler[2]); 

alert(sifre);
