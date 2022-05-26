// En funktion som gör så att de olika delarna av sidan visas och inte
function visa(id, d1, d2, d3, d4) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(d1).style.display = 'none';
    document.getElementById(d2).style.display = 'none';
    document.getElementById(d3).style.display = 'none';
    document.getElementById(d4).style.display = 'none';
}


// fixa sen gör så att en ruta poppar upp övervärlden delen 
// så man bare behöver klcika på en anna bild så att den regionen
// kommer upp istället 


//Funktion som matar in de olika iderna så att den stänger de som inte ska vara öppna och öppnar den som ska synas
function regioner_visa(id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13) {
    document.getElementById(id1).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
    document.getElementById(id3).style.display = 'none';
    document.getElementById(id4).style.display = 'none';
    document.getElementById(id5).style.display = 'none';
    document.getElementById(id6).style.display = 'none';
    document.getElementById(id7).style.display = 'none';
    document.getElementById(id8).style.display = 'none';
    document.getElementById(id9).style.display = 'none';
    document.getElementById(id10).style.display = 'none';
    document.getElementById(id11).style.display = 'none';
    document.getElementById(id12).style.display = 'none';
    document.getElementById(id13).style.display = 'none';
}
// Scrolla ner till en spesifik id ete klick på en knapp 
function scrolla_till(id) {
    location.hash = "#" + id;
}
function visa2(id1, id2, id3, id4, id5) {
    document.getElementById(id1).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
    document.getElementById(id3).style.display = 'none';
    document.getElementById(id4).style.display = 'none';
    document.getElementById(id5).style.display = 'none';

}
// En funktion som gör så att de olika delarna av sidan visas och inte
function pilar(id, idnu) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(idnu).style.display = 'none';
}
// En funktion som gör så att det objektet försvinner vid klick
function göm(id) {
    document.getElementById(id).style.display = 'none';
}
