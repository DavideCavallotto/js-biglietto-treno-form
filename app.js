// - chiedere all'utente in suo nome
// - chiedere all'utente i km che deve percorrere
//     - inizializzare una variabile
const passengerKmDomElement = document.getElementById('km-passenger'); 
console.dir(passengerKmDomElement)


// - chiedere all'utente la fascia di età di appartenenza
//     - inizializzare una variabile
const passengerAgeDomElement = document.getElementById('discount');
console.dir(passengerAgeDomElement)

// - prendo il pulsante dal Dom
//     - inizializzare una variabile
const btnDomElement = document.getElementById('btn-calc');
console.log(btnDomElement)

// - prendo l'elemento con la classe price-ticket
let priceTicketDomElement = document.querySelector('.price-ticket')

// - dichiarare prezzo al km
const priceForKm = 0.21;
console.log(priceForKm) 


// - dichiarare prezzo base del biglietto
let basePrice = priceForKm * passengerKmDomElement.value;
console.log(basePrice)

// - assegno una funzione al pulsante del Dom
btnDomElement.addEventListener('click', function () {
    console.log('ho cliccato')

    const km = parseFloat(passengerKmDomElement.value)
    console.log(km + ' km indicati dal passegero')

    const prezzo = km * priceForKm
    console.log(parseFloat(prezzo)) 
    
    priceTicketDomElement.innerHTML = prezzo.toFixed(2)   
    
    if(discount = 0) {              
        priceDiscount = ((priceForKm * passengerKmDomElement.value * 20) / 100); 
        console.log(priceDiscount)
    } else if(discount = 2) {                
        priceDiscount = ((priceForKm * passengerKmDomElement.value * 40) / 100);    
    }        
 
})
