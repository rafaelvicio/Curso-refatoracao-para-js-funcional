// Retirando as funções qe compõe o comportmento
// da função principal

// Podemos retirar o true e false pois
// o próprio teste lógico nos retorna isso
const isEvenAndNotTwo = ( num ) => 
  ( ( num % 2 ) === 0 && num !== 2 )

const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )

const halfOf = ( num ) => Math.ceil( num / 2 )

const hasDivisor = ( num ) => {
  for ( let i = halfOf( num ); i >= 2; i-- ) {
    // Como testamos se o resto é igual a 0
    // podemos apenas inverter seu valor para
    // usar a negaçao lógica
    if( !( num % i ) ) {
      return true
    }
  }
  return false
}

// Como temos apenas o return dentro da 
// arrow function podemos retornar direto
const isPrime = ( num ) => 
  ( isEvenAndNotTwo( num ) || 
    hasIntegerSquareRoot( num ) ||
    hasDivisor( num ) )
      ? false
      : true


console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))

/**

» node isPrime01.js 
isPrime 2 true
isPrime 3 true
isPrime 4 false
isPrime 100002 false
isPrime 100003 true


100007 é divisível por:  1031
isPrime 100007 false


*/