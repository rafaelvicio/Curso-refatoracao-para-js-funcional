# Aulas

- Como solucionar um problema
- Atualizando seus códigos para ES6
- Mapeando e transformando dados (map)
- Filtrando e selecionando dados (filter)
- Reduzindo e compondo dados (reduce)
- Ñ é só a TV que deve ser flat (flatten)
- Casamento sólido entre Arrays (concat)
- Objeto tb é gente! (Object)
- Quem disse que ñ rola tirar o this?
- Angular1? NUM PODE C!!!
- jQuery? Aí vc ta de zoera!

## Aula 1

### Funçoes

O algoritmo mais basico que aprendemos na faculdade é o de testar uma idade.

Mais facil mostrar do que falar:

```js

var idade = 19

if ( idade >= 18 )
  return "Eh maior de idade"
else
  return "Eh menor de idade"

```

Pense comigo:

> Quando vc testa algo qual a resposta que vc espera?

> **Se é verdadeiro ou falso.**

```js

const idade = 19

const ehMaior = ( idade ) => idade >= 18 

ehMaior( idade )
  ? "Eh maior de idade"
  : "Eh menor de idade"

```

```js

const idade = 19

const ehMaior = ( idade ) => idade >= 18 
const escreveEhMaior = () => "Eh maior de idade"
const escreveEhMenor = () => "Eh menor de idade"

ehMaior( idade )
  ? escreveEhMaior()
  : escreveEhMenor()

```

> Sabe por que dessa forma é melhor??

> Simples, mostrarei com código!

Vamos pensar que precisamos testar a idade de um grupo de pessoas:

```js

const idades = [ 4, 5, 8, 17, 18, 19, 666 ]

const ehMaior = ( idade ) => idade >= 18 
const escreveEhMaior = () => "Eh maior de idade"

const maiores = idades.filter( ehMaior )

console.log( escreveEhMaior(), maiores.join(', ') )

```

E agora no modo imperativo:

```js
const escreveEhMaior = () => "Eh maior de idade"

const idades = [ 4, 5, 8, 17, 18, 19, 666 ]
let maiores = []

for (let i = 0; i < idades.length; i++ ) {
  if ( idades[ i ] >= 18 ) 
    maiores.push( idades[ i ] )
}

console.log( escreveEhMaior(), maiores.join(', ') )

```

> Percebeu qual o problema com o código acima mesmo ele dando o mesmo resultado?

Fora que podemos refatorar nosso código para deixa-lo mais genérico para que possa ser reusado em outros contextos, por exemplo:


```js

const ages = [ 4, 5, 8, 17, 18, 19, 666 ]

const not = ( something ) => ! something
const isBiggerThan = ( y, not ) => ( x ) => 
  ( not ) ? not( x > y ) : x > y

const isBiggerThan8 = isBiggerThan( 8 )
const isLowerThan8 = isBiggerThan( 8, not )
const bigger = ages.filter( isBiggerThan8 )
const lower = ages.filter( isLowerThan8 )

console.log( bigger )
// [ 17, 18, 19, 666 ]
console.log( lower )
// [ 4, 5, 8 ]

```

> Percebeu a malandragem???

Fiz apenas como exemplo, pois normalmente nao fazemos a negaçao dessa forma. Entao aguarde que ainda chegaremos la!

Depois de saber disso vou demonstrar como pensar em reduzir um problema q pode até parecer simples, como a validaçao de um número primo

<br>
<br>

### Aula 1 - Resolvendo um problema

Preciso testar se os números 10.002 e 10.003 s4o primos.

<br>


Eu SEMPRE inicio meu pensamento para solucionar algo pelos conceitos envolvidos, os quais vc consegue ler e ja entender.

Exemplo:

> O que é um número primo?

> "...um número natural primo tem unicamente dois divisores naturais distintos: o número um e ele mesmo"

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

Com isso podemos inferir que:

> Ele só é divisível por ele mesmo e por 1.

Entao o algoritmo para sabermos isso eh BEM simples:

```

Pego o número e testo se a divisao deles por TODOS seus
antecessores, menos o 1, retorna 0 em algum momento.

Se retornar eh pq esse número tem divisor entre ele e o 1,
logo ñ é primo!

Se ñ achar nenhum é primo!

```

Vejamos isso em JS comum:

```js

const _isPrime = ( n ) => { 
  let c = n-1; 
  
  while( c-- ){ 
    if( (n % c) === 0) return false
   } 
   return true 
 }

```

Logo isso nos remete a outros 2 conceitos numéricos, um número pode ser par ou ímpar, correto???

Para um número ser par ele precisa ser o que?

> **Divisível por 2!**

Entao QQUER número par ...


<br>
<br>
<br>

> Ñ pode ser primo!


> **Nopzzz!** Nem todos.

Pense comigo: o 2 é divisível por ele e por 1. Logo **ele tb é primo!**

Levando isso em consideraçao ja temos nossa primeira regra de validaçao e ñ apenas de validaçao, me acompanhe.

Se formo

### Aula 1 - Refatorando a soluçao



## Code Style Funcional

* **Use 2 espaços** para identação.

  ```js
  const hello = ( name ) => {
    console.log( 'oi', name )
    console.log( 'tchau', name )
  }
  ```

* **Use aspas simples para strings**.

  ```js
  console.log( 'Salveeee galera do Funcional!!!' )
  ```

* **Sem constiáveis não-utilizadas.**

  ```js
  const myFunction () => {
    const result = something()   // ✗ evite
  }
  ```

* **Adicione um espaço após as keywords.**

  ```js
  if ( condition ) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evite
  ```

* **Adicione um espaço antes do parêntese de declaração de funções.**

  ```js
  function name ( arg ) { ... }   // ✓ ok
  function name( arg ) { ... }    // ✗ evite

  run( () => { ... } )      // ✓ ok
  run(() => { ... } )       // ✗ evite
  ```

* **Sempre use** `===` ao invés de  `==`.<br>
  Exceção: `obj == null` é permitido pra checar se `null || undefined`.

  ```js
  if ( name === 'John')   // ✓ ok
  if ( name == 'John')    // ✗ evite
  ```

  ```js
  if ( name !== 'John')   // ✓ ok
  if ( name != 'John')    // ✗ evite
  ```

* **Operadores infix** devem ser espaçados.

  ```js
  // ✓ ok
  const a = 2
  const b = 5
  const soma = ( a, b ) => a + b
  ```

  ```js
  // ✗ evite
  const a=2
  const b=5
  const soma = ( a, b ) => a+b
  ```

* **Vírgulas devem ter um espaço** depois delas.

  ```js
  // ✓ ok
  const list = [1, 2, 3, 4]
  const greet ( name, options ) => { ... }
  ```

  ```js
  // ✗ evite
  const list = [1,2,3,4]
  const greet ( name,options ) => { ... }
  ```

* **Adicione um espaço no início e no final dos colchetes.**

  ```js
  // ✓ ok
  const list = [ 1, 2, 3, 4 ]
  ```

  ```js
  // ✗ evite
  const list = [1,2,3,4]
  ```

* **Mantenha os else** na mesma linha das suas chaves.

  ```js
  // ✓ ok
  if ( condition ) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ evite
  if ( condition ) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Para ifs com mais de uma linha,** use chaves.

  ```js
  // ✓ ok
  if ( options.quiet !== true)  console.log( 'done')
  ```

  ```js
  // ✓ ok
  if ( options.quiet !== true ) {
    console.log( 'done')
  }
  ```

  ```js
  // ✗ evite
  if ( options.quiet !== true )
    console.log( 'done' )
  ```

* **Sempre lide** com o parâmetro `err` .

  ```js
  // ✓ ok
  run( ( err ) {
    if ( err ) throw err
    window.alert( 'done' )
  } )
  ```

  ```js
  // ✗ evite
  run( ( err ) {
    window.alert( 'done' )
  } )
  ```

* **Sempre prefixe globais de browser** com `window.`.<br>
  Exceções: `document`, `console` e `navigator`.

  ```js
  window.alert( 'hi')   // ✓ ok
  ```

* **Não é permitido múltiplas linhas em branco.**

  ```js
  // ✓ ok
  const value = 'hello world'
  console.log( value )
  ```

  ```js
  // ✗ evite
  const value = 'hello world'


  console.log( value )
  ```

* **Se for usar operador ternário** em múltiplas linhas, deixe `?` e `:` em suas próprias linhas.

  ```js
  // ✓ ok
  const location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  const location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ evite
  const location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Para declarações de const,** escreva cada declaração na sua própria instrução.

  ```js
  // ✓ ok
  const silent = true
  const verbose = true

  // ✗ evite
  const silent = true, verbose = true

  // ✗ evite
  const silent = true,
      verbose = true
  ```

* **Coloque parẽnteses adicionais** em declarações em condições. Isso torna mais claro que a expressão é uma declaração ( `=`) e não um typo de equidade ( `===`)

  ```js
  // ✓ ok
  while ( ( m = text.match( expr ) ) ) {
    // ...
  }

  // ✗ evite
  while ( m = text.match( expr ) ) {
    // ...
  }
  ```
*
## Ponto-e-vírgula

* Não use. (veja: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  ```js
  window.alert( 'hi' )   // ✓ ok
  window.alert( 'hi' );  // ✗ evite
  ```

* Nunca comece uma linha com `(`, `[`, ou `` ` ``. Esse é o único problema em omitir ponto-e-vírgula, e standard te protege desse problema em potencial.

  ```js
  // ✓ ok
  ;( () => {
    window.alert( 'ok' )
  }() )

  // ✗ evite
  ( () => {
    window.alert( 'ok' )
  }() )
  ```

  ```js
  // ✓ ok
  ;[ 1, 2, 3 ].join( ' - ' )

  // ✗ evite
  [ 1, 2, 3 ].join( ' - ' )
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf( 'o' )

  // ✗ evite
  `hello`.indexOf( 'o' )
  ```

  Nota: Se você frequentemente escreve código assim, você pode estar querendo ser o inteligentão. Cuidado.

  Atalhos inteligentes são desencorajados, em favor de expressões mais limpas e legíveis, sempre que possível.


  Ao invés disso:

  ```js
  ;[ 1, 2, 3 ].forEach( odd )
  ```

  **Isso é bem melhor!**

  ```js
  const nums = [ 1, 2, 3, 4 ]
  const evens = nums.filter( theEvens )
  ```
