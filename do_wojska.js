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

function main() {
    console.log('wywoluje main');


    for(var i = 0 ; i < dane.length; i++ ) {
        console.log(dane[i]);
        console.log( czyPowolac( dane[i] )) ;

    }

    console.log('koniec main');

}

function czyPowolac(daneOsobowe) {
    
   if(daneOsobowe['imie'] == 'Maria') {
       return false;
   } 

   if(daneOsobowe['kategoria_wojskowa'] == 'A') {
       return true;
   } 

   if(daneOsobowe['status_zdrowotny'] == 'zdrowy') {
       console.log('kawaler')
       return true;
   } 

   if(daneOsobowe['sytuacja_rodzinna'] == 'samotna_z_dzieckiem') {
       return false;
   } 

   if(daneOsobowe['sytuacja_rodzinna'] == 'kawaler') {
       console.log('kawaler')
       return true;
   } 

   if(daneOsobowe['plec'] == 'M' && daneOsobowe['status_zdrowotny'] == 'zdrowy' && daneOsobowe['kategoria_wojskowa'] == 'A' && daneOsobowe['sytuacja_rodzinna'] == 'kawaler') {  // zdrowy, A, M, kawaler
       return console.log('najlepszy kandydat!!');
       //return true;
   } 

   return false; 

}
