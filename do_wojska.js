var dane = [
    {
        "imie": "Jan",
        "nazwisko": "Kowalski",
        "data_urodzenia": "1990-05-15",
        "zawod": "inżynier",
        "plec": "M",
        "kategoria_wojskowa": "A",
        "status_zdrowotny": "zdrowy",
        "wyksztalcenie": "wyższe",
        "sytuacja_rodzinna": "kawaler"
    },
    {
        "imie": "Anna",
        "nazwisko": "Nowak",
        "data_urodzenia": "2000-11-22",
        "zawod": "nauczyciel",
        "plec": "K",
        "kategoria_wojskowa": "B",
        "status_zdrowotny": "zdrowy",
        "wyksztalcenie": "średnie",
        "sytuacja_rodzinna": "mężatka"
    },
    {
        "imie": "Piotr",
        "nazwisko": "Wiśniewski",
        "data_urodzenia": "1985-03-30",
        "zawod": "lekarz",
        "plec": "M",
        "kategoria_wojskowa": "D",
        "status_zdrowotny": "chory",
        "wyksztalcenie": "wyższe",
        "sytuacja_rodzinna": "rozwiedziony"
    },
    {
        "imie": "Maria",
        "nazwisko": "Dąbrowska",
        "data_urodzenia": "1995-07-10",
        "zawod": "programista",
        "plec": "K",
        "kategoria_wojskowa": "A",
        "status_zdrowotny": "zdrowy",
        "wyksztalcenie": "wyższe",
        "sytuacja_rodzinna": "samotna_z_dzieckiem"
    }
]

let czyWojna = true;

let przegrywamy = {
    sprawdz: function(daneOsobowe) {
        return true;
    }
}

let main = function() {
    console.log('wywoluje main');

    let kryt = czyWojna ? wspolneKryteriumNaCzasWojny : wspolneKryteriumNaCzasPokoju;
    for(var i = 0 ; i < dane.length; i++ ) {
        console.log(dane[i]);
       
        console.log( czyPowolac( dane[i], kryt )) ;

    }

    console.log('koniec main');

}
let czyMezczyzna= function(daneOsobowe) {
    return daneOsobowe['plec'] == 'M';
}


let czyOdpowiedniaKategoria = function(daneOsobowe) {
    return daneOsobowe['kategoria_wojskowa'] == 'A' 
              || daneOsobowe['kategoria_wojskowa'] == 'B';

}

let czyZdrowy = function(daneOsobowe) {
    return daneOsobowe['status_zdrowotny'] == 'zdrowy' ;
}

let czySytuacjaRodzinna = function(daneOsobowe) {
    return daneOsobowe['sytuacja_rodzinna'] == 'kawaler';
}

//taki sam interfejs
//kazde kryterium ma metode sprawdz(daneOsobowe)

let kryteriumPlci = {
    sprawdz: czyMezczyzna
}

let kryteriumZdrowia = { 
    sprawdz: czyZdrowy
}

let kryteriumKategorii = { 
    sprawdz: czyOdpowiedniaKategoria
}

let kryteriumSytuacjiRodzinnej = { 
    sprawdz: czySytuacjaRodzinna
}

let wspolneKryteriumNaCzasPokoju = {
    kryteria: [ kryteriumPlci, kryteriumZdrowia, kryteriumKategorii, kryteriumSytuacjiRodzinnej ] ,  
    sprawdz: function(daneOsobowe) {

        for(let i = 0 ; i < this.kryteria.length ; i ++) {
            if(this.kryteria[i].sprawdz(daneOsobowe) === false) {
                return false;
            }
        }

        return true;
    }      
}

let wspolneKryteriumNaCzasWojny = {
    kryteria: [ kryteriumPlci ] ,  
    sprawdz: function(daneOsobowe) {

        for(let i = 0 ; i < this.kryteria.length ; i ++) {
            if(this.kryteria[i].sprawdz(daneOsobowe) === false) {
                return false;
            }
        }

        return true;
    }      
}



let czyPowolac = function(daneOsobowe, kryterium) {     
   if( kryterium.sprawdz(daneOsobowe)) {  // zdrowy, A, M, kawaler

       console.log('najlepszy kandydat!!');
       return true;
   } else {
       console.log('średni kandydat')
       return false;
   } 
    
  
   return false; 

}
