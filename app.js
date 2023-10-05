// - chiedo all'utente i km che deve percorrere
//     - prendo dal Dom il valore dei km
const passengerKmDomElement = document.getElementById('km-passenger'); 
console.dir(passengerKmDomElement)

// - prendo dal Dom tutti gli elementi che mi servono 
    // - prendo il pulsante dal Dom//     
const btnDomElement = document.getElementById('btn-calc');
console.dir(btnDomElement)

    // - prendo l'elemento dal Dom con la classe price-ticket
let priceTicketDomElement = document.querySelector('.price-ticket')

    // - prendo dal Dom la select
const selDomElement = document.getElementById('discount')

// - assegno una funzione al pulsante del Dom
btnDomElement.addEventListener('click', function () {

// - recupero il valore della select       
    const rangeAge = parseInt(selDomElement.value)
    console.log(rangeAge + ' valore età')

// - inizializzo la variabile passengerKm 
    const passengerKm = parseFloat(passengerKmDomElement.value)
    
// - dichiaro prezzo al km
    const priceForKm = 0.21;
    console.log(priceForKm + ' prezzo al km') 

// - dichiaro prezzo base del biglietto
    let basePrice = priceForKm * passengerKm;
    console.log(basePrice + ' prezzo senza sconto')

    const km = parseFloat(passengerKm)
    console.log(km + ' km indicati dal passegero') 
    
    let priceDiscount = 0   

// - applico sconto in base all'età     
     if(rangeAge === 0) { 

         priceDiscount = ((basePrice * 20) / 100);  
        
      } else if(rangeAge === 2) {  

         priceDiscount = ((basePrice * 40) / 100);   
          
      }     
      
      console.log(priceDiscount + ' sconto applicato')

// - calcolo il prezzo finale
      finalPrice = basePrice - priceDiscount
      console.log(finalPrice + ' prezzo finale')

// - stampo il prezzo finale      
    priceTicketDomElement.innerHTML = finalPrice.toFixed(2)   
   
    
})
