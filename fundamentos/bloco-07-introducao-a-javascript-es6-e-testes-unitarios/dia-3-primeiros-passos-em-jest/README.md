# Dia 7.3 - Primeiros passos em Jest

Exercícios sobre testes unitários e também sobre como testar em pequenos passos.

 
## Conteúdo

**Exercícios**
 
1. A função  `sum(a, b)`  retorna a soma do parâmetro  `a`  com o  `b`
- Teste se o retorno de  `sum(4, 5)`  é  `9`
 - Teste se o retorno de  `sum(0, 0)`  é  `0`
 - Teste se a função  `sum`  lança um erro quando os parâmetros são  `4`  e  `"5"`  (string 5)
  - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada  `sum(4, "5")`

2. A função `myRemove(arr, item)` recebe um array `arr` e retorna uma cópia desse array sem o elemento `item` caso ele exista no array
- Verifique se a chamada  `myRemove([1, 2, 3, 4], 3)`  retorna o array esperado
-  Verifique se a chamada  `myRemove([1, 2, 3, 4], 3)`  **não** retorna o array  `[1, 2, 3, 4]`
-  Verifique se a chamada  `myRemove([1, 2, 3, 4], 5)`  retorna o array esperado

3. A função `myFizzBuzz(num)` recebe um número `num` e retorna `"fizzbuzz"` se o número for divisível por `3` e `5` , retorna `"fizz"` se for divisível apenas por `3` , retorna `"buzz"` se divisível apenas por `5` , retorna o próprio número caso não seja divisível por `3` ou `5` e retorna `false` caso `num` não seja um número
- Faça uma chamada com um número divisível por  `3`  e  `5`  e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por  `3`  e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por  `5`  e verifique se o retorno é o esperado
-  Faça uma chamada com um número que não é divisível por  `3`  ou  `5`  e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

4. Para as funções `encode` e `decode` crie os seguintes testes em Jest:
-  Teste se  `encode`  e  `decode`  são funções;
-  Para a função  `encode`  teste se as vogais  **a, e, i, o, u** são convertidas em 1, 2, 3, 4 e 5, respectivamente;
-  Para a função  `decode`  teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais  **a, e, i, o, u** , respectivamente;
-  Teste se as demais letras/números não são convertidos para cada caso;
-  Teste se a  `string`  que é retornada pelas funções têm o mesmo número de caracteres que a  `string`  passada como parâmetro.

5. A função `techList` recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a tecnologia e o nome. Implemente a função `techList` a partir dos testes dados.
6. A função `hydrate` recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Implemente a função `hydrate` a partir dos testes dados.

**Bônus**
Você deve criar uma função que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele ( `firstName` , `lastName` , `specialities` ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo `id` para aquele funcionário e a informação consultada. Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificada"` . Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"` .


>Written with [StackEdit](https://stackedit.io/).