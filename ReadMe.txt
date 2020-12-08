Descrição do projeto passo a passo:

Esse projeto faz parte do curso da Alura sobre a aplicação da biblioteca webpack para viabilizar o
uso do sistemas de módulos do NodeJS em aplicações SPA. Trata-se de uma reaftoração do projeto FetchAPI,
onde o novo código gera dinamicamente as páginas que antes eram geradas pelos arquivos cadastro-clientes.html
e edita-clientes.html.

Projeto de cadastro de clientes, tendo como funcionalidades:
    - Listar os clientes com Nome e CPF na página principal;
    - Editar ou excluir os clientes a partir do próprio registro na lista;
    - Introduzir novos clientes acessando a página de cadastro.

A única página estática é a clientes.html - que é a reponsável por renderizar a navbar, contendo:
    - O logo "doguinho.png;
    - Os links de navegação; 
    - O botão "Novo Cliente"; e
    - O container onde serão renderizadas as outras páginas dinamicamente.

A aplicação está organizada da seguinte maneira:
    - api -> clientes.js - reponsável por executar o fetching com a api do backend, fazendo a comunicação
                           da aplicação com o banco de dados de clientes, viabilizando as operações do CRUD
                           através das funções: "listarClientes", "cadastrarClientes", "deletaCliente",
                           "detalhaCliente" e "editaCliente".
    
    - assets -> css -> reposnsável apenas por personalizar a fonte do texto dos links da navbar, sendo o
                       restante da estilização feita pelo bootstrap.

    - assets -> img -> doguinho.png - logo do header da página.

    - componentes -> cadastro -> componente-cadastro.js - contém o template do formulário de cadastro de
                                                          clientes, contendo a criação da tag <form>, 
                                                          são incluídos os campos e o botão do formulário
                                                          de cadastro de clientes, e no final, envia o form
                                                          para a função "eventoEnvia", que trata os dados 
                                                          inseridos.

    - componentes -> cadastro -> cadastro-clientes.js - recebe o "form" criado no "componente-cadastro" pela
                                                        função "eventoEnvia", que trata onde é monitorado o "click" do botão "Enviar", pegando os dados inseridos nos campos, verifica o cpf com a função "validaCPF" e os envia para cliente.js através da função "cadastrarClientes", que os salva no banco.
    

    - componentes -> edita -> formEdicao.js - de forma semelhante ao componente-cadastro.js, contém o template do
                                              formulário de edição dos dados do cliente, introduzindo os campos
                                              dentro de um "form" que é passado para a função "eventoForm" presente
                                              em "edita-cliente" que trata os dados alterados.

    - componentes -> edita -> edita-cliente.js - a princípio recebe a URL do evento proveniente da pagina pelo 
                                                 método "window.location" e retira desse objeto o "id" pelo método "searchParams.get". Tendo recebido o "form" criado em "formEdicao.js", ele pega os campos de nome e cpf pelo "querySelector" e os imputa os dados que foram enviados pela função "detalhaCliente" que recebeu o "id" como parâmetro e devolveu os dados do cliente que se deseja alterar. Essa função monitora o evento de "click" do botão e faz o teste de validação deo CPF pelo "validaCPF" e envia os dados para o banco através da função "editaCliente" de "cliente.js", que os salva no banco.

    - componentes -> lista -> listagem-cliente.js - tem o papel de exibir as linhas da tabela exibindo os dados dos
                                                    clientes e também os botões de "Editar" e "Excluir". Requisita os
                                                    dados a exibir para a API, através da função "listarClientes",
                                                    criando uma linha na tabela para cada dado devolvido. Além disso 
                                                    tem o papel de gerar o cabeçalho da tabela, incluindo o botão 
                                                    "Novo Cliente", gerenciar os comandos de edição, que passa o "id"
                                                    do cliente que se deseja alterar no endereço da página de edição,
                                                    que será capturado pelo "edita-clientes.js", assim como o comandos de exclusão, criando o botão "Excluir" que executa a 
                                                    função "removeCliente" que recebe o "id" do cliente que se deseja
                                                    excluir e o repassa para a função "deletaCliente", presente em "cliente.js" que exclui o registro do banco.
    
    - componentes -> valida -> validaCPF.js - contém a função que testa CPFs inválidos e retorna
                                              verdadeiro quando todos os testes retornam 
                                              verdadeiros.
    
    - clientes.html - contém o html da parte estática da aplicação.

    - main.js - contém o ponto de entrada para a aplicação, que será usado para rotear todos 
                os módulos pelo "webpack".
    
    - router.js - gera as rotas da aplicação, identificando qual a função será executada de 
                  acordo com o url solicitado, além de gerar o endereço (path) que será passado
                  ao navegador para a exibição do componente envolvido (exibição, edição ou exclusão).

    - webpack.config.js - arquivo de coniguração do webpack e de seus plugins, que são 
                          necessários para fazer a transpilação do sistema modular do NodeJS
                          para uma estrutura que o browser consiga compilar.
    
As dependências de projeto que foram utilizadas foram basicamente:

    - O bootstrap, reposnsável pelo tratamento visual e estilização da página, e

    - O webpack, que gera um pacote de distribuição, juntando todos os módulos em um único
      js, que o browser consegue entender, fazendo uso de seus plugins "css-loader", "file-loade" e "image-loader" que ajudam na compilação de toda a plicação, fazendo
      ainda a minificação do arquivo.
