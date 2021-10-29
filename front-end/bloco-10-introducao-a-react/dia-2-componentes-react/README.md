# Dia 10.2 - Componentes React

Exercícios sobre componentes React

**Exercícios de fixação:**  
1. Crie uma aplicação **_React_** na sua máquina via `create-react-app` com o nome `fixation-exercises-10-2` . Crie um arquivo `Image.js` no diretório `src` do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
- Qual o nome do componente declarado acima?
-  Chame o componente  `Image`  , de forma que seja mostrada  [esta imagem,](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg) ou o texto  `Cute cat staring`  , caso a imagem não consiga ser carregada.

2. Crie os componentes dentro do diretório src do projeto fixation-exercises-10-2 , para poder fazer o exercício a seguir.
Agora, responda ao seguinte, no que diz respeito à composição de componentes:
- O que o componente App é em relação a Order ?
- Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App .

**Exercicios:**  

1.  Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon , a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js.
- Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você implemente pelo menos estes dois componentes:
- Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon.
- Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .

>Written with [StackEdit](https://stackedit.io/).