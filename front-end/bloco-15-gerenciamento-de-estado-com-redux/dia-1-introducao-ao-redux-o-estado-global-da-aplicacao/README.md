# Dia 15.1 - RTL - Introdução ao Redux - O estado global da aplicação

**Exercício 1**  

Vamos construir um estado gerenciado pelo Redux e vamos realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux.

**1** - Crie uma store para a nossa aplicação.

**2** - Crie um reducer, implementando um  `switch`  retornando apenas o estado inicial como  `default`  . Não se esqueça de colocar o reducer como parâmetro para o  `createStore`  , feito na etapa anterior.

**3** - Incremente o  `switch`  criado no exercício anterior com as  `actions`  `NEXT_COLOR`  e  `PREVIOUS_COLOR`  . Essas actions devem alterar o valor  `index`  guardado no  `ESTADO_INICIAL`  . Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

**4** - Crie  `eventListeners`  que escutam os cliques de cada botão, o  **Previous color** e o  **Next color** , e realizam um  `dispatch`  com o respectivo  `action.type`  de cada.

**5** - Faça o  `subscribe`  da store, alterando o  `innerHTML`  da tag com id  `value`  para a cor atual e o style do elemento com id  `container`  . Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.

**6** - Crie um botão com o texto  **Random color** , um  `eventListener`  e uma  `action`  no  `reducer`  adicionando uma cor aleatória ao array  `colors`  guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado  `index`  para a posição dela.

As cores criadas randomicamente devem ser armazenadas no array. Dessa forma, com os botões de **Next color** e **Previous color** , poderemos trafegar entre as cores padrões e as randômicas. Utilize o `spread operator` para adicionar cada cor randômica.

**Exercício 2**

Vamos combinar dois reducers existentes e retornar algumas informações para a nossa aplicação.
**1** - Combine os reducers existentes com a função  `combineReducers`  e salve-o em uma constante.

**2** - Crie uma store com a combinação dos reducers.

**3** - Crie  `actions`  que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer.

**4** - Crie  `dispatchs`  para alterar os nomes após alguns segundos depois que a página carregar.

**5** - Adicione um `store.subscribe()` para atualizar as informações na página de acordo com o que temos armazenado na `store` . Quando a página carregar o nome renderizado deve ser alterado após alguns segundos.

>Written with [StackEdit](https://stackedit.io/).
