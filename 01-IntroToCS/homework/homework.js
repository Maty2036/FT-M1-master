'use strict'

function BinarioADecimal(num) {
  
let decimal = 0
for (let i = 0; i < num.length ; i++ ) {
  let posicion =num.length-1-i;
  decimal = decimal + 2 ** posicion * num [i]
}
return decimal 
}

function DecimalABinario(num) {
  let binary = [];
  while (num/2 !== 0){
    binary.unshift(num % 2);
    num = Math.floor(num/2)
}
 return binary.join("")
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}