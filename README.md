# React + TypeScript + Vite
## Projeto de Previsão do Tempo utilizando a API Open Meteo

Este projeto tem como objetivo criar previsões do tempo utilizando a API Open Meteo. A API Open Meteo fornece dados meteorológicos precisos e confiáveis. Você pode encontrar mais informações sobre a API [aqui](https://open-meteo.com/).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **src**: Contém o código-fonte do aplicativo.
  - **http**: Centraliza o serviço utilizando Axios para efetuar requisições à API, utilizando a URL base fornecida pela Open Meteo.
  - **components**: Contém componentes básicos do aplicativo, reutilizáveis em diferentes partes do sistema.
  - **hooks**: Responsável pelo tratamento das requisições para salvar os dados de previsão com base na latitude e longitude.
  - **interfaces**: Contém todas as interfaces utilizadas para tipificar o projeto, proporcionando um código mais seguro e legível.
  - **pages**: Agrupa todas as páginas de acesso do aplicativo.
  - **services**: Contém os repositórios responsáveis por realizar as requisições à API, tratando as respostas e fornecendo os dados ao frontend.

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências utilizando o comando `yarn install`.
3. Execute o aplicativo com o comando `yarn dev`.
4. Acesse o aplicativo no navegador através do endereço `http://localhost:3000`.

Certifique-se de configurar corretamente as variáveis de ambiente ou outros parâmetros necessários para autenticar e acessar a API Open Meteo.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, pull requests ou propor melhorias para o projeto.

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE). Consulte o arquivo LICENSE para obter mais detalhes.
