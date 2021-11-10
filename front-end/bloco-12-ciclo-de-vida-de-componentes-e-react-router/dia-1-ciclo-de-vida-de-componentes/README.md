# Dia 12.1 - Ciclo de vida de componentes

**Exercícios de fixação:**  
Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.
A api utilizada será a  **_randomuser_** no endereço  [https://api.randomuser.me/](https://api.randomuser.me/) que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome  **_results_** .
Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api  **_randomuser_** . Utilize o método  `componentDidMount`  .
Enquanto os dados não são entregues, deve ser renderizada uma  `div`  com o conteúdo  _loading..._
Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método  `shouldComponentUpdate`  .

>Written with [StackEdit](https://stackedit.io/).